import Carousel from './carousel';
import createImgEles from './create-image';

export default class Controller {
  constructor(frame, nextBtn, prevBtn, nav, imgs) {
    this.carousel = new Carousel(imgs);
    this.frame = frame;
    this.nextBtn = nextBtn;
    this.prevBtn = prevBtn;
    this.nav = nav;

    this.convertCarouselImgs();
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

  navEventListener(circle, img) {
    circle.addEventListener('click', () => {
      this.displayImg(img);
    });
  }

  createNavCircle() {
    const circle = document.createElement('li');
    circle.classList.add('circle');
    this.nav.insertAdjacentElement('beforeend', circle);
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
