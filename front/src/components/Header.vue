<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-3"><div class="box-row"><a href="/">HOME</a></div></div>
    <div class="p-col-12 p-md-6 p-lg-3"><div class="box-row"><a href="study">STUDY</a></div></div>
    <div class="p-col-12 p-md-6 p-lg-3"><div class="box-row"><a href="development">DEVELOPEMENT</a></div></div>
    <div class="p-col-12 p-md-6 p-lg-3"><div class="box-row"><a href="admin">ADMIN</a></div></div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.box-row {
  height: 13vw;
  font-size: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 20px;
  box-shadow: 10px 5px 5px black;
  background-color: #2196F3;
}

</style>