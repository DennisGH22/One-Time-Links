<script lang="ts">
  export default {
    name: "Nav",
    methods: {
      home() {
        location.href = "/";
      }
    }
  }
</script>

<template>
  <nav>
    <div class="logo">
      <img src="./icons/logo.svg" alt="iMvula ICD Logo" width="250" height="250" @click="home" />
    </div>
  </nav>
</template>
