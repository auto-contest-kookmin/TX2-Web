<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :row-style-class="isDQ">
      <template slot="table-row" slot-scope="props">
          <span style="; font-size: 1.8em;">{{props.formattedRow[props.column.field]}}</span> 
      </template>
      <template slot="table-column" slot-scope="props">
          <span style="font-weight: bold; font-size: 2em;">{{props.column.label}}</span> 
      </template>
    </vue-good-table>
  </div>
</template>

<script>

export default {
  name: 'TableView',
  data(){
    return {
      columns: [
        { label: '팀번호', field: 'carID', sortable: false },
        { label: '팀명', field: 'teamName', sortable: false },
        { label: '1st Lap Time', field: 'firstLapTime' },
        { label: '2nd Lap Time', field: 'secondLapTime' },
        { label: '3rd Lap Time', field: 'thirdLapTime' },
        { label: '벌점', field: 'penalty', sortable: false },
        { label: '전체 시간', field: 'totalLapTime' },
        { label: '실격 여부', field: 'disqualified', hidden: true}
      ],
      rows: [],
    };
  },
  methods: {
      fetchData: function(){
        this.$http.get('http://192.168.0.71:5000/getdata')
        .then((result) => {
        //   console.log(result);
          this.rows = result.data;
        })
      },
      isDQ(row){
        //   console.log(row);
          return row.disqualified == "1" ? 'dq' : 'notdq';
      }
    },
    mounted: function(){
      this.fetchData();
      this.interval = setInterval(function(){
        this.fetchData();
      }.bind(this), 1000);
    }
};
</script>

<style>
    .dq {
        background-color: lightgrey;
    }
</style>