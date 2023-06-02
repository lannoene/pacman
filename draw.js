const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 450;
const CANVAS_HEIGHT = canvas.height = 496;
ctx.imageSmoothingEnabled = false;

let pressed = null;
let player1 = new player();
let playerMoveSpeed = 2;
let gameFrame = 0;
let walls = [new wall(0, 0, CANVAS_WIDTH, 10), new wall(140, 200, 143, 60)];

function drawLevel() {
	//background
	ctx.drawImage(spriteImage, 227, 0, 226, 248, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	player1.update();
	player1.draw();

	gameFrame++;
	requestAnimationFrame(drawLevel);
}
drawLevel();