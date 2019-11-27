import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import image1 from '../images/1_1.jpg';
import image2 from '../images/2_1.jpg';
import image3 from '../images/5_1.jpg';
import image4 from '../images/3_1.jpg';
import image5 from '../images/4_1.jpg';

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector('.cursor'));
const slidesData = [
  {
    image: image1,
    title: "About",
    meta: "Meng-lin Hsieh | 謝孟霖"
  },
  {
    image: image2,
    title: "Experience",
    meta: "F2E UI/UX Developer | 前端/UIUX設計工程師"
  },
  {
    image: image3,
    title: "Portfolio",
    meta: "Vue電商網"
  },
  {
    image: image4,
    title: "Skills",
    meta: "JavaScript ES6/Vue.js/HTML/CSS/AJAX/Boostrap/Webpack工具/Github專案開發經驗/Ruby on Rails專案開發經驗"
  },
  {
    image: image5,
    title: "Contact",
    meta: "x19921111@gmail.com"
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