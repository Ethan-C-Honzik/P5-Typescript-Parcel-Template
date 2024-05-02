import { Color, Vector } from "p5";

export enum shape {
    Circle=0,
    Square=1,
    Triangle=2,
}

export class Particle {
    private position: Vector;
    private velocity: Vector;
    private hue: number;
    private shape: shape;
    private size: number;
    public speed: number;

    constructor(speed: number, size: number, shape: shape, hue: number) {
        this.position = createVector(random(0, width), random(0, height));
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.size = size;
        this.speed = speed;
        this.shape = shape;
        this.hue = hue;
    }

    private wrapVector(vector: Vector, minX:number, maxX:number, minY: number, maxY: number){
        if(vector.x < minX){
            vector.x = maxX;
        }else if (vector.x > maxX){
            vector.x = minX;
        }
        if(vector.y < minY){
            vector.y = maxY;
        }else if (vector.y > maxY){
            vector.y = minY;
        }
    }

    public tick(deltaTime: number) {
        push();
        colorMode('hsb');
        fill(this.hue, 255, 255);
        this.position.add(this.velocity.x * deltaTime, this.velocity.y * deltaTime);
        this.wrapVector(this.position, 0, width, 0, height);
        switch (this.shape) {
            case shape.Circle:
                circle(this.position.x, this.position.y, this.size);
                break;
            case shape.Square:
                square(this.position.x, this.position.y, this.size);
                break;
            case shape.Triangle:
                triangle(
                    this.position.x-(this.size/2), this.position.y-(this.size/2),
                    this.position.x, this.position.y+(this.size/2),
                    this.position.x+(this.size/2), this.position.y-(this.size/2));
                break;
            default:
                break;
        }
        pop();
    }
}
