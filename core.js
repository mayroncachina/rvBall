AFRAME.registerComponent('ballon', {
  schema: {
    valor: {type: 'string', default: '0'},
  },

  init: function () {
    var self = this;
    this.eventHandlerFn = function () { 
      console.log(self.data.valor); 
    };
    this.el.addEventListener('click', function(evt) {
      console.log('This 2D element was clicked!');

      if (evt.type == 'click') {
        var el = self.el;
        el.setAttribute("visible",false);
      }
      var scene = document.querySelector('a-scene');
      var text = document.createElement('a-text');
      text.setAttribute('value', 'ACERTOU O BALAO ');
      text.setAttribute('position', '0.76432 2.74009 -3.29358');

           
      // document.querySelector('a-camera').setAttribute('position', {x:0.9, y:0, z:-3});
      scene.appendChild(text);
    });
  },

  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    // `event` updated. Remove the previous event listener if it exists.
    if (oldData.event && data.event !== oldData.event) {
      el.removeEventListener(oldData.event, this.eventHandlerFn);
    }

    if (data.event) {
      el.addEventListener(data.event, this.eventHandlerFn);
    } else {
      console.log(data.valor);
    }
  },
  play: function(){
    console.log(this.data)
  },
  tick: function (t) {},
  tock: function(time, timeDelta, camera){} 

});


AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });

      el.addEventListener('gripdown', function () {
        el.setAttribute('color', defaultColor);
      });
      
    }
  });


  AFRAME.registerComponent('modify-materials', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
          if (node.name.indexOf('ship') !== -1) {
            node.material.color.set('red');
          }
        });
      });
    }
  });  
