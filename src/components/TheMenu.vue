<template>
  <section id="menu" class="mymainmenu bg-danger">
    <div class="container">
      <div class="row">
        <div class="col-md-3 text-white py-3">
          <a href="#" class="category dropdown" data-bs-toggle="dropdown">
            <i class="fa fa-bars p-1" aria-hidden="true"></i>
            DANH MỤC SẢN PHẨM</a
          >
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item">Sách 1</a></li>
            <li><a href="#" class="dropdown-item">Sách2</a></li>
          </ul>
        </div>
        <div class="col-md-9">
          <!--Nav-->
          <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link active text-white me-3"
                      aria-current="page"
                      href="#"
                      >Trang chủ</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white me-3" href="#">Giới thiệu</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-white me-3"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sản phẩm
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item" href="#">Another action</a>
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white me-3" aria-disabled="true"
                      >Tin tức</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white me-3" aria-disabled="true"
                      >Liên hệ</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TheMenuAppOne",
};
</script>
<style></style>
