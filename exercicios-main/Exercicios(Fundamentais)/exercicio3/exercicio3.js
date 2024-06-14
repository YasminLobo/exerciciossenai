// Yasmin Siqueira Lobo
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("#myList li");

    listItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("highlight");
        });
    });
});
