function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var readMoreLink = document.getElementById("readMoreLink");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreLink.innerHTML = "Sembunyikan";
        readMoreLink.setAttribute("aria-expanded", "true");
    } else {
        moreText.style.display = "none";
        readMoreLink.innerHTML = "Selengkapnya...";
        readMoreLink.setAttribute("aria-expanded", "false");
    }
}
