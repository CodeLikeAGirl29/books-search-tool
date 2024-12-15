# Book Finder

[Book Finder](https://my-book-finder-tool.netlify.app/) is a web application that allows users to search for books using the Google Books API. Users can search for books by title, author, or ISBN and view the results, which include book covers, titles, authors, descriptions, and links to more details on Google Books.

[![CodeFactor](https://www.codefactor.io/repository/github/codelikeagirl29/books-search-tool/badge)](https://www.codefactor.io/repository/github/codelikeagirl29/books-search-tool)

![Book Finder Screenshot](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1734228411/Book-Finder-12-14-2024_08_04_PM_lklzny.png)

---

## Features

- Search for books using the Google Books API.
- View book details, including:
  - Book cover
  - Title
  - Author(s)
  - Short description
  - Link to the book on Google Books
- Responsive and modern Material-UI-inspired design.
- Elegant footer with hover effects for social media links.

---

## How to Use

### 1. Clone or Download the Repository

```bash
git clone https://github.com/codelikeagirl29/books-search-tool.git
```

### 2. Navigate to the Project Folder

```bash
cd book-finder
```

### 3. Open `index.html` in a Browser

You can open the `index.html` file directly in any modern web browser (e.g., Chrome, Firefox, Edge).

Alternatively, you can use a live server for local development:

- Install a live server extension (e.g., Live Server for VS Code).
- Open the folder and start the server.

### 4. Search for Books

- Enter a **book title**, **author**, or **ISBN** in the search bar.
- Click the **Search** button or press Enter.
- Browse the search results.

---

## Code Structure

### HTML

The main structure of the application is defined in `index.html`. Key sections include:

- A **header** with the app title and description.
- A **search form** with an input field, a search icon, and a button.
- A **results section** that dynamically displays search results.
- A **footer** with social media links and credits.

### CSS

The styles are managed in `assets/styles.css`:

- Modern Material-UI-inspired styles.
- Responsive design for both desktop and mobile devices.
- Dynamic hover effects for buttons and footer links.

### JavaScript

The logic is handled in `assets/script.js`:

- Fetches data from the Google Books API.
- Dynamically renders search results.
- Handles errors and ensures a seamless user experience.

---

## Technologies Used

- **HTML5**: For structure and layout.
- **CSS3**: For modern styling and responsiveness.
- **JavaScript (ES6)**: For API calls and dynamic content rendering.
- **Google Books API**: To fetch book data.
- **Font Awesome**: For icons.
- **Google Fonts**: For typography.

---

## Screenshot

![Book Finder Screenshot](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1734228411/Book-Finder-12-14-2024_08_04_PM_lklzny.png)

---

## Future Enhancements

- Add pagination for large result sets.
- Allow users to filter results by category or language.
- Save favorite books to local storage for offline access.
- Display user reviews and ratings from the Google Books API.

---

## Credits

Designed and developed by **Lindsey**.  
Visit [lindseyk.dev](http://www.lindseyk.dev) for more projects.

---

Feel free to copy and paste this content into a `README.md` file! Let me know if you'd like any further adjustments. 😊
