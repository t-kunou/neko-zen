async function setVideoSource(video, selector) {
    return new Promise((resolve) => {
      const videoElement = document.querySelector(video);
      const videoSelect = document.querySelector(selector);
  
      navigator.mediaDevices.enumerateDevices().then(gotDevices); 
  
      videoSelect.onchange = start;
  
      start();
  
      function gotDevices(deviceInfos) {
        deviceInfos.forEach((deviceInfo) => {
          const option = document.createElement('option');
          option.value = deviceInfo.deviceId;
          if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
            videoSelect.appendChild(option);
          } else {
            console.log('Some other kind of source/device: ', deviceInfo);
          }
        });
      }
      
      function gotStream(stream) {
        videoElement.srcObject = stream;
        return navigator.mediaDevices.enumerateDevices();
      }
  
      function start() {
        const videoSource = videoSelect.value;
        const constraints = {
          video: {deviceId: videoSource ? {exact: videoSource} : undefined}
        };
  
        navigator.mediaDevices.getUserMedia(constraints).then(gotStream)
      }
    });
  }