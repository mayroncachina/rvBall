var scene = document.querySelector('a-scene');
var text = document.querySelector('#ball');

//INIT
function init(){
    qtd_repeat--;
    var chances = document.querySelector('#chances');
    chances.setAttribute('value', 'Chances: '+ qtd_repeat);
    
    var menu = document.querySelector('#menu');
    menu.setAttribute('animation', "property: position;to: -0.22 2.72 -555.657; dur: 100000; easing: linear;");
    setTimeout(function(){ 
        menu.setAttribute('visible', 'false');
    }, 3000);

    for (let index = 0; index < 30; index++) {
        scene.appendChild(addBall());
    }

    var timer_ = 0;
    var tm = setInterval(function(e) {
        var timer = $('#time');
        timer_ += 1;
        timer.attr('value', timer_);
    },1000);
    setTimeout(function(e) {
      the_end();
      window.clearInterval(tm);
    }, 30 * 1000);   
}


function print(){
    init();
    //mandar imprimir o codigo na impressoa
    //verificar se tem mais alguma vez pra jogar, se sim, volta pra o menu de "voce tem mais XX vezes"
    //caso tenha terminado volta pra tela de colocar o codigo
}

function the_end(){
    $( "a-sphere" ).remove();

    var frase = document.querySelector('#frase-1');
    frase.setAttribute('value', 'Parabens!');
    var frase = document.querySelector('#frase-2');
    frase.setAttribute('value', 'Voce Ganhou XX% de desconto');
    var frase = document.querySelector('#frase-3');
    frase.setAttribute('value', 'em sua proxima compra');

    var frase = document.querySelector('#imprimir');
    frase.setAttribute('visible', 'true');

    var frase = document.querySelector('#iniciar');
    frase.setAttribute('visible', 'false');

    var menu = document.querySelector('#menu');
    menu.setAttribute('visible', 'true');
    menu.setAttribute('animation', "property: position;to: -0.22 2.72 -5.657; dur: 2000; easing: linear;");
    
    // var scene = document.querySelector('a-scene');
    // var image = document.createElement('a-image');
    // image.setAttribute("position", "0 1.6 -1");
    // image.setAttribute("width", "1");
    // image.setAttribute("height", "1");
    // image.setAttribute("src", "#transpImage"); 
         
    // scene.appendChild(image);
}

/**
 * Create Ballon Entity
 * @param {DOM} scene 
 * @param {str} position 
 * @param {str} to 
 * @param {int} velocity 
 */
function create_ballon(scene, position, to, velocity){
    var id = Math.floor(Math.random()*100);
    var ball = document.createElement('a-sphere');
    ball.setAttribute('id',id);
    ball.setAttribute('ballon', "valor: "+id)
    ball.setAttribute('position', position)
    ball.setAttribute('randomize', "material.color:black..white;")
    ball.setAttribute('animation', "property: position;to: "+to+"; dur: "+velocity+"; easing: linear; loop: true");
    ball.setAttribute('height', '2');
    ball.setAttribute('radius', '0.4');
    ball.setAttribute('change-color-on-hover','color: red') 
    ball.setAttribute('event-set__click','material.color: red');
    ball.setAttribute('sound','on: click; src: url(misc/splash.wav)');
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