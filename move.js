function positionToVector(position) {
  return new THREE.Vector3(position.x, position.y, position.z);
}

function vectorToPosition(vector) {
  return {
    x: vector.getComponent(0),
    y: vector.getComponent(1),
    z: vector.getComponent(2)
  }
}

function sumVectors(elements) {
  var vector = new THREE.Vector3();
  for (var i = 0; i < elements.length; i++) {
    var position = elements[i].getAttribute('position');
    vector.add(positionToVector(position));
  }
  
  return vector;
}

function animateParentChange(element, newParent) {
  var newParentParents = newParent.add(newParent.parentsUntil('a-scene'));
  var elementParents = element.parentsUntil('a-scene');
  
  var oldVector = sumVectors(elementParents);
  var newVector = sumVectors(newParentParents);
  
  var diff = oldVector.sub(newVector)
  
  var newPosition = vectorToPosition(diff);
  console.log("newPosition", newPosition);
  
  $(element).find('a-animate').remove();
  var tempElement = $(element).clone().appendTo(element.parent());
  $(element).attr('visible', 'false').appendTo(newParent).attr('position', diff.toArray().join(' '));
  $(element).append('<a-animation attribute="position" dur="1000" fill="forwards" from="' + diff.toArray().join(' ') + '" to="0 0 0"></a-animation>');
  $(element).attr('visible', true);
  tempElement.remove();
}

function move() {
  animateParentChange($('#piece'), $('#container2'));

  setTimeout(function() {
    animateParentChange($('#piece'), $('#container3'));
    
    setTimeout(function() {
      animateParentChange($('#piece'), $('#container1'));
      
      setTimeout(function() {
        move();
      }, 1000);
    }, 1000);
  }, 1000);
}

$('#piece').appendTo('#container1');
move();
