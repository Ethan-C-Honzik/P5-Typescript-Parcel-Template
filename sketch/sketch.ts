import { Image } from "p5";
import { Pane } from "tweakpane";
import { Particle, shape } from "./particle";

//tweakpane code
const PARAMS = {
    speed: 0.2,
    color: "#FF0055"
};
const pane = new Pane();
pane.addBinding(PARAMS, "speed", {min: 0, max: 1, step: 0.01});

let background: Image;
window["preload"] = function preload(){
    background = loadImage("cat.jpg");
} 

let particles: Particle[] = [];
window["setup"] = function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(random(0.1, 1), random(5, 20), shape.Circle, random(0,255)));
        particles.push(new Particle(random(0.1, 1), random(5, 20), shape.Square, random(0,255)));
        particles.push(new Particle(random(0.1, 1), random(5, 20), shape.Triangle, random(0,255)));
    }
};

window["draw"] = function draw() {
    console.log('code running');
    image(background, 0, 0, width, height);
    particles.forEach(particle => {
        particle.tick(deltaTime * PARAMS.speed);
    });
};
