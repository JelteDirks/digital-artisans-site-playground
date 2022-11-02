String.prototype.has = function() {
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] != '' && this.indexOf(arguments[i]) != -1) return true;
	}
	return false;
};

String.prototype.is = function() {
	for (var i = 0; i < arguments.length; i++) {
		if (this == arguments[i]) return true;
	}
	return false;
};

String.prototype.toTitleCase = function() {
	return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

var buttons = document.getElementsByClassName('button');
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		if (this.id == 'stop') {
			cube.className = '';
		} else if (this.id.has('move')) {
			port.classList.remove('move_far', 'move_normal', 'move_close');
			port.classList.add(this.id);
		} else if (this.id.has('stroke')) {
			cube.classList.remove('stroke', 'strokeIN', 'strokeOUT');
			cube.classList.add(this.id);
		} else {
			cube.classList.remove('spinXYZ', 'spinX', 'spinXinv', 'spinY', 'spinYinv', 'spinZ', 'spinZinv');
			cube.classList.add(this.id);
		}
	}, false);
}

welcome.addEventListener('mouseover', function() {
	if (!cube.classList.contains('stroke')) {
		cube.classList.remove('strokeIN', 'strokeOUT');
		cube.classList.add('strokeIN');
	}
}, false);

welcome.addEventListener('mouseout', function() {
	if (!cube.classList.contains('stroke')) {
		cube.classList.remove('strokeIN', 'strokeOUT');
		cube.classList.add('strokeOUT');
	}
}, false);

welcome.addEventListener('click', function() {
	if (cube.classList.contains('stroke')) {
		cube.classList.remove('stroke');
		cube.classList.add('strokeOUT');
	} else {
		cube.classList.remove('strokeIN', 'strokeOUT');
		cube.classList.add('stroke');
	}

}, false);
