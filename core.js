AFRAME.registerComponent('ballon', {
  schema: {
    valor: {type: 'int'},
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
        // console.log(self.data.valor);
      }
      var impressao = $('#impressoes');
      valor = parseInt(impressao.attr('value'));
      console.log(valor)
      valor = parseInt(self.data.valor) + valor
      console.log(valor)
      impressao.attr('value', parseInt(self.data.valor) + valor);

      var scene = document.querySelector('a-scene');
      var text = document.createElement('a-text');
      text.setAttribute('value', 'ACERTOU O BALAO ');
      text.setAttribute('position', '0.76432 2.74009 -3.29358');

      var image = document.createElement('a-image');
      image.setAttribute("position", "0 1.6 -1");
      image.setAttribute("width", "1");
      image.setAttribute("height", "1");
      image.setAttribute("src", "#transpImage"); 


      the_end();
           
      // document.querySelector('a-camera').setAttribute('position', {x:0.9, y:0, z:-3});
      // scene.appendChild(text);
      // scene.appendChild(image);
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
      // console.log(data.valor);
    }
  },
  play: function(){
    // console.log(this.data)
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



AFRAME.registerGeometry('bar', {
    schema: {
      vertices: {
        default: ['-10 10 0', '-10 -10 0', '10 -10 0'],
      }
    },
  
    init: function (data) {
      var geometry = new THREE.Geometry();
      geometry.vertices = data.vertices.map(function (vertex) {
          var points = vertex.split(' ').map(function(x){return parseInt(x);});
          return new THREE.Vector3(points[0], points[1], points[2]);
      });
      geometry.computeBoundingBox();
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.mergeVertices();
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      this.geometry = geometry;
    }
});
