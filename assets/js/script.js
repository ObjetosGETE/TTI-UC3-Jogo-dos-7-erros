$(document).ready(function () {
  
  $(".btn-iniciar").on("click", function () {
    $("#modalIntroducao").modal("show");
  });

  $(".btn-comecar-jogo").on("click", function () {
    $("#modalIntroducao").modal("hide");
  });

  $(".btn-recomecar").on("click", function () {
    location.reload();
  });

  trocarImagem();
  controleBotoes();
  resizeBodyConteudo();
  trocarImagem();
  somDeClique();
  showSlide(currentSlide);
  $(window).on("resize", resizeBodyConteudo);
});

function controleBotoes() {
  $(".btn-iniciar").on("click", function () {
    $(".tela-capa").addClass("d-none");
    $(".tela-introducao").removeClass("d-none");
  });

  $(".btn-jogar").on("click", function () {
    $(".tela-introducao").addClass("d-none");
    $(".bg-jogo").removeClass("d-none");
    $(".tela-cozinha").removeClass("d-none");
  });

  botoesTelaUm();
  botoesTelaDois();
  botoesTelaTres();

  $(".btn-comecar-jogo").on("click", function () {
    $("#modalIntroducao").modal("hide");
  });

  $(".fechar-final").on("click", function () {
    $("#modalFinal").modal("hide");
    $(".tela-quarto-pronta").addClass("d-none");
    $(".tela-cozinha").removeClass("d-none");
  });

}


function botoesTelaUm() {
  let target1Clicked = false;
  let target1aClicked = false;

  $(".target1").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro1").removeClass("transparente");
    target1Clicked = true;
    checkReparar1();
  });

  $(".target1a").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro1a").removeClass("transparente");
    target1aClicked = true;
    checkReparar1();
  });

  function checkReparar1() {
    if (target1Clicked && target1aClicked) {
      $(".reparar1").removeClass("d-none");
    }
  }

  $(".reparar1").on("click", function () {
    $(".tela-cozinha").addClass("d-none");
    $(".tela-cozinha-pronta").removeClass("d-none");
    $(".continua1").removeClass("d-none");
  });

  $(".continua1").on("click", function () {
    $(".tela-cozinha-pronta").addClass("d-none");
    $(".tela-sala").removeClass("d-none");
  });
}

function botoesTelaDois() {
  let target2Clicked = false;
  let target2aClicked = false;
  let target2bClicked = false;

  $(".target2").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro2").removeClass("transparente");
    target2Clicked = true;
    checkReparar2();
  });

  $(".target2a").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro2a").removeClass("transparente");
    target2aClicked = true;
    checkReparar2();
  });

  $(".target2b").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro2b").removeClass("transparente");
    target2bClicked = true;
    checkReparar2();
  });

  function checkReparar2() {
    if (target2Clicked && target2aClicked && target2bClicked) {
      $(".reparar2").removeClass("d-none");
    }
  }

  $(".reparar2").on("click", function () {
    $(".tela-sala").addClass("d-none");
    $(".tela-sala-pronta").removeClass("d-none");
    $(".continua2").removeClass("d-none");
  });

  $(".continua2").on("click", function () {
    $(".tela-sala-pronta").addClass("d-none");
    $(".tela-quarto").removeClass("d-none");
  });
}

function botoesTelaTres() {
  let target3Clicked = false;
  let target3aClicked = false;


  $(".target3").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro3").removeClass("transparente");
    target3Clicked = true;
    checkReparar3();
  });

  $(".target3a").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro3a").removeClass("transparente");
    target3aClicked = true;
    checkReparar3();
  });

  function checkReparar3() {
    if (target3Clicked && target3aClicked) {
      $(".reparar3").removeClass("d-none");
    }
  }

  $(".reparar3").on("click", function () {
    $(".tela-quarto").addClass("d-none");
    $(".tela-quarto-pronta").removeClass("d-none");
    $(".continua3").removeClass("d-none");
  });

  $(".continua3").on("click", function () {
    $("#modalFinal").modal("show");
  });
}

