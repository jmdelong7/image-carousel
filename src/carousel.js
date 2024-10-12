class Carousel {
  constructor(...imgs) {
    this.imgs = imgs;
    this.idx = 0;
  }

  get currentImg() {
    return this.imgs[this.idx];
  }

  next() {
    this.idx = (this.idx + 1) % this.imgs.length;
    return this.currentImg;
  }

  previous() {
    this.idx = (this.idx - 1 + this.imgs.length) % this.imgs.length;
    return this.currentImg;
  }

  goToIdx(idx) {
    if (idx < 0 && idx >= this.imgs.length) {
      return this.idx;
    }
    this.idx = idx;
    return this.imgs[idx];
  }
}
