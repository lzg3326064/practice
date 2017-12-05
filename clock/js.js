// var WINDOW_WIDTH = 1366;
// var WINDOW_HEIGHT = 600;
// var RADIUS = 7;
// var MARGIN_TOP = 60;
// var MARGIN_LEFT = 80;
var curShowTimeSeconds  = 0;
var balls = [];
const colors = ["#99FF00","#FFCCFF","#FF99FF","#FF3366","#990099","#66FFFF","#00FF00","#0099FF","#6699FF","#333333","#FF3300","#330099"];

digit =
	[
		[
			[0, 0, 1, 1, 1, 0, 0],
			[0, 1, 1, 0, 1, 1, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 0, 1, 1, 0],
			[0, 0, 1, 1, 1, 0, 0]
		], //0
		[
			[0, 0, 0, 1, 1, 0, 0],
			[0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[1, 1, 1, 1, 1, 1, 1]
		], //1
		[
			[0, 1, 1, 1, 1, 1, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 1, 1, 1, 1, 1]
		], //2
		[
			[1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 1, 1, 1, 0]
		], //3
		[
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 1, 0],
			[0, 0, 1, 1, 1, 1, 0],
			[0, 1, 1, 0, 1, 1, 0],
			[1, 1, 0, 0, 1, 1, 0],
			[1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 1, 1]
		], //4
		[
			[1, 1, 1, 1, 1, 1, 1],
			[1, 1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 0],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 1, 1, 1, 0]
		], //5
		[
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 1, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0, 0],
			[1, 1, 0, 1, 1, 1, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 1, 1, 1, 0]
		], //6
		[
			[1, 1, 1, 1, 1, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 0, 0, 0]
		], //7
		[
			[0, 1, 1, 1, 1, 1, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 1, 1, 1, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 1, 1, 1, 0]
		], //8
		[
			[0, 1, 1, 1, 1, 1, 0],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 1],
			[0, 1, 1, 1, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 1],
			[0, 0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0, 0, 0]
		], //9
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		] //:
	];
window.onload = function() {

	WINDOW_WIDTH = window.screen.width;
	WINDOW_HEIGHT = window.screen.height*3/4;
	MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
	RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;
	MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	curShowTimeSeconds = getCurrentShowTimeSeconds();
	setInterval(
		function() {
			render(context);
			undate();
		},
		50
	)
}

function undate() {
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();

	var nextHours = parseInt(nextShowTimeSeconds/3600);
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60);
	var nextSeconds = parseInt(nextShowTimeSeconds%60);

	var curHours = parseInt(curShowTimeSeconds / 3600);
	var curMinutes = parseInt((curShowTimeSeconds - curHours*3600)/60);
	var curSeconds = parseInt(curShowTimeSeconds%60);

	if(nextSeconds != curSeconds) {
		if(parseInt(curHours/10) != parseInt(nextHours/10)) {
			addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curHours/10));
		}
		if(parseInt(curHours%10) != parseInt(nextHours%10)) {
			addBalls(MARGIN_LEFT + 15 * (RADIUS + 1),MARGIN_TOP,parseInt(curHours%10));
		}

		if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)) {
			addBalls(MARGIN_LEFT + 39 * (RADIUS + 1),MARGIN_TOP,parseInt(curMinutes/10));
		}
		if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)) {
			addBalls(MARGIN_LEFT + 54 * (RADIUS + 1),MARGIN_TOP,parseInt(curMinutes%10));
		}

		if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)) {
			addBalls(MARGIN_LEFT + 78 * (RADIUS + 1),MARGIN_TOP,parseInt(curSeconds/10));
		}
		if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)) {
			addBalls(MARGIN_LEFT + 94 * (RADIUS + 1),MARGIN_TOP,parseInt(curSeconds%10));
		}
		
	}
	curShowTimeSeconds = nextShowTimeSeconds;
	updateBalls();
}


function updateBalls() {
	for (var i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
			balls[i].y = WINDOW_HEIGHT - RADIUS;
			balls[i].vy = -balls[i].vy * 0.75;
		}

	}

	var cnt = 0;
	for(var i =0;i<balls.length;i++)
		if(balls[i].x+RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) 
			balls[cnt++] = balls[i];

	while(balls.length > cnt) {
		balls.pop();
	}
}


function addBalls(x, y, num) {
	for (var i = 0; i < digit[num].length; i++)
		for (var j = 0; j < digit[num][i].length; j++)
			if (digit[num][i][j] == 1) {
				var aBall = {
					x:x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
					y:y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
					g: 1.5 + Math.random(),
					vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
					vy: -5,
					color: colors[Math.floor(Math.random() * colors.length)]
				}
				balls.push(aBall);

			}
	console.log(balls.length);
}


function getCurrentShowTimeSeconds() {
	var curTime = new Date();
	var h = (curTime.getHours())*3600;
	var m = (curTime.getMinutes())*60;
	var s = (curTime.getSeconds());
	ret = Math.round(h+m+s);
	return ret >= 0 ? ret : 0;
}


function render(cxt) {

	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	var hours = parseInt(curShowTimeSeconds / 3600);
	var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
	var seconds = parseInt(curShowTimeSeconds%60);

	renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
	renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
	renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
	renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
	renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt);
	renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
	renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt);
	renderDigit(MARGIN_LEFT + 94 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt);

	for(var i = 0;i<balls.length;i++) {
		cxt.fillStyle = balls[i].color;

		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
		cxt.closePath();
		cxt.fill();
	}
}



/*
 *第(i,j)个圆的圆心位置：
 *centerX: x+j*2*(R+1)+(R+1)
 *centerY: y+i*2*(R+1)+(R+1)
 *
 */
function renderDigit(x, y, num, cxt) {
	cxt.fillStyle = "#40E0D0";
	for (var i = 0; i < digit[num].length; i++) 
		for (var j = 0; j < digit[num][i].length; j++) 
			if (digit[num][i][j] == 1) {
				cxt.beginPath();
				cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI)
				cxt.closePath();
				cxt.fill();
			}
}
