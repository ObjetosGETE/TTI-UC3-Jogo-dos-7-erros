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

  $(".reparar1").on("click", function () {
    $(".tela-cozinha").addClass("d-none");
    $(".tela-cozinha-pronta").removeClass("d-none");
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

$(document).ready(function () {
  controleBotoes();
  resizeBodyConteudo();
  trocarImagem();

  $(window).on("resize", resizeBodyConteudo);
});

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
      }, 300);
    }, 3000);
  });
}
