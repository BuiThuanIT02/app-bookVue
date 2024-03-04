<template>
  <a href="product.html">
    <img src="../assets/Images/sp1.png" class="img-thumbnail" alt="san_pham" />
  </a>
  <!-- <span
    class="position-absolute badge translate-middle fs-5 bg-danger"
    style="top: 19px; right: -24px"
    >-5%</span
  > -->
  <p class="bookName">{{ book.name }}</p>

  <span class="text-dark me-4">{{ book.price }}đ</span>
  <!-- <span class="text-bg-danger">
    <del>123.dd</del>
  </span> -->
</template>

<script>
export default {
  name: "ProductItemApp",
  props: {
    book: {
      type: Object,
    },
  },
  setup(prop) {
    const book = { prop };

    return book.value;
  },
};
</script>

<style  scoped>
.bookName {
  width: 150px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
