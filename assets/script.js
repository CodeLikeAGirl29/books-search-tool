"use strict";

// API endpoint
const googleBooksAPI = "https://www.googleapis.com/books/v1/volumes";

// DOM Elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const errorMessage = document.getElementById("error-message");
const resultsSection = document.getElementById("results");
const resultsList = document.getElementById("results-list");

// Fetch books from the Google Books API
async function fetchBooks(query) {
  try {
    const response = await fetch(
      `${googleBooksAPI}?q=${encodeURIComponent(query)}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books. Please try again.");
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get book cover image URL
function getCoverImageUrl(volumeInfo) {
  if (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
    return volumeInfo.imageLinks.thumbnail;
  }
  return "https://via.placeholder.com/150?text=No+Cover";
}

// Display results on the page
function displayResults(books) {
  resultsList.innerHTML = "";

  if (books.length === 0) {
    resultsList.innerHTML = "<p>No books found. Try a different search.</p>";
  } else {
    books.forEach((book) => {
      const { volumeInfo } = book;
      const coverUrl = getCoverImageUrl(volumeInfo);

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${coverUrl}" alt="Cover of ${volumeInfo.title}">
        <h3>${volumeInfo.title}</h3>
        <p><strong>Author:</strong> ${volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown"}</p>
        <p><strong>Description:</strong> ${volumeInfo.description ? volumeInfo.description.substring(0, 200) + "..." : "No description available."}</p>
        <a href="${volumeInfo.infoLink}" target="_blank">View on Google Books</a>
      `;
      resultsList.appendChild(listItem);
    });
  }

  resultsSection.classList.remove("hidden");
}

// Handle form submission
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    errorMessage.textContent = "Please enter a book title, author, or ISBN.";
    errorMessage.classList.remove("hidden");
    return;
  }

  errorMessage.classList.add("hidden");

  try {
    const books = await fetchBooks(query);
    displayResults(books);
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.remove("hidden");
  }
});
