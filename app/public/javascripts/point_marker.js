const PointMarker = function(context, partName) {
  this.context = context;
  this.partName = partName;
}

PointMarker.prototype = {
  do: function(pose) {
    const part = pose.keypoints.find((element) => { return element.part === this.partName });

    var x = part.position.x;
    var y = part.position.y;

    x = (960 - x);
    y = y;

    console.log(x);
    console.log(y);

    context.fillRect(x, y, 5, 5);
  }
}
