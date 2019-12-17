import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
// import { Modal } from "./Modal";
import image1 from '../images/1_1.jpg';
import image2 from '../images/2_1.jpg';
import image3 from '../images/5_1.jpg';
import image4 from '../images/6_3.jpg';
import image5 from '../images/4_1.jpg';

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector('.cursor'));
const slidesData = [
  {
    image: image1,
    title: "Meng-lin Hsieh",
    meta: "謝孟霖 | 前端工程師",
    more: "about.html"
  },
  {
    image: image2,
    title: "Experience",
    meta: "Ｗeb Front-End Developer 前端工程師 | 商業/活動攝影",
    more: "experience.html"
  },
  {
    image: image3,
    title: "Portfolio",
    meta: "Vue電商網站 | 網站切版 | 素材影像處理 | api串接 | 平面攝影",
    more: "portfolio.html"
  },
  {
    image: image4,
    title: "Skills",
    meta: "JavaScript | Vue.js | HTML | SCSS | AJAX | jQuery | Boostrap | Webpack | Github | RoR專案經驗",
    more: "skills.html"
  },
  {
    image: image5,
    title: "Contact",
    meta: "請與我聯繫 | x19921111@gmail.com",
    more: ""
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

function AddLink2Text($str) {
   $str = preg_replace("#(http://[0-9a-z._/?=&;]+)#i","<a href=\"\\1\"target=\"_blank\">\\1</a>", $str);
   $str = preg_replace("#([0-9a-z._]+@[0-9a-z._?=]+)#i","<a href=\"mailto:\\1\">\\1</a>", $str);
   return $str;
}