
var scene = document.querySelector('a-scene');


var text = document.querySelector('#ball');
// text.setAttribute('alongpath', 'curve: #track1; loop: true; dur: 13000');

function create_ballon(scene){

    var cylinder = document.createElement('a-sphere');
    // cylinder.setAttribute('color','#'+Math.floor(Math.random()*16777215).toString(16));
    cylinder.setAttribute('id',Math.floor(Math.random()*16777215));
    // cylinder.setAttribute('randomize', "position:-5 -5 -5..2 2 -7; material.color:red..green; scale: 1 1 1|1.5 1.5 1.5|2 2 2;")

    cylinder.setAttribute('randomize', "position:-5 -5 -5..2 2 -7; material.color:red..green;")
    cylinder.setAttribute('height', '2');
    cylinder.setAttribute('radius', '0.4');
    cylinder.setAttribute('ballon', '')
    // cylinder.setAttribute('alongpath', 'curve: #track1; loop: true; dur: 13000');
    cylinder.setAttribute('change-color-on-hover','color: blue') 
    cylinder.setAttribute('event-set__click','material.color: red');
    cylinder.setAttribute('sound','on: click; src: url(splash.wav)');
    scene.appendChild(cylinder);
    return cylinder
}

for (let index = 0; index < 10; index++) {
    //item = create_ballon(scene);    
}
//-------------------------------------------------------------



// var t = 0;
// function render() {
//   t += 0.0001;
//   //console.log(text.getAttribute('position').y)
//   requestAnimationFrame(render);

//   text.setAttribute('position', '0.9 '+t*200+' -5');
//   if(text.getAttribute('position').y > 10){
//     t = 0;
//     text.setAttribute('position', '0.9 -10 -5');
//   }
// }
//----------------------------------------------------------------
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
    var pos_y = this.getAttribute('position').y
    var id = this.getAttribute('id')

    var scene = document.querySelector('a-scene');
    var text = document.createElement('a-text');
    text.setAttribute('value', 'ACERTOU O BALAO '+id);
    text.setAttribute('position', '0.9 '+pos_y+' -3');
    
    scene.appendChild(text);
    // document.querySelector('a-camera').setAttribute('position', {x:0, y:0, z:0});


});

// document.querySelector('#menu1').addEventListener('click', function() {
//     //model.setAttribute('visible','true');
//     console.log('ok')
// });