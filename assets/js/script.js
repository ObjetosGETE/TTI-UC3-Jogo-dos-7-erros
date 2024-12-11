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
    }, 2000);

    setTimeout(function () {
      $(".span-save1 img").addClass("escalar");
      $("#audio-like")[0].play();
      setTimeout(function () {
        $(".span-save1 img")
          .attr("src", "assets/img/salvar-alterado.png")
          .removeClass("escalar");
        $("#audio-salvar")[0].play();
      }, 300);
    }, 3000);
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
    }, 2000);

    setTimeout(function () {
      $(".span-save2 img").addClass("escalar");
      $("#audio-like")[0].play();
      setTimeout(function () {
        $(".span-save2 img")
          .attr("src", "assets/img/salvar-alterado.png")
          .removeClass("escalar");
        $("#audio-salvar")[0].play();
      }, 300);
    }, 3000);
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
    }, 2000);

    setTimeout(function () {
      $(".span-save3 img").addClass("escalar");
      $("#audio-like")[0].play();
      setTimeout(function () {
        $(".span-save3 img")
          .attr("src", "assets/img/salvar-alterado.png")
          .removeClass("escalar");
        $("#audio-salvar")[0].play();
      }, 300);
    }, 3000);
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

$(document).ready(function () {
  $(".btn-iniciar").on("click", function () {
    $("#modalIntroducao").modal("show");
  });

  $(".btn-comecar-jogo").on("click", function () {
    $("#modalIntroducao").modal("hide");
  });

  controleBotoes();
  resizeBodyConteudo();
  trocarImagem();
  somDeClique();

  $(window).on("resize", resizeBodyConteudo);
});
