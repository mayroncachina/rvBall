var scene = document.querySelector('a-scene');
var text = document.querySelector('#ball');

//INIT
function init(){
    for (let index = 0; index < 100; index++) {
        scene.appendChild(addBall());
    }
}


/**
 * Create Ballon Entity
 * @param {DOM} scene 
 * @param {str} position 
 * @param {str} to 
 * @param {int} velocity 
 */
function create_ballon(scene, position, to, velocity){
    var ball = document.createElement('a-sphere');
    ball.setAttribute('id',Math.floor(Math.random()*16777215));
    ball.setAttribute('valor', Math.floor(Math.random() * 100 + 1 ));
    ball.setAttribute('position', position)
    ball.setAttribute('randomize', "material.color:black..white;")
    ball.setAttribute('animation', "property: position;to: "+to+"; dur: "+velocity+"; easing: linear; loop: true");
    ball.setAttribute('height', '2');
    ball.setAttribute('radius', '0.4');
    ball.setAttribute('ballon', '')
    ball.setAttribute('change-color-on-hover','color: blue') 
    ball.setAttribute('event-set__click','material.color: red');
    ball.setAttribute('sound','on: click; src: url(splash.wav)');
    // ball.setAttribute('animation', "property: position; to: -17 10.03 -12.54; dur: 10500; easing: linear; loop: true");
    // ball.setAttribute('randomize', "position:-17 -2 -4..17 -2 -4; material.color:black..white;")

    return ball
}

/**
 * Create Ball position
 */
function addBall() {
    let x = Math.random() * 10 - 5;
    let y = Math.random() * 50 + 2;
    let z = Math.random() * -10;
    let velocity = parseInt(Math.random() * 100000);
    return create_ballon(scene, (x+' -1 '+z), (x+' 10 '+z), velocity);
    
}