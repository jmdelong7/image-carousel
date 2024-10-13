export default class Carousel {
  constructor(imgs) {
    this.imgs = imgs;
    this.idx = 0;
  }

  get currentImg() {
    return this.imgs[this.idx];
  }

  next() {
    this.idx = (this.idx + 1) % this.imgs.length;
  }

  previous() {
    this.idx = (this.idx - 1 + this.imgs.length) % this.imgs.length;
  }

  goToIdx(idx) {
    this.idx = idx;
  }
}
