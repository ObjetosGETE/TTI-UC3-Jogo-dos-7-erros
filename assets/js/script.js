$(document).ready(function () {
  $(".btn-iniciar").on("click", function () {
    $("#modalIntroducao").modal("show");
  });

  $(".btn-comecar-jogo").on("click", function () {
    $("#modalIntroducao").modal("hide");
  });

  $(".btn-recomecar").on("click", function () {
    resetGame();
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

  $(".target1").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro1").removeClass("transparente");
    $(".reparar1").removeClass("d-none");
  });

  $(".target1a").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro1a").removeClass("transparente");
    $(".reparar1a").removeClass("d-none");
  });

  $(".reparar1").on("click", function () {
    $(".tela-cozinha").addClass("d-none");
    $(".tela-cozinha-pronta").removeClass("d-none");
    $(".continua1").removeClass("d-none");
  });

  $(".continua1").on("click", function () {
    $(".tela-cozinha-pronta").addClass("d-none");
    $(".tela-sala").removeClass("d-none");
  });

  $(".target2").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro2").removeClass("transparente");
    $(".reparar2").removeClass("d-none");
  });

  $(".target2a").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro2a").removeClass("transparente");
    $(".reparar2a").removeClass("d-none");
  });

  $(".target2b").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro2b").removeClass("transparente");
    $(".reparar2b").removeClass("d-none");
  });

  $(".reparar2").on("click", function () {
    $(".tela-sala").addClass("d-none");
    $(".tela-sala-pronta").removeClass("d-none");
    $(".continua2").removeClass("d-none");
  });

  $(".continua2").on("click", function () {
    $(".tela-sala-pronta").addClass("d-none");
    $(".tela-quarto").removeClass("d-none");
  });

  $(".target3").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro3").removeClass("transparente");
    $(".reparar3").removeClass("d-none");
  });

  $(".target3a").on("click", function () {
    $(this).find("img").removeClass("transparente");
    $(".erro3a").removeClass("transparente");
    $(".reparar3a").removeClass("d-none");
  });

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

$(".btn-comecar-jogo").on("click", function () {
  $("#modalIntroducao").modal("hide");
});

$(".fechar-final").on("click", function () {
  $("#modalFinal").modal("hide");
  $(".tela-quarto-pronta").addClass("d-none");
  $(".tela-cozinha").removeClass("d-none");
});


function resetGame() {
  $(".div-cena").addClass("d-none");

  $(".tela-capa").removeClass("d-none");

  $(".transparente").addClass("transparente");
  $(".reparar1, .reparar2, .reparar3").addClass("d-none");
  $(".continua1, .continua2, .continua3").addClass("d-none");
  $(".tela-cozinha, .tela-sala, .tela-quarto").addClass("d-none");
  $(".tela-cozinha-pronta, .tela-sala-pronta, .tela-quarto-pronta").addClass("d-none");
  $(
    ".target1 img, .target1a img, .target2 img, .target2a img, .target2b img, .target3 img, .target3a img"
  ).addClass("transparente");
  $(".erro1, .erro1a, .erro2, .erro2a, .erro2b, .erro3, .erro3a").addClass("transparente");
  $("#modalFinal").modal("hide");

  resetAnimations();
}

function resetAnimations() {
  $(".span-like1 img, .span-like2 img, .span-like3 img")
    .attr("src", "assets/img/coracao.png")
    .removeClass("escalar");

  $(".span-save1 img, .span-save2 img, .span-save3 img")
    .attr("src", "assets/img/salvar.png")
    .removeClass("escalar");
}
