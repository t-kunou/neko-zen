const ShowAngle = function(context, centerPartName, fromPartName, toPartName, color) {
  this.context = context;
  this.centerPartName = centerPartName;
  this.fromPartName = fromPartName;
  this.toPartName = toPartName;
  this.color = color;
}

ShowAngle.prototype = {
  angle: function(x1, y1, x2, y2) {
    var r = Math.atan2(y2 - y1, x2 - x1);
    if (r < 0) {
      r = r + 2 * Math.PI;
    }

    return Math.floor(r * 360 / (2 * Math.PI));
  },

  do: function(pose) {
    const center = pose.keypoints.find((element) => { return element.part === this.centerPartName });
    const from = pose.keypoints.find((element) => { return element.part === this.fromPartName });
    const to = pose.keypoints.find((element) => { return element.part === this.toPartName });

    var centerX = (960 - center.position.x);
    var centerY = center.position.y;
    var fromX = (960 - from.position.x);
    var fromY = from.position.y;
    var toX = (960 - to.position.x);
    var toY = to.position.y;

    var angleA = this.angle(centerX, centerY, fromX, fromY);
    var angleB = this.angle(centerX, centerY, toX, toY);

    console.log(angleA + ':' + angleB)

    var a = angleA - angleB;
    context.strokeStyle = this.color;
    context.fillStyle = this.color;
    context.font = 'italic 400 24px/2 Unknown Font, sans-serif';
    context.fillText(a, centerX - 20, centerY + 20);;
    //context.beginPath();
    //context.moveTo(fromX, fromY);
    //context.lineTo(toX, toY);
    //context.stroke();
  }
}
