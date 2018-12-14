const PoseChecker = function(videoElement, imageScaleFactor, flipHorizontal, outputStride, interval, filters, hooks) {
  this.videoElement = videoElement;
  this.imageScaleFactor = imageScaleFactor;
  this.flipHorizontal = flipHorizontal;
  this.outputStride = outputStride;
  this.interval = interval
  this.filters = filters;
  this.hooks = hooks; 
  this.net = null;
}

PoseChecker.prototype = {
  init: function () {
    console.log('---init start---')
    posenet.load().then(function(net){
      this.net = net;
    }.bind(this))
    console.log('---init end---')
  },
  start: async function () {
    setInterval(async function(){
      if (!this.net) {
        console.log('Waiting init end...');
        return;
      }

      const poses = await this.net.estimateMultiplePoses(videoElement, imageScaleFactor, flipHorizontal, outputStride);
      const pose = poses[0];
      console.log(pose)

      this.filters.forEach((filter) => {
        filter.do(pose);
      })

      this.hooks.forEach((hook) => {
        hook.do(pose);
      })

    }.bind(this), this.interval);
  }
}