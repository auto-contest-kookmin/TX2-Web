<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="results"
    item-key="name"
    class="elevation-1"
  >
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '차량 번호',
            align: 'middle',
            sortable: false,
            value: 'carID',
          },
          { text: '팀명', value: 'teamName' },
          { text: '1st Lap', value: 'firstLapTime' },
          { text: '2nd Lap', value: 'secondLapTime' },
          { text: '3rd Lap', value: 'thirdLapTime' },
          { text: '페널티', value: 'penalty' },
          { text: '전체 시간', value: 'totalLapTime' },
        ],
        results: [],
      }
    },
    methods: {
      fetchData: function(){
        this.$http.get('http://localhost:5000/getdata')
        .then((result) => {
          // console.log(result);
          this.results = result.data;
        })
      }
    },
    mounted: function(){
      this.fetchData();
      this.interval = setInterval(function(){
        this.fetchData();
      }.bind(this), 1000);
    }
  }
</script>
<style>

</style>
