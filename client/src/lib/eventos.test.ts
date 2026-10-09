import test from "node:test";
import assert from "node:assert/strict";
import { getEventsBySource, getUpcomingEvents, isUpcomingDate } from "./eventos";

test("la agenda de septiembre excluye los eventos pasados y conserva el inicio confirmado", () => {
  const now = new Date("2026-09-29T08:00:00Z");
  assert.deepEqual(getUpcomingEvents("instituto", now).filter(event => event.id.startsWith("tlbms-")).map(event => event.id), ["tlbms-2026-10-23"]);
  assert.deepEqual(getUpcomingEvents("kshealing", now), []);
  assert.ok(getEventsBySource("instituto").some(event => event.id === "evento-003"));
});

test("la fecha se mantiene durante el día local del evento, aunque UTC ya sea el día siguiente", () => {
  assert.equal(isUpcomingDate("2026-10-23", "America/Mexico_City", new Date("2026-10-24T05:59:59Z")), true);
});

test("el inicio deja de anunciarse como próximo al día siguiente en CDMX", () => {
  const now = new Date("2026-10-24T06:00:00Z");
  assert.equal(isUpcomingDate("2026-10-23", "America/Mexico_City", now), false);
  assert.deepEqual(getUpcomingEvents("instituto", now).filter(event => event.id.startsWith("tlbms-")), []);
});
