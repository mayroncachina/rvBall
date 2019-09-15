
var scene = document.querySelector('a-scene');
var text = document.querySelector('#ball');

function create_ballon(scene, position, to, velocity){

    var cylinder = document.createElement('a-sphere');
    cylinder.setAttribute('id',Math.floor(Math.random()*16777215));
    cylinder.setAttribute('valor', Math.floor(Math.random() * 100 + 1 ));
    // cylinder.setAttribute('animation', "property: position; to: -17 10.03 -12.54; dur: 10500; easing: linear; loop: true");
    
    // cylinder.setAttribute('randomize', "position:-17 -2 -4..17 -2 -4; material.color:black..white;")

    cylinder.setAttribute('position', position)
    cylinder.setAttribute('randomize', "material.color:black..white;")
    
    cylinder.setAttribute('animation', "property: position;to: "+to+"; dur: "+velocity+"; easing: linear; loop: true");
    cylinder.setAttribute('height', '2');
    cylinder.setAttribute('radius', '0.4');
    cylinder.setAttribute('ballon', '')
    cylinder.setAttribute('change-color-on-hover','color: blue') 
    cylinder.setAttribute('event-set__click','material.color: red');
    cylinder.setAttribute('sound','on: click; src: url(splash.wav)');
    
    scene.appendChild(cylinder);
    return cylinder
}

function init(){
// for (let index = 0; index < 10; index++) {
    create_ballon(scene, '-15 -2 -4', '-15 10 -4', 10500);    
    create_ballon(scene, '-7 -2 -4', '-7 10 -4', 10500);    
    create_ballon(scene, '-3.5 -2 -4', '-3.5 10 -4', 5500);    
    create_ballon(scene, '-1.8 -2 -4', '-1.8 10 -4', 10500);    
    create_ballon(scene, '3.4 -2 -4', '3.4 10 -4', 8500);    
    create_ballon(scene, '5.4 -2 -4', '5.4 10 -4', 6500);    
    create_ballon(scene, '8.48 -2 -4', '8.48 10 -4', 16500);    
    create_ballon(scene, '14 -2 -4', '14 10 -4', 12500);    
    create_ballon(scene, '16 -2 -4', '16 10 -4', 4500);    
// }
}
//-------------------------------------------------------------



// document.querySelector('a-sphere').addEventListener('click', function (evt) {
//     console.log('This 2D element was clicked!');
//     var pos_y = this.getAttribute('position').y
//     var id = this.getAttribute('id')
//     var id = this.getAttribute('valor')

//     var scene = document.querySelector('a-scene');
//     var text = document.createElement('a-text');
//     text.setAttribute('value', 'ACERTOU O BALAO '+valor);
//     text.setAttribute('position', '0.9 '+pos_y+' -3');
    
//     scene.appendChild(text);
//     // document.querySelector('a-camera').setAttribute('position', {x:0, y:0, z:0});


// });
