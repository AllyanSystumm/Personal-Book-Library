document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");
    const historyList = document.getElementById("history-list");
    const searchInput = document.getElementById("search");

    let books = [];
    let borrowingHistory = [];

    bookForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const borrowDate = document.getElementById("borrow-date").value;

        const book = { title, author, category, borrowDate };
        books.push(book);

        if (borrowDate) {
            borrowingHistory.push(book);
        }

        renderBooks();
        renderHistory();
        bookForm.reset();
    });

    searchInput.addEventListener("input", () => {
        renderBooks();
    });

    function renderBooks() {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput.value.toLowerCase()));
        bookList.innerHTML = filteredBooks.map(book => `
            <li>
                <strong>${book.title}</strong> by ${book.author} 
                <span class="category">[${book.category}]</span>
            </li>
        `).join("");
    }

    function renderHistory() {
        historyList.innerHTML = borrowingHistory.map(book => `
            <li>
                <strong>${book.title}</strong> borrowed on ${book.borrowDate} 
                <span class="category">[${book.category}]</span>
            </li>
        `).join("");
    }
});
