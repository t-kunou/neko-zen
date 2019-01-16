const SholderChecker = function(id) {
  this.element = document.getElementById(id);
}

SholderChecker.prototype = {
  do: function(pose) {
    const leftShoulder = pose.keypoints.find((element) => { return element.part === 'leftShoulder' });
    const rightShoulder = pose.keypoints.find((element) => { return element.part === 'rightShoulder' });

    var diff = leftShoulder.position.y - rightShoulder.position.y;
    if (diff > 10) {
      this.element.innerHTML = '左肩が下がっています';
    } else if (diff < -10) {
      this.element.innerHTML = '右肩が下がっています';
    } else {
      this.element.innerHTML = '';
    }
  }
}
