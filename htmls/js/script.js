document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll("button");
    
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "https://t.me/firdBro";
        });
    });
});
