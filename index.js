function checkLuck() {
    let luckScore = Math.floor(Math.random() * 101 )

    window.location.href = "result.html?score=" + luckScore;
}