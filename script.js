// Get DOM Elements
const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

// Live Search Functionality
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const results = flashcards.filter(card =>
        card.front.toLowerCase().includes(query)
    );

    // Render Results
    resultsDiv.innerHTML = results
        .map(card => `<div class="card"><strong>${card.front}</strong><br>${card.back}</div>`)
        .join("");
});
