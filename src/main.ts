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

class Layer {
  public x: number = 0;
  public y: number = 0;
  public width: number = 2400;
  public height: number = 700;
  public x2: number = this.width;
  public speedModifier: number = 5;
  public speed: number = gameSpeed * this.speedModifier;

  constructor(public image: CanvasImageSource, speedModifier: number) {
    this.speedModifier = speedModifier;
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

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
    layer.update();
    layer.draw();
  });

  requestAnimationFrame(animate);
};

animate();

export {};
