document.getElementById('login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        event.preventDefault(); // 폼 제출 방지
        alert('아이디와 비밀번호를 모두 입력해주세요.');
    }
});
