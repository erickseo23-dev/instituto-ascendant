import { tlbmsCohort } from "../content/tlbms";
import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";
import { getEventsBySource, getUpcomingEvents, isUpcomingDate } from "./eventos";

test("la agenda de noviembre excluye los eventos pasados y conserva el inicio confirmado", () => {
  const now = new Date("2026-11-09T08:00:00Z");
  assert.deepEqual(getUpcomingEvents("instituto", now).filter(event => event.id.startsWith("tlbms-")).map(event => event.id), ["tlbms-2026-12-04"]);
  assert.deepEqual(getUpcomingEvents("kshealing", now), []);
  assert.ok(getEventsBySource("instituto").some(event => event.id === "evento-003"));
});

test("la fecha se mantiene durante el día local del evento, aunque UTC ya sea el día siguiente", () => {
  assert.equal(isUpcomingDate("2026-12-04", "America/Mexico_City", new Date("2026-12-05T05:59:59Z")), true);
});

test("el inicio deja de anunciarse como próximo al día siguiente en CDMX", () => {
  const now = new Date("2026-12-05T06:00:00Z");
  assert.equal(isUpcomingDate("2026-12-04", "America/Mexico_City", now), false);
  assert.deepEqual(getUpcomingEvents("instituto", now).filter(event => event.id.startsWith("tlbms-")), []);
});

test("la convocatoria publica diciembre y mantiene las compras pausadas", () => {
  assert.equal(tlbmsCohort.startDate, "2026-12-04");
  assert.equal(tlbmsCohort.startLabel, "Viernes 4 de diciembre de 2026");
  assert.equal(tlbmsCohort.status, "paused");
  assert.equal(tlbmsCohort.startTime, "16:00");
  assert.equal(tlbmsCohort.scheduleLabel, "Viernes · 4:00 p.m. CDMX");
  assert.doesNotMatch(tlbmsCohort.description, /octubre|5 de diciembre/i);
});

test("los botones de compra no navegan al checkout mientras se prepara la inscripción", () => {
  const notice = readFileSync(new URL("../components/TlbmsCohortNotice.tsx", import.meta.url), "utf8");
  assert.match(notice, /<button type="button" disabled/);
  assert.doesNotMatch(notice, /href=\{option.url\}/);
  assert.doesNotMatch(notice, /Inscripciones abiertas|Inscripciones hasta/);
});
