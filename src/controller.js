import Carousel from "./carousel";
import createImage from "./create-image";

class Controller {
  constructor(doc, carousel, frame, nextBtn, prevBtn, idxBtns) {
    this.doc = doc;
    this.carousel = carousel;
    this.frame = frame;
    this.nextBtn = nextBtn;
    this.prevBtn = prevBtn;
    this.idxBtns = idxBtns;
  }

  nextPrevEventListeners() {
    this.nextBtn.addEventListener('click', () => {
      this.next();
    });

    this.prevBtn.addEventListener('click', () => {
      this.previous();
    });
  }

  addImg(src, alt) {
    const img = createImage(this.doc, src, alt);
    this.carousel.addImg(img);
  }

  displayImg(img) {
    this.frame.innerHTML = '';
    this.frame.insertAdjacentHTML('beforeend', img);
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