import {
  backgroundLayer1,
  backgroundLayer2,
  backgroundLayer3,
  backgroundLayer4,
  backgroundLayer5
} from './data/backgroundLayers';
import { Layer } from './model/Layer';

const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!;
const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 7;
const slider = document.querySelector<HTMLFormElement>('#slider')!;
slider.value = gameSpeed;

const showGameSpeed = document.querySelector('#show-game-speed')!;
showGameSpeed.innerHTML = gameSpeed.toString();
slider.addEventListener('change', e => {
  const target = e.target as HTMLFormElement;
  gameSpeed = target.value;
  showGameSpeed.innerHTML = gameSpeed.toString();
});

window.addEventListener('load', () => {
  const layer1 = new Layer(backgroundLayer1, 0.2);
  const layer2 = new Layer(backgroundLayer2, 0.4);
  const layer3 = new Layer(backgroundLayer3, 0.6);
  const layer4 = new Layer(backgroundLayer4, 0.8);
  const layer5 = new Layer(backgroundLayer5, 1);

  const gameLayers = [layer1, layer2, layer3, layer4, layer5];

  const animate = () => {
    // Clears the entire canvas after each frame
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Set endless background scroll looping between 2 copy of the same background
    gameLayers.forEach(layer => {
      layer.update(gameSpeed);
      layer.draw(context);
    });

    requestAnimationFrame(animate);
  };

  animate();
});
