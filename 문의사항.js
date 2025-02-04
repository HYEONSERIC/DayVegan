
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inquiry-form");
    const inquiryList = document.querySelector(".inquiry-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // 입력값 가져오기
        const title = document.getElementById("title").value;
        const message = document.getElementById("message").value;

        // 새로운 문의사항 요소 추가
        const inquiryItem = document.createElement("div");
        inquiryItem.classList.add("inquiry-item");
        inquiryItem.innerHTML = `<h3>${title}</h3><p>${message}</p>`;

        // 문의 목록에 추가
        if (inquiryList.querySelector("p")) {
            inquiryList.innerHTML = ""; // 기존 '등록된 문의가 없습니다' 제거
        }
        inquiryList.appendChild(inquiryItem);

        // 입력 필드 초기화
        form.reset();
    });
});
