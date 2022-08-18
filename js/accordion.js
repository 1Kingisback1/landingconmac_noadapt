var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel_accordion_content = this.nextElementSibling;
        if (panel_accordion_content.style.maxHeight) {
            panel_accordion_content.style.maxHeight = null;
        } else {
        panel_accordion_content.style.maxHeight = panel_accordion_content.scrollHeight + "px";
        }
    });
}
