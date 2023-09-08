export default function SwiperModule() {
  const eleFree = document.querySelectorAll(".free-slide");

  if (eleFree) {
    eleFree.forEach((ele, i) => {
      var swiper2 = new Swiper(ele.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
          el: ele.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        loop: ele.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }

  const productCt = document.querySelector(".product-ct");
  if(productCt){
    var swiperBottom = new Swiper(productCt.querySelector(".mySwiperBottom"), {
     
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiperTop = new Swiper(productCt.querySelector(".mySwiperTop"), {
      slidesPerView: "auto",
      speed:1200,
      navigation: {
        nextEl: productCt.querySelector(".next"),
        prevEl: productCt.querySelector(".prev"),
      },
      thumbs: {
        swiper: swiperBottom,
      },
    });
  }
}