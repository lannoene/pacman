class player {
	constructor() {
		this.x = CANVAS_HEIGHT/2 - 50;
		this.y = 265;
		this.image = spriteImage;
		this.width = 30;
		this.height = 30;
		this.lastPress;
		this.isColiding = false;
	}
	update() {
		this.isColiding = false;
		walls.forEach((item, index) => {
			if (this.x + playerMoveSpeed > item.x && this.x + playerMoveSpeed < item.x + item.width && this.y > item.y && this.y < item.y + item.height) {
				this.isColiding = 'right';
			} else if (this.x - playerMoveSpeed > item.x && this.x - playerMoveSpeed < item.x + item.width && this.y > item.y && this.y < item.y + item.height) {
				this.isColiding = 'left';
			} else if (this.x > item.x && this.x < item.x + item.width && this.y - playerMoveSpeed > item.y && this.y - playerMoveSpeed < item.y + item.height) {
				this.isColiding = 'up';
			} else if (this.x > item.x && this.x < item.x + item.width && this.y + playerMoveSpeed > item.y && this.y + playerMoveSpeed < item.y + item.height) {
				this.isColiding = 'down';
			} 
		});
		
		if (pressed == 'right' && this.isColiding != 'right') {
			this.x = this.x + playerMoveSpeed;
		} else if (pressed == 'left' && this.isColiding != 'left') {
			this.x = this.x - playerMoveSpeed;
		} else if (pressed == 'up' && this.isColiding != 'up') {
			this.y = this.y - playerMoveSpeed;
		} else if (pressed == 'down' && this.isColiding != 'down') {
			this.y = this.y + playerMoveSpeed;
		}
		this.lastPress = pressed;
	}
	draw() {
		//mouth open
		ctx.drawImage(spriteImage, 455, 0, 15, 15, this.x, this.y, 30, 30);
		//mouth partially open
		//ctx.drawImage(spriteImage, 472, 0, 15, 15, this.x, this.y, 30, 30);
		//mouth closed
		//ctx.drawImage(spriteImage, 488, 0, 15, 15, this.x, this.y, 30, 30);
	}
}

class wall {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}