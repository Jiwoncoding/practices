// 로그인되어 있는 상태(list.html, write.html, read.html)에서 필요한 자바스크립트

// 1. 로그인되어 있지 않다면 login.html로 이동
if(sessionStorage.getItem('username')==null) {
    location.href = "login.html";
}

$(document).ready(function() {
    // 2. 로그아웃 처리
    $('#logout').click(function() {
        sessionStorage.clear();
        location.href="login.html";
    });
});