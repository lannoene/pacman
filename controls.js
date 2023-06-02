document.addEventListener('keypress', function(e) {
	let code = e.code;
	if (code == 'KeyA') {
		pressed = 'left';
	} else if (code == 'KeyD') {
		pressed = 'right';
	} else if (code == 'KeyW') {
		pressed  = 'up';
	} else if (code == 'KeyS') {
		pressed = 'down';
	}
})