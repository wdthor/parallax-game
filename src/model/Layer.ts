export class Layer {
  private x: number = 0;
  private y: number = 0;
  private width: number = 2400;
  private height: number = 700;
  private speed: number = 1;

  constructor(
    private image: CanvasImageSource,
    private speedModifier: number = 1
  ) {}

  update(gameSpeed: number) {
    this.speed = gameSpeed * this.speedModifier;

    if (this.x <= -this.width) {
      this.x = 0;
    }
    this.x = this.x - this.speed;
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}
