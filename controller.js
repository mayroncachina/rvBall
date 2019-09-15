
var scene = document.querySelector('a-scene');


var text = document.querySelector('#ball');

function create_ballon(scene){

    var cylinder = document.createElement('a-sphere');
    cylinder.setAttribute('id',Math.floor(Math.random()*16777215));
    cylinder.setAttribute('valor', Math.floor(Math.random() * 100 + 1 ));
    // cylinder.setAttribute('animation', "property: position; to: -17 10.03 -12.54; dur: 10500; easing: linear; loop: true");
    cylinder.setAttribute('randomize', "position:-17 -2 -4..17 -2 -4; material.color:black..white;")
    cylinder.setAttribute('height', '2');
    cylinder.setAttribute('radius', '0.4');
    cylinder.setAttribute('ballon', '')
    cylinder.setAttribute('change-color-on-hover','color: blue') 
    cylinder.setAttribute('event-set__click','material.color: red');
    cylinder.setAttribute('sound','on: click; src: url(splash.wav)');
    scene.appendChild(cylinder);
    return cylinder
}

for (let index = 0; index < 10; index++) {
    item = create_ballon(scene);    
}
//-------------------------------------------------------------



document.querySelector('a-sphere').addEventListener('click', function (evt) {
    console.log('This 2D element was clicked!');
    var pos_y = this.getAttribute('position').y
    var id = this.getAttribute('id')
    var id = this.getAttribute('valor')

    var scene = document.querySelector('a-scene');
    var text = document.createElement('a-text');
    text.setAttribute('value', 'ACERTOU O BALAO '+valor);
    text.setAttribute('position', '0.9 '+pos_y+' -3');
    
    scene.appendChild(text);
    // document.querySelector('a-camera').setAttribute('position', {x:0, y:0, z:0});


});
