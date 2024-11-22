
$('.btn-iniciar').on('click', function() {
  $('.tela-capa').addClass('d-none');
  $(".tela-introducao").removeClass("d-none");
});

$('.btn-jogar').on('click', function() {
  $('.tela-introducao').addClass('d-none');
  $(".tela-introducao").removeClass("d-none");
});


document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});