const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!;
const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 7;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'src/assets/images/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'src/assets/images/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'src/assets/images/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'src/assets/images/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'src/assets/images/layer-5.png';

let x = 0;
let x2 = 2400;
const animate = () => {
  // Clears the entire canvas after each frame
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.drawImage(backgroundLayer4, x, 0);
  context.drawImage(backgroundLayer4, x2, 0);
  // Set endless background scroll looping between 2 copy of the same background
  if (x < -2400) x = 2400;
  else x -= gameSpeed;
  if (x2 < -2400) x2 = 2400;
  else x2 -= gameSpeed;
  requestAnimationFrame(animate);
};

animate();

export {};
