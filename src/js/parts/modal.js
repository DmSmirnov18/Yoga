function modal() {
    let more = document.querySelector(".more");
    let descriptionBtn = document.querySelectorAll(".description-btn");
    let overlay = document.querySelector(".overlay");
    let close = document.querySelector(".popup-close");

    descriptionBtn.forEach(function (item) {
        item.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    });

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });
}

module.exports = modal;