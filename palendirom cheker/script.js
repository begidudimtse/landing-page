document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("text-input");
    const button = document.getElementById("check-btn");
    const result = document.getElementById("result");

    button.addEventListener("click", function () {
        const text = input.value.trim();
        if (text === "") {
            alert("Please input a value");
            return;
        }
        const reversedText = text.split("").reverse().join("");
        if (text.toLowerCase().replace(/[^a-z0-9]/g, "") === reversedText.toLowerCase().replace(/[^a-z0-9]/g, "")) {
            result.textContent = `${text} is a palindrome`;
        } else {
            result.textContent = `${text} is not a palindrome`;
        }
    });
});
