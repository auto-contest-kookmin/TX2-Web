<template>
  <div id="clock">
    <!-- <p><span class="time">제 2회 국민대학교 자율주행 경진대회</span></p> -->
    <p><span class="time">{{ time }}</span></p>
  </div>
</template>

<script>

export default {
    data(){
        return{
            time: '00분 00초 000',
            timebegan: null,
            timeStopped: null,
            stoppedDuration: 0,
            started: null,
            running: false,
            previousID: -1
        }
    },
    methods:{
      start: function(){
        if(this.running) return;
        if (this.timeBegan === null) {
          this.reset();
          this.timeBegan = new Date();
        }

        if (this.timeStopped !== null) {
          this.stoppedDuration += (new Date() - this.timeStopped);
        }

        this.started = setInterval(this.clockRunning, 10);	
        this.running = true;
      },
      stop: function(){
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
      },
      reset: function(){
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.time = "00분 00초 000";
      },
      clockRunning: function(){
        var currentTime = new Date()
        , timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

        this.time = 
          this.zeroPrefix(min, 2) + "분 " + 
          this.zeroPrefix(sec, 2) + "초 " + 
          this.zeroPrefix(ms, 3);
      },

      zeroPrefix: function (num, digit) {
        var zero = '';
        for(var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      },
      fetchData: function(){
        this.$http.get('http://192.168.0.71:5000/status')
        .then((result) => {
          if (result.data == 1){
            if (!this.running){
              this.reset();
              this.start();
            }
          }
        })
        this.$http.get('http://192.168.0.71:5000/getid')
          .then((result) => {
            if (this.previousID == -1 && result.data != -1){
              this.stop(); 
              this.reset();
            }
            this.previousID = result.data;
          })
        }
      
    },
    mounted: function(){
      this.fetchData();
      this.interval = setInterval(function(){
        this.fetchData();
      }.bind(this), 500);
    }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");
html, body {
  padding: auto;
  margin: auto;
  width: 100%;
  height: 100%;
  font-family: 'Share Tech Mono', sans-serif
}

#clock {
  background-color: #FFFFFF;
  font-family: 'Share Tech Mono', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  order: 0;
  flex: 0 1 auto;
  align-self: center;
  color: #0a0a0a;
  margin-bottom: 3em;
}
#clock .time {
  font-size: 6.5em;
}
#clock .text {
  margin-top: 30px;
  font-size: 1em;
  color: rgba(200, 200, 200, 0.15);
  text-align: center;
}
#clock .text a {
  text-decoration: none;
  color: inherit;
  transition: color .1s ease-out;
}
#clock .text a:hover {
  color: #c8c8c8;
}
#clock .btn-container {
  display: flex;
  margin-top: 15px;
}
#clock .btn-container a {
  text-align: center;
  font-family: 'Share Tech Mono', sans-serif;
  background: transparent;
  border: none;
  color: #c8c8c8;
  padding: 10px 15px;
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 2em;
  cursor: pointer;
  flex-grow: 1;
  transition: color .1s ease-out;
}
#clock .btn-container a:hover {
  color: white;
}

</style>