<template>
  <section id="product-info">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-4 col-xl4 border p-0">
          <img src="../assets/Images/sp1.png" width="100%" alt="" />
          <div class="row">
            <div class="col-sm mt-2">
              <img src="../assets/Images/sp1.png" width="24%" alt="" />
              <img src="../assets/Images/sp1.png" width="24%" alt="" />
              <img src="../assets/Images/sp1.png" width="24%" alt="" />
              <img src="../assets/Images/sp1.png" width="24%" alt="" />
            </div>
          </div>
        </div>

        <div class="col-sm-8 col-md-8 col-xl-8 border">
          <p>sản phẩm</p>
          <p>Giá bán: 4555.555đ</p>
          <p>Tác giá</p>
          <p>Trọng lương:</p>
          <p>Số trang:</p>
          <div id="buy-amount">
            <button class="minus-btn" onclick="HandleMinus()">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input
              type="text"
              name="amount"
              id="amount"
              max="10"
              min="1"
              value="1"
            />
            <button class="plus-btn" onclick="HandlePlus()">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <button class="mt-5">Thêm vào giỏ hàng</button>
          <button class="mt-5">Mua ngay</button>
        </div>
      </div>

      <!--Hàng 2-->

      <div class="row">
        <div class="col-sm-8 border p-0">
          <ul class="nav">
            <li class="nav-item text-bg-danger">
              <a href="#" class="nav-link text-white">Mô tả</a>
            </li>
            <li class="nav-item text-bg-danger">
              <a href="#" class="nav-link text-white">Bình luận</a>
            </li>
          </ul>
        </div>

        <div class="col-sm-4 border">
          <h5>SÁCH CÙNG TÁC GIẢ</h5>

          <div class="row">
            <div class="col-sm-2 col-md-2">
              <a href="#" class="nav-item">
                <img src="../assets/Images/logo.png" width="60px" alt="" />
              </a>
            </div>

            <div class="col-sm-10 col-md-10">
              <p class="text-break">
                tên sản phẩmhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                kkkkkkkkkkkkkkkkkkkkkkkkkk
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-2 col-md-2">
              <a href="#" class="nav-item">
                <img src="../assets/Images/logo.png" width="60px" alt="" />
              </a>
            </div>

            <div class="col-sm-10 col-md-10">
              <p class="text-break">
                tên sản phẩmhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                ggggggggggggggggggggggggggggggggggggggggggg
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                kkkkkkkkkkkkkkkkkkkkkkkkkk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductDetail",
};
</script>

<style></style>
