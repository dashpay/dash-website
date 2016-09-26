// Taken from http://codepen.io/kenjiSpecial
// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// --------------------------
(function () {
	var width, height,
		prevTime,
		fps = 30,
		now, then = Date.now(),
		interval = 1000/fps,
		delta,
		ctx, canvas = document.getElementById('canvas');

	if (canvas) {

		ctx = canvas.getContext('2d');

		width  = canvas.offsetWidth;
		height = canvas.offsetHeight;

		canvas.width  = width;
		canvas.height = height;

		// ================
		var Boid = function(ctx){
			this.ctx = ctx;

			this.x   = width * Math.random();
			this.y   = height * Math.random();

			this.vx  = 0;
			this.vy  = 0;
		};

		Boid.prototype = {
			rad : 2,
			col : '#fff',

			update : function(){

			},

			draw : function(){
				this.ctx.fillStyle = this.col;
				this.ctx.beginPath();
				this.ctx.arc( this.x, this.y, this.rad, 0, 2 * Math.PI, false );
				this.ctx.fill();
				this.ctx.closePath();
			}

		};

		// ================
		var boids      = [];
		var randomAclX = [];
		var randomAclY = [];
		var isRandom = false;

		var NUM_BOIDS = ~~(width * height * 0.00009);
		var NUM_BOIDS_EXC = NUM_BOIDS - 1;
		var BOID_SIDE = 80;
		var MAX_SPEED = 0.05;
		var MAX_DIStANCE = 150;

		window.onresize = function (event) {

			width  = canvas.offsetWidth;
			height = canvas.offsetHeight;
			canvas.width  = width;
			canvas.height = height;

			// balance boid number, so we have an avg density across all screen sizes
			NUM_BOIDS = ~~(width * height * 0.00009);

			init();

			// TODO: use this over init() but redistribute boids fluidly
			// if (boids.length > NUM_BOIDS) {
			// 	boids.splice(NUM_BOIDS - boids.length);
			// } else {
			// 	for(var i = 0; i < NUM_BOIDS - boids.length; i++){
			// 		var boid = new Boid(ctx);
			// 		boids.push(boid);
			// 	}
			// }
		};

		init();
		draw();

		function draw() {

			now = Date.now();
			delta = now - then;

			if (delta > interval) {
				// update time stuffs

				// Just `then = now` is not enough.
				// Lets say we set fps at 10 which means
				// each frame must take 100ms
				// Now frame executes in 16ms (60fps) so
				// the loop iterates 7 times (16*7 = 112ms) until
				// delta > interval === true
				// Eventually this lowers down the FPS as
				// 112*10 = 1120ms (NOT 1000ms).
				// So we have to get rid of that extra 12ms
				// by subtracting delta (112) % interval (100).
				// Hope that makes sense.

				then = now - (delta % interval);

				// Execute draw code
				loop();
			}

			requestAnimationFrame(draw);
		}

		function init(){

			boids = [];

			for(var i = 0; i < NUM_BOIDS; i++){
				var boid = new Boid(ctx);

				boids.push(boid);
			}

			prevTime = +new Date;
			setTimeout(onRandomChange, 200);
		}

		function onRandomChange(){
			isRandom = true;

			if(isRandom){
				for(var i = 0; i < NUM_BOIDS; i++){
					var aclX = 10 * (Math.random() - .5);
					var aclY = 10 * (Math.random() - .5);

					randomAclX[i] = aclX;
					randomAclY[i] = aclY;
				}

				setTimeout(onRandomChange, 10000);
			}else{
				setTimeout(onRandomChange, 100);
			}
		}



		function loop(){
			var curTime = +new Date;
			var duration = (curTime - prevTime)/1000;
			prevTime = curTime;

			// ctx.fillStyle = '#fff';
			// ctx.fillRect(0, 0, width, height);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for(var i = 0; i < boids.length; i++){
				var b = boids[i];
				if(!isRandom){
					rule1(i);
					rule2(i);
					rule3(i);
				}else{
					b.vx += randomAclX[i]
					b.vy += randomAclY[i];
				}

				var speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
				if(speed >= MAX_SPEED) {
					var r = MAX_SPEED / speed;
					b.vx *= r;
					b.vy *= r;
				}

				if(!isRandom){
					if(b.x < 0 && b.vx < 0 || b.x > width  && b.vx > 0) b.vx *= -1;
					if(b.y < 0 && b.vy < 0 || b.y > height && b.vy > 0) b.vy *= -1;
				}


				b.x += b.vx;
				b.y += b.vy;

				if(isRandom){
					if(b.x < 0) b.x += width;
					if(b.x > width) b.x -= width;

					if(b.y < 0)b.y += height;
					if(b.y > height)b.y -= height;
				}

			}

			for(var i = 0; i < boids.length; i++){
				var boidA = boids[i];

				ctx.beginPath();
				ctx.fillStyle = 'rgba(255, 255, 255, .3)';
				ctx.arc(boidA.x , boidA.y, boidA.rad, 0, 2 * Math.PI);
				ctx.fill();
				ctx.closePath();

				// ctx.beginPath();
				// ctx.fillStyle = 'rgba(255, 255, 255, .1)';
				// ctx.arc(boidA.x , boidA.y, 6, 0, 2 * Math.PI);
				// ctx.fill();
				// ctx.closePath();

				for(var j = i; j < boids.length; j++){
					var boidB = boids[j];
					var dx = boidA.x - boidB.x;
					var dy = boidA.y - boidB.y;

					var dis = Math.sqrt(dx * dx + dy * dy);

					if(dis < MAX_DIStANCE){
						var alpha = (MAX_DIStANCE - dis) / MAX_DIStANCE;

						ctx.beginPath();
						ctx.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')';
						ctx.moveTo(boidA.x, boidA.y);
						ctx.lineTo(boidB.x, boidB.y);
						ctx.stroke();

						ctx.closePath();
					}
				}
			}
		}

		function rule1(index){
			var c = {x: 0, y: 0};

			for(var i = 0; i < boids.length; i++){

				if(i != index){
					c.x += boids[i].x;
					c.y += boids[i].y;
				}
			}

			c.x = c.x / NUM_BOIDS_EXC;
			c.y = c.y / NUM_BOIDS_EXC;

			boids[index].vx += (c.x - boids[index].x)/100;
			boids[index].vy += (c.y - boids[index].y)/100;
		}

		function rule2(index){
			for( var i = 0; i < boids.length; i++){
				var d = getDistance(boids[i], boids[index]);
				if(d < BOID_SIDE){
					boids[index].vx -= boids[i].x - boids[index].x;
					boids[index].vy -= boids[i].y - boids[index].y;
				}
			}
		}

		function rule3(index){
			var pv = {x: 0, y: 0};
			for(var i = 0; i < boids.length; i++){
				if(i != index){
					pv.x += boids[i].vx;
					pv.y += boids[i].vy;
				}
			}

			pv.x /= NUM_BOIDS_EXC;
			pv.y /= NUM_BOIDS_EXC;

			boids[index].vx += (pv.x - boids[index].vx) / 8;
			boids[index].vy += (pv.y - boids[index].vy) / 8;
		}

		function getDistance(p1, p2){
			var dx = p1.x - p2.x;
			var dy = p1.y -p2.y;
			return Math.sqrt(dx * dx + dy * dy);
		}
	}
}());