function escalaProporcao(largura, altura) {
  var larguraScreen = $(window).width();
  var alturaScreen = $(window).height();
  var proporcaoAltura = (alturaScreen * 100) / altura;
  var proporcaoLargura = (larguraScreen * 100) / largura;
  var proporcao, larguraAltura, larguraAlturaAuto;

  if (proporcaoAltura < proporcaoLargura) {
    larguraAltura = "height";
    larguraAlturaAuto = "width";
    proporcao = proporcaoAltura / 100;
  } else {
    larguraAltura = "width";
    larguraAlturaAuto = "height";
    proporcao = proporcaoLargura / 100;
  }

  return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyConteudo() {
  var proporcao1920 = escalaProporcao(1920, 1080)[0];

  $(".conteudo").css({
    transform: "scale(" + proporcao1920 + ")",
    "transform-origin": "center center",
  });

  var proporcao900;

  if ($(window).width() < 992) {
    proporcao900 = escalaProporcao(900, 576)[0];
  } else {
    proporcao900 = 1;
  }
}

function trocarImagem() {
  $(".reparar1").on("click", function () {
    setTimeout(function () {
      $(".span-like1 img").addClass("escalar");

      setTimeout(function () {
        $("#audio-like")[0].play();
        $(".span-like1 img")
          .attr("src", "assets/img/like.png")
          .removeClass("escalar");
      }, 300);
    }, 1000);

    setTimeout(function () {
      $(".span-save1 img").addClass("escalar");
      $("#audio-like")[0].play();
      setTimeout(function () {
        $(".span-save1 img")
          .attr("src", "assets/img/salvar-alterado.png")
          .removeClass("escalar");
        $("#audio-salvar")[0].play();
      }, 300);
    }, 2000);
  });

  $(".reparar2").on("click", function () {
    setTimeout(function () {
      $(".span-like2 img").addClass("escalar");

      setTimeout(function () {
        $("#audio-like")[0].play();
        $(".span-like2 img")
          .attr("src", "assets/img/like.png")
          .removeClass("escalar");
      }, 300);
    }, 1000);

    setTimeout(function () {
      $(".span-save2 img").addClass("escalar");
      $("#audio-like")[0].play();
      setTimeout(function () {
        $(".span-save2 img")
          .attr("src", "assets/img/salvar-alterado.png")
          .removeClass("escalar");
        $("#audio-salvar")[0].play();
      }, 300);
    }, 2000);
  });

  $(".reparar3").on("click", function () {
    setTimeout(function () {
      $(".span-like3 img").addClass("escalar");

      setTimeout(function () {
        $("#audio-like")[0].play();
        $(".span-like3 img")
          .attr("src", "assets/img/like.png")
          .removeClass("escalar");
      }, 300);
    }, 1000);

    setTimeout(function () {
      $(".span-save3 img").addClass("escalar");
      $("#audio-like")[0].play();
      setTimeout(function () {
        $(".span-save3 img")
          .attr("src", "assets/img/salvar-alterado.png")
          .removeClass("escalar");
        $("#audio-salvar")[0].play();
      }, 300);
    }, 2000);
  });
}

function somDeClique() {
  $(".btn").on("click", function () {
    var audio = document.getElementById("audio-clique");
    if (audio) {
      audio.play();
    }
  });
}

let currentSlide = 0;
const slides = $(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

  slides.removeClass("active");
  $(slides[currentSlide]).addClass("active");

  $(".carousel-indicator").removeClass("active");
  $(`.carousel-indicator[data-bs-slide-to="${currentSlide}"]`).addClass(
    "active"
  );

  if (currentSlide === 0) {
    $("#prev-slide").css("visibility", "hidden").prop("disabled", true);
  } else {
    $("#prev-slide").css("visibility", "visible").prop("disabled", false);
  }

  if (currentSlide === totalSlides - 1) {
    $("#next-slide").css("visibility", "hidden").prop("disabled", true);
  } else {
    $("#next-slide").css("visibility", "visible").prop("disabled", false);
  }
}

$("#next-slide").on("click", function () {
  showSlide(currentSlide + 1);
});

$("#prev-slide").on("click", function () {
  showSlide(currentSlide - 1);
});
