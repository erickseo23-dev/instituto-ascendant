const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
// Los enlaces de inscripción navegan a los checkouts oficiales de Kajabi.
// La landing no captura datos personales ni procesa pagos.
