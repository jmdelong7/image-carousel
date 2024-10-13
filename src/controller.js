import Carousel from "./carousel";
import createImage from "./create-image";

class Controller {
  constructor(doc, carousel, frame, nextBtn, prevBtn, nav) {
    this.doc = doc;
    this.carousel = carousel;
    this.frame = frame;
    this.nextBtn = nextBtn;
    this.prevBtn = prevBtn;
    this.nav = nav;
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
    const circle = this.doc.createElement('li');
    circle.classList.add('circle');
    this.nav.insertAdjacentElement('beforeend', circle);
  }

  addImg(src, alt) {
    const img = createImage(this.doc, src, alt);
    this.carousel.addImg(img);
    const circle = this.createNavCircle();
    this.navEventListener(circle, img);
  }

  addImgs(...imgs) {
    imgs.forEach((img) => {
      this.addImg(img.src, img.alt);
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
