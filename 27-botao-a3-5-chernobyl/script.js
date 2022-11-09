document.getElementsByClassName("cover-wrap")[0].addEventListener("click",
    function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active")
        } else {
            this.classList.add("active")
        }
    }
)