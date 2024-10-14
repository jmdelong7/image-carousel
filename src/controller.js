import Carousel from './carousel';
import createImgEles from './create-image';

export default class Controller {
  constructor(frame, prevBtn, nextBtn, nav, imgs) {
    this.carousel = new Carousel(imgs);
    this.frame = frame;
    this.nextBtn = nextBtn;
    this.prevBtn = prevBtn;
    this.nav = nav;

    this.convertCarouselImgs();
    this.nextPrevEventListeners();
    this.assignNavCircles();
    this.displayImg(this.carousel.imgs[0]);
  }

  nextTimeout(time) {
    setInterval(this.next.bind(this), time);
  }

  convertCarouselImgs() {
    this.carousel.imgs = createImgEles(this.carousel.imgs);
  }

  nextPrevEventListeners() {
    this.nextBtn.addEventListener('click', () => {
      this.next();
    });

    this.prevBtn.addEventListener('click', () => {
      this.previous();
    });
  }

  createNavCircle() {
    const circle = document.createElement('li');
    circle.classList.add('circle');
    this.nav.insertAdjacentElement('beforeend', circle);
    return circle;
  }

  toggleNavSelected() {
    const circles = [...this.nav.childNodes];
    circles.forEach((li) => li.classList.remove('filled'));
    circles[this.carousel.idx].classList.add('filled');
  }

  navEventListener(circle, img) {
    circle.addEventListener('click', () => {
      const idx = this.carousel.imgs.indexOf(img);
      this.goToIdx(idx);
    });
  }

  assignNavCircles() {
    this.carousel.imgs.forEach((img) => {
      const circle = this.createNavCircle();
      this.navEventListener(circle, img);
    });
  }

  displayImg(img) {
    this.frame.innerHTML = '';
    this.frame.insertAdjacentElement('beforeend', img);
    this.toggleNavSelected();
  }

  next() {
    this.carousel.next();
    this.displayImg(this.carousel.currentImg);
  }

  previous() {
    this.carousel.previous();
    this.displayImg(this.carousel.currentImg);
  }

  goToIdx(idx) {
    this.carousel.goToIdx(idx);
    this.displayImg(this.carousel.currentImg);
  }
}
