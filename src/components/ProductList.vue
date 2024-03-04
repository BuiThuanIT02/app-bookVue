<template>
  <section class="mymaincontent my-3">
    <div class="container">
      <!--Slider-->
      <the-silde />
      <!--End Slide-->
      <!--Product list-->
      <div class="product-list mt-3">
        <div class="product_title border-bottom">
          <div class="row">
            <div class="col-md-4">
              <strong
                class="text-white bg-danger d-inline-block text-center mt-3"
                >THỜI TRANG</strong
              >
            </div>
            <div class="col-md-8">
              <div class="list-group list-group-horizontal float-end">
                <a href="#" class="list-group-item">Thời trang</a>
                <a href="#" class="list-group-item">Phụ kiện</a>
                <a href="#" class="list-group-item">Công nghệ</a>
                <a href="#" class="list-group-item">Tiện ích</a>
              </div>
            </div>
          </div>
        </div>
        <!-- luwu ys product_list -->
        <div class="product--list mt-3">
          <div class="row">
            <div
              class="col-md my-3 position-relative"
              v-for="book in listBook"
              :key="book.id"
            >
              <product-item :book="book" />
            </div>
            <!--End hàng sp-->
          </div>
        </div>
        <!--End product list-->
      </div>
      <!--End Slider-->
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import ProductItem from "./ProductItem.vue";
import TheSilde from "./TheSilde.vue";
import { computed } from "vue";

export default {
  name: "ProductList",
  components: {
    TheSilde,
    ProductItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("listBook/getAllBookAction");
    var listBook = computed(() => {
      return store.state.listBook.book;
    });
    return { listBook };
  },
};
</script>
<style></style>
