"use strict";

// ***** Hide infos *****
// Lấy các phần tử DOM
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");
const emailInput = document.getElementById("email-input");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.getElementById("error-msg");

// Định nghĩa regex kiểm tra email hợp lệ
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Hàm kiểm tra email
function isValidEmail(email) {
  return emailRegex.test(email);
}

//Thêm sự kiện click cho nút submit hoặc nút Enter
function handleSubmit() {
  const email = emailInput.value.trim(); // Lấy giá trị từ input và loại bỏ khoảng trắng

  // Kiểm tra email hợp lệ
  if (!email || !isValidEmail(email)) {
    errorMsg.classList.remove("hide"); // Hiện thông báo lỗi
    return;
  }

  // Email hợp lệ, chuyển đổi các container
  errorMsg.classList.add("hide"); // Ẩn lỗi
  formContainer.classList.add("hide"); // Ẩn form
  infoContainer.classList.remove("hide"); // Hiện thông tin cá nhân
}
//Nút submit
submitBtn.addEventListener("click", handleSubmit);
//Phism Enter
emailInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSubmit();
  }
});

// ***** Career skills *****
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các phần tử kỹ năng
  const skillElements = document.querySelectorAll(".col-main");

  // Lặp qua từng kỹ năng
  skillElements.forEach((skill) => {
    const content = skill.querySelector(".maininfo-bottom");
    const button = skill.querySelector(".view-more-btn");

    // Thêm sự kiện click cho nút View More/View Less
    button.addEventListener("click", function () {
      // Toggle ẩn/hiện nội dung kỹ năng
      content.style.display =
        content.style.display === "none" || content.style.display === ""
          ? "block"
          : "none";

      // Cập nhật nội dung của nút
      if (content.style.display === "block") {
        button.textContent = "View Less";
      } else {
        button.textContent = "View More";
      }
    });
  });
});
