function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

export default function createImgEles(imgs) {
  return imgs.map((img) => createImg(img.src, img.alt));
}
