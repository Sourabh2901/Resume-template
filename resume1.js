var skillsContainer = document.getElementById('skills-container');
var progressBars = document.querySelectorAll('.skill-progress > div');
var animationDone = false;
window.addEventListener('scroll',checkScroll);

var arr = new Array(progressBars.length);
for(let i = 0;i < progressBars.length;i++){
    arr[i] = false;
}


function checkScroll(){

	for(let i = 0;i < progressBars.length;i++){
		var cordinates = progressBars[i].getBoundingClientRect();

		if(!arr[i] && cordinates.top < window.innerHeight){
			animationDone = true;
			initializeBars(progressBars[i]);
			fillBars(progressBars[i]);
			arr[i] = true;
		}else if(cordinates.top > window.innerHeight){
			// animationDone = false;
			// initializeBars(progressBars[i]);
			arr[i] = false;
		}
	}

}

function initializeBars(bars){
	// for(let i =0;i < progressBars.length;i++){
		// progressBars[i].style.width = '0%';
	// }
	bars.style.width = '0%';
}

function fillBars(progressBars){
	// for(let i = 0;i < progressBars.length;i++){
		let width = progressBars.getAttribute('progress');
		initialWidth = 0;

		var interval = setInterval(function(){
			if(initialWidth > width){
				// console.log('initialWidth -> ',initialWidth);
				clearInterval(interval);
				return;
			}
			progressBars.style.width = initialWidth + 1 + '%';
			initialWidth++;
		},20);

	// }
}

