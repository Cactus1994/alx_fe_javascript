document.addEventListener('DOMContentLoaded', () => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');

    // Array to hold quote objects
    const quotes = [
        { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
        { text: "Life is what happens when you're busy making other plans.", category: "Life" },
        { text: "Get busy living or get busy dying.", category: "Motivation" },
        { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", category: "Inspiration" },
    ];

    // Function to display a random quote
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteDisplay.innerHTML = `<p>"${randomQuote.text}" - <em>${randomQuote.category}</em></p>`;
    }

    // Function to create the form for adding a new quote
    function createAddQuoteForm() {
        const formContainer = document.createElement('div');
        formContainer.innerHTML = `
            <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
            <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
            <button id="addQuote">Add Quote</button>
        `;
        document.body.appendChild(formContainer);

        // Add event listener for the add quote button
        const addQuoteButton = document.getElementById('addQuote');
        addQuoteButton.addEventListener('click', addQuote);
    }

    // Function to add a new quote
    function addQuote() {
        const newQuoteText = document.getElementById('newQuoteText');
        const newQuoteCategory = document.getElementById('newQuoteCategory');
        const text = newQuoteText.value.trim();
        const category = newQuoteCategory.value.trim();
        if (text && category) {
            quotes.push({ text, category });
            newQuoteText.value = '';
            newQuoteCategory.value = '';
            alert('Quote added successfully!');
        } else {
            alert('Please enter both a quote and a category.');
        }
    }

    // Event listeners
    newQuoteButton.addEventListener('click', showRandomQuote);

    // Initialize the app
    createAddQuoteForm();
    showRandomQuote();
});
