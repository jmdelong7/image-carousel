function createImg(doc, src, alt) {
  const img = doc.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

export default function createImgEles(doc, ...imgs) {
  imgs.map((img) => createImg(doc, img.src, img.alt));
}
