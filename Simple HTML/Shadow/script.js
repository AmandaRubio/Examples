
// document.getElementById('container').addEventListener('mousemove', function(e){
//     shadow(e);
// });

// const div = document.querySelector('.content');
// const text = document.querySelector('svg'); 
// function shadow(e){
//     var x = e.clientX;
//     var y = e.clientY;
    
//     const { offsetWidth: width, offsetHeight: height } = div;
    
//     const xS = -(Math.round(x / width * width) - (width / 2));
//     const yS = -(Math.round(y / height * height) - (height / 2));
//     var rS = 3;

//     text.style.filter = `drop-shadow(${xS}px ${yS}px 3px rgba(0, 0, 0, 0.4))`;
    

//     console.log("X:"+ x + ", Y:"+ y + "- xS"+ xS + ", yS" + yS);
// };


document.getElementById('container').addEventListener('mousemove', function(e){
    shadow(e);
});

const div = document.querySelector('.content');
const text = document.querySelector('svg'); 
const s = 100;
function shadow(e){
    var x = e.clientX;
    var y = e.clientY;
    
    const { offsetWidth: width, offsetHeight: height } = div;
    
    const xS = -(Math.round(x / width * s) - (s / 2));
    const yS = -(Math.round(y / height * s) - (s / 2));
    var rS = 3;

    text.style.filter = `drop-shadow(${xS}px ${yS}px 4px #333)`;
    

    console.log("X:"+ x + ", Y:"+ y + "- xS"+ xS + ", yS" + yS);
};