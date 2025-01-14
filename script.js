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

fetch("updates.json")
    .then((response) => response.json())
    .then((messages) => {
        const updatesDiv = document.getElementById("updates");
        messages.forEach((message) => {
            const updateDiv = document.createElement("div");
            updateDiv.classList.add("update");
            updateDiv.innerHTML = `<p class="date">${message.date}</p><p>${message.text}</p>`;
            updatesDiv.appendChild(updateDiv);
        });
    })
    .catch((error) => console.error("Error loading updates:", error));
