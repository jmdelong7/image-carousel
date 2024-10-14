import './styles.css';
import Controller from './controller';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';

const imgs = [
  {
    src: img1,
    alt: 'img-1',
  },
  {
    src: img2,
    alt: 'img-2',
  },
  {
    src: img3,
    alt: 'img-3',
  },
  {
    src: img4,
    alt: 'img-4',
  },
  {
    src: img5,
    alt: 'img-5',
  },
];

function display(frameId, prevBtnId, nextBtnId, navId, timeout) {
  const frame = document.getElementById(frameId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const nav = document.getElementById(navId);
  return new Controller(frame, prevBtn, nextBtn, nav, imgs, timeout);
}

window.display = display('frame', 'prev', 'next', 'nav-list', 5000);
