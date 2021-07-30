document.addEventListener("DOMContentLoaded", function (event) {
    const feedbackBtn = document.querySelector('#feedback-btn');
    const feedbackPopup = document.querySelector('.feedback');
    const feedbackShow = function () {
        feedbackBtn.addEventListener('click', function () {
            feedbackPopup.classList.add('active');
            body.style.overflow = "hidden";
        })
    }
    feedbackShow();
});