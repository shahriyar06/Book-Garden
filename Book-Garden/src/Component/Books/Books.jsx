import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setbooks(data));
    }
    , [])

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Books</h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
                {
                    books.map(book => <Book key={books.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;