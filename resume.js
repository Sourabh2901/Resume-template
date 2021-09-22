// SMOOTH SCROLL LOGIC

var links = document.querySelectorAll('.nav-menu a');
var interval;

for(var i = 0;i < links.length;i++){
    links[i].addEventListener('click',function(event){
        //BELOW METHOD IS TO STOP DEFAULT BEHAVIOUR OF ANCHOR TAGS I.E BY CLICKING ON 
        // PARTICULAR LINK THAT TAKE US TO SPECIFIED SECTION OF PAGE
        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        if(targetSectionId == 'contact'){
            var contactflag = true;
        }

        var targetSection = document.getElementById(targetSectionId);
        
        // WE HAVE TO MAKE interval VARIABLE GLOBAL BECOZ WE NEED 
        // THAT IN scrollVertical FUNCTION

        //  M-1 TO WRITE setInterval function
        // interval = setInterval(function(){
        //    scrollVertical(targetSection,contactflag);
        // },20);

        // OR

        // M-2 TO WRITE setInterval function

        interval = setInterval(scrollVertical,20 ,targetSection);
    });
}

// function scrollVertical(targetSection,contactflag){
function scrollVertical(targetSection,contactflag){
    var cordinates = targetSection.getBoundingClientRect();
    if(contactflag){
        if(cordinates.top <= 80){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,20);
    //    console.log(cordinates.top);
    }else{
        if(cordinates.top <= 5){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,20);
    }
}

// JS FOR SKILL SECTION

// STEP 1 -> HANDLE SCROLL EVENT ON Window
// STEP 2 -> CHECK THAT SKILL SECTION CONTAINER IS VISIBLE OR NOT
// STEP 3 -> ENSURE THAT INTIAL WIDTH OF THE COLORED SKILL DIV IS ZERO
// STRP 4 -> START ANIMATION ON EVERY SKILL , INCREASE SKILL WIDTH FROM 0 TO SKILL LEVEL
// STEP 5 - > STORE SKILL LEVEL WITH THE HELP OF getAttribute method

var x = document.getElementById('skills');

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');


// APPLYING SCROLL EVENT ON PAGE
 window.addEventListener('scroll',checkScroll);
var animationDone = false;

var arr = new Array(progressBar.length);
for(let i = 0;i < progressBar.length;i++){
    arr[i] = false;

}

var j = 1;
function checkScroll(){   
    for(let bars = 0;bars < progressBar.length;bars++){
        var cordinates = progressBar[bars].getBoundingClientRect();

        if(!arr[bars] && cordinates.top <= window.innerHeight){
            arr[bars] = true;
            initialize_zero_width(progressBar[bars]);
            fillBars(progressBar[bars]);
        }else if(cordinates.top > window.innerHeight){
            arr[bars] = false;
        }
    }
}

function initialize_zero_width(bars){
    bars.style.width = 0 + '%';
}

function fillBars(bars){
    let width = bars.getAttribute('progress');
    let initial_width = 0;
    var interval = setInterval(function(){
        if(initial_width > width){
            clearInterval(interval);
            return;
        }
        initial_width++;
        bars.style.width = initial_width + '%';
    },20);
}

// function checkScroll(){
//     //GETTING LOCATION OF SKILL SECTION
//     var cordinates = skillsContainer.getBoundingClientRect();

//     //window.innerwidth is giving height of the page and due 
//     //to flag variable we are encountering skill section only once
//     if(!animationDone && cordinates.top <= window.innerHeight){
//         animationDone = true;
//         //FILL THE BARS
//         fillBars();
//     }else if(cordinates.top > window.innerHeight){
//         animationDone = false;
//         initialize_zero_width();
//     }
// }

//initialize_zero_width();

// function initialize_zero_width(){
//     for(let bars of progressBar){
//        bars.style.width = 0 + '%';
//     }
// }

// function fillBars(){
//     for(let bars of progressBar){
//         let width = bars.getAttribute('progress');
//         let initial_width = 0;
        
//         var interval = setInterval(function(){
//             if(initial_width > width){
//                 clearInterval(interval);
//                 return;
//             }

//             initial_width++;
//             //console.log(initial_width);
//             bars.style.width = initial_width + '%';
//         },5);
//     }
// }



