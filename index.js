//轮播图代码
const imgArr = [
  {
    path: "./images/img0.jpeg"
  },
  {
    path: "./images/img1.jpeg"
  },
  {
    path: "./images/img2.jpeg"
  },
  {
    path: "./images/img3.jpeg"
  }
];
const btnImg = [
  {
    id: "pre",
    path: "./images/pre.png"
  },
  {
    id: "next",
    path: "./images/next.png"
  }
];
let obj = new Swiper({
  imgArr: imgArr,
  btnImg: btnImg,
  animationTime: 500,
  lastTime: 3000,
  autoPlay: true,
  width: 1000
});
obj.init();