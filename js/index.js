import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
// import { Modal } from "./Modal";
import image1 from '../images/1_1.jpg';
import image2 from '../images/2_1.jpg';
import image3 from '../images/5_1.jpg';
import image4 from '../images/3_1_1.jpg';
import image5 from '../images/4_1_1.jpg';

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector('.cursor'));
const slidesData = [
  {
    image: image1,
    title: "About",
    meta: "Meng-lin Hsieh | 謝孟霖",
    more: "modal1"
  },
  {
    image: image2,
    title: "Experience",
    meta: "F2E & UI/UX Developer| 前端 & UI/UX 設計工程師 | 商業/活動攝影",
    more: "about.html"
  },
  {
    image: image3,
    title: "Portfolio",
    meta: "Vue電商網站 | 網站切版 | 素材影像處理 | api串接 | 平面攝影",
    more: "about.html"
  },
  {
    image: image4,
    title: "Skills",
    meta: "JavaScript | Vue.js | HTML | CSS | AJAX | jQuery | Boostrap | Webpack | Github | RoR專案經驗",
    more: "about.html"
  },
  {
    image: image5,
    title: "Contact",
    meta: "x19921111@gmail.com",
    more: "about.html"
  }
];

const slides = new Slides(slidesData);
const showcase = new Showcase(slidesData, {
  onActiveIndexChange: activeIndex => {
    slides.onActiveIndexChange(activeIndex);
  },
  onIndexChange: index => {
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    cursor.enter();
    slides.appear();
  },
  onZoomOutFinish: ({ activeIndex }) => {
  },
  onFullscreenStart: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => {
  }
});

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function() {
  showcase.onResize();
});

window.addEventListener("mousemove", function(ev) {
  showcase.onMouseMove(ev);
});