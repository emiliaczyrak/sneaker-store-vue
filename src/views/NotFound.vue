<template>
  <div class="not-found">
    <div class="not-found__image">
      <img
        class="not-found__img"
        src="../assets/not-found.svg"
        alt="not found"
      />
    </div>
    <div class="not-found__text">404 - Page not found</div>
    <div class="not-found__nav">
      <router-link to="/products"> Go back to products </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__img {
    width: 600px;
  }
  &__text {
    font-size: 2rem;
    padding: 20px;
  }
  &__nav {
    font-size: 0.9rem;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: black;
    border: 1px solid #8ed0ff;
    padding: 10px 15px;
    transition: 0.2s;
    &:hover {
      background-color: #8ed0ff;
    }
  }
}
@media (max-width: 768px) {
  .not-found {
    &__img {
      width: 300px;
    }
  }
}
</style>
