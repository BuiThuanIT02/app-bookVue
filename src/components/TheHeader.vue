<template>
  <section class="myheader">
    <div class="container pt-3">
      <div class="row">
        <!--Cot 1-->
        <div class="col-md-3">
          <img src="../assets/Images/logo.png" class="img-fluid" alt="logo" />
        </div>
        <!--Cot 2 Tìm kiếm-->
        <tim-kiem />
        <!--Cot 3-->
        <div class="col-md-3">
          <div class="row">
            <!--Cột 1 trong cột 3-->
            <div class="col">
              <div class="row">
                <div class="col-md-3">
                  <div class="fs-3 text-danger">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="col-md-9">
                  Tư vấn hỗ trợ <br />
                  <strong class="text-danger">098754263</strong>
                </div>
              </div>
            </div>

            <!--Cột 2 trong cột 3-->
            <div class="col">
              <div class="row">
                <div class="col-md-3 my-3">
                  <div class="fs-3 text-danger">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="col-md-9">
                  Xin chào <br />

                  <button class="btn text-danger p-0">Đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Cot 4-->
        <div class="col-md-2">
          <div class="row">
            <div class="col">
              <a href="#" class="position-relative">
                <span class="fs-3 text-dark">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  0
                  <span class="visually-hidden">unread messages</span>
                  <!--..-hidden : ẩn nội dung trước mắt-->
                </span>
              </a>
            </div>

            <div class="col">
              <a href="#" class="position-relative">
                <span class="fs-3 text-dark">
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  0
                  <span class="visually-hidden">unread messages</span>
                  <!--..-hidden : ẩn nội dung trước mắt-->
                </span>
              </a>
            </div>

            <div class="col">
              <a href="#" class="position-relative">
                <span class="fs-3 text-dark">
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill"
                >
                  0
                  <span class="visually-hidden">unread messages</span>
                  <!--..-hidden : ẩn nội dung trước mắt-->
                </span>
              </a>
            </div>
          </div>
        </div>
        <!--End-->
      </div>
    </div>
  </section>
</template>
<script>
import TimKiem from "./TimKiem.vue";
export default {
  name: "TheHeader",
  components: {
    TimKiem,
  },
};
</script>
<style></style>
