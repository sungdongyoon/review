$("#confirmStart").click(function() {
  Swal.fire({
    title: "웹 상에서는<br/> 대여권 구매만 가능합니다!",
    text: "대여권 사용은 앱을 이용해주세요🤪",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#001665",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    // reverseButtons: true, //버튼 순서 거꾸로
  }).then((result) => {
    if(result.isConfirmed) {
      location.href = "/test.html";
    }
  })
})

/* 이용권 구매하기 -> 결제하기 모달*/
const button = document.querySelector(".one");
const modal = document.querySelector(".payment_modal");
button.addEventListener("click", () => {
  modal.classList.add("show");
})