const Marker = function(id, partName) {
  this.element = document.getElementById(id);
  this.partName = partName;
}

Marker.prototype = {
  do: function(pose) {
    const part = pose.keypoints.find((element) => { return element.part === this.partName });

    const x = part.position.x;
    const y = part.position.y;

    console.log(this.partName + ':' + x + ',' + 'y');
    
    this.element.style.display = 'block';
    this.element.style.top = '-' + (540 - y) + 'px';
    this.element.style.left = x + 'px';
  }
}