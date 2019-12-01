<template>
  <div>
    <Title/>
    <StopWatch/>
    <!-- <TableView/> -->
    <GoodTableView/>
    

  </div>
</template>

<script>
// import TableView from "@/components/TableView"
import StopWatch from "@/components/StopWatch"
import GoodTableView from "@/components/GoodTableView"
import Title from "@/components/Title"

export default {
  name: "App",
    components: {
      // TableView,
      StopWatch,
      GoodTableView,
      Title
    }
}
</script>

<style>

</style>