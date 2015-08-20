function toHome() {
  window.location.href=".header";
  e.preventDefault();
  e.stopPropagation();
}
function toSection1() {
  window.location.href=".section1";
}

$('.tosection1').click('toSection1()');
