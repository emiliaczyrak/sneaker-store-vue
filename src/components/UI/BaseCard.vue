<template>
  <div class="base-card">
    <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.base-card {
  border-radius: 10px;
  box-shadow: -1px 9px 36px -2px rgba(226, 226, 226, 1);
}
</style>
