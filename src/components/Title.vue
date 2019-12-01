<template>
    <div id="title">
        <p><span class="title">제 2회 국민대학교 자율주행 경진대회</span></p>
    </div>
</template>

<script>
export default {
  name: 'my-component',
  data(){
    return {

    }
  }
};
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

#title {
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
  margin-top: 2em;
  margin-bottom: 2em;
}
#title .title {
  font-size: 5em;
}
#title .text {
  font-size: 1em;
  color: rgba(200, 200, 200, 0.15);
  text-align: center;
}
#title .text a {
  text-decoration: none;
  color: inherit;
  transition: color .1s ease-out;
}
#title .text a:hover {
  color: #c8c8c8;
}
#title .btn-container {
  display: flex;
  margin-top: 15px;
}
#title .btn-container a {
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
#title .btn-container a:hover {
  color: white;
}
</style>