var elements = [];
var scene = document.querySelector('a-scene');


//-------------------------------------------------------------

var text = document.querySelector('#ball');
elements.push(text);
var t = 0;
function render() {
  t += 0.0001;
  //console.log(t, text.getAttribute('position').y > 10)
  requestAnimationFrame(render);

  text.setAttribute('position', '0.9 '+t*200+' -5');
  if(text.getAttribute('position').y > 10){
    t = 0;
    text.setAttribute('position', '0.9 -10 -5');
  }
}
//----------------------------------------------------------------


var cylinder = document.createElement('a-sphere');
cylinder.setAttribute('color', '#FF9500');
cylinder.setAttribute('height', '2');
cylinder.setAttribute('radius', '0.5');
cylinder.setAttribute('position', '0.9 1 -3');
cylinder.setAttribute('id', 'menu');
scene.appendChild(cylinder);

elements.push(cylinder);


var cylinder = document.createElement('a-sphere');
cylinder.setAttribute('color', '#5a68e0');
cylinder.setAttribute('height', '2');
cylinder.setAttribute('radius', '0.5');
cylinder.setAttribute('position', '-0.9 1 -3');
scene.appendChild(cylinder);

elements.push(cylinder);


// var scene = document.querySelector('a-scene');
// var cylinder = document.createElement('a-cylinder');
// cylinder.setAttribute('color', '#FF9500');
// cylinder.setAttribute('height', '2');
// cylinder.setAttribute('radius', '0.75');
// cylinder.setAttribute('position', '3 1 0');
// scene.appendChild(cylinder);
// var t = 0;
// function render() {
//   t += 0.01;
//   requestAnimationFrame(render);
//   cylinder.setAttribute('position', '3 '+(Math.sin(t*2)+1)+' 0');
//   text.setAttribute('position', '0.9 '+(Math.sin(t*1.25)+1)+' -5');
// }



document.querySelector('a-sphere').addEventListener('click', function (evt) {
    console.log('This 2D element was clicked!');
});

// document.querySelector('#menu1').addEventListener('click', function() {
//     //model.setAttribute('visible','true');
//     console.log('ok')
// });