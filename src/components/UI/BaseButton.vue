<template>
  <button class="base-btn"><slot> </slot></button>
</template>

<style lang="scss" scoped>
.base-btn {
  width: 90%;
  background-color: #8ed0ff;
  border-radius: 3px;
  color: #ffff;
  border: none;
  padding: 15px 15px;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #60b7f5;
  }
}
</style>
