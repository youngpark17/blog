<template>
  <div>
    <InputText v-model="text"></InputText>
    <Button>123</Button>
    {{text}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      text: 'text',
    }
  }
}
</script>

<style>

</style>
