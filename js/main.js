if (!sessionStorage.getItem("loaded")) {
  $(".modal-overlay-loading").fadeIn();
  let counter = 2;
  const loader = setInterval(() => {
    if (counter === 100) {
      clearInterval(loader);
      $(".modal-overlay-loading").fadeOut();
    }
    $(".modal__load-num").text(counter);
    counter++;
  }, 25);

  sessionStorage.setItem("loaded", true);
}

$(function () {
  // Slider rewiews

  const swiper = new Swiper(".swiper-rewiews", {
    direction: "vertical",
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Tabs
  $(".tab").on("click", function () {
    $(this)
      .addClass("tab--active")
      .siblings()
      .removeClass("tab--active")
      .closest(".tabs-wrapper")
      .find(".tab-content")
      .removeClass("tab-content--active")
      .eq($(this).index())
      .addClass("tab-content--active");
  });

  //Accordion
  $(".accordion__text").hide();
  $(".accordion__title").on("click", function () {
    if ($(this).hasClass("accordion__title--active")) {
      $(".accordion__title")
        .removeClass("accordion__title--active")
        .next()
        .slideUp();
    } else {
      $(".accordion__title")
        .removeClass("accordion__title--active")
        .next()
        .slideUp();
      $(this).addClass("accordion__title--active").next().slideDown();
    }
  });

  // Forms

  $(".form-block-2, .form-block-3").hide();

  $(".form__btn-1").on("click", function () {
    if ($(".form__input-1").val() !== "" && $(".form__input-2").val() !== "") {
      $(".form-block-1").fadeOut();
      $(".form-block-2").fadeIn();
    }
  });

  $(".form__left-radio").on("click", function () {
    $(".form__left-radio").removeAttr("checked");
  });

  $(".form__right-radio").on("click", function () {
    $(".form__right-radio").removeAttr("checked");
  });

  $(".form__btn-2").on("click", function () {
    $(".form-block-2").fadeOut();
    $(".form-block-3").fadeIn();
  });

  $(".form__btn-3").on("click", function (e) {
    e.preventDefault();
    $(".form-block-3").fadeOut();
    $(".form-block-1").fadeIn();
    $(".modal-overlay-thanks").fadeIn();
    $(".form").trigger("reset");
    setTimeout(function () {
      $(".modal-overlay-thanks").fadeOut();
    }, 3000);
  });

  // Gallery more

  $(".gallery__item:nth-child(n+8)").hide();
  $(".gallery__more").on("click", function () {
    $(".gallery__item:nth-child(n+8)").slideDown();
    $(this).hide();
  });

  if ($(window).outerWidth() <= 768) {
    $(".gallery__item:nth-child(n+4)").hide();
    $(".gallery__more").on("click", function () {
      $(".gallery__item:nth-child(n+4)").slideDown();
      $(this).hide();
    });
  }

  // Tabs scroll

  if ($(window).outerWidth() <= 600) {
    $(".tab").on("click", function () {
      let anchor = $(this).attr("data-anchor");

      $("html, body").animate(
        {
          scrollTop: $(anchor).offset().top - 75,
        },
        {
          duration: 370, // по умолчанию «400»
          easing: "linear", // по умолчанию «swing»
        }
      );

      return false;
    });
  }

  // Masked

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  $(".masked")
    .on("click", function () {
      $(this).setCursorPosition(3);
    })
    .mask("+7(999) 999-9999");

  $(".masked").mask("+7(999) 999-9999");
});
