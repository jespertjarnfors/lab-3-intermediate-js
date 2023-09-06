const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

// 7a.

function getBookTitle(bookId) {

    let bookFinder = books.find(book => book.id == bookId);

    return bookFinder.title;

}

console.log(getBookTitle(4));

// 7b.

function getOldBooks(releaseYear) {

const yearFilter = books.filter(book => book.year < releaseYear)

return yearFilter;

}

console.log(getOldBooks(1950));


// 7c.

function addGenre(genre) {

const genreAdder = books.map(book => book.genre = genre);

return books;

}

console.log(addGenre('classic'));

// 7d.

function getTitles(authorInitial) {

const authors = books.map(book => book.author);

const initialFilter = authors.filter(item => {
    if (item.charAt(0) === authorInitial) {
        return item;
    }
})

return initialFilter;

}

console.log(getTitles("H"));

// 7E.

function latestBook() {

let mostRecentYear = 0;

books.forEach(book => {

if (mostRecentYear < book.year) {
    mostRecentYear = book.year;
}    
})

let mostRecentBook = books.find(book => book.year == mostRecentYear);

return mostRecentBook;

}

console.log(latestBook());