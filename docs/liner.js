const Liner = function(context, fromPartName, toPartName, color) {
  this.context = context;
  this.fromPartName = fromPartName;
  this.toPartName = toPartName;
  this.color = color;
}

Liner.prototype = {
  do: function(pose) {
    const from = pose.keypoints.find((element) => { return element.part === this.fromPartName });
    const to = pose.keypoints.find((element) => { return element.part === this.toPartName });

    var fromX = (960 - from.position.x);
    var fromY = from.position.y;
    var toX = (960 - to.position.x);
    var toY = to.position.y;

    context.strokeStyle = this.color;
    context.beginPath();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  }
}
