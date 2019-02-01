const PointMarker = function(context, partName, color) {
  this.context = context;
  this.partName = partName;
  this.color = color;
}

PointMarker.prototype = {
  do: function(pose) {
    const part = pose.keypoints.find((element) => { return element.part === this.partName });

    var x = part.position.x;
    var y = part.position.y;

    x = (960 - x);
    y = y;

    context.fillStyle = this.color;
    context.fillRect(x, y, 5, 5);
  }
}
