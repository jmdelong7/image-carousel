export default function createImage(doc, src, alt) {
  const img = doc.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}
