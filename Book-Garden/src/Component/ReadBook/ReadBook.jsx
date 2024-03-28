import { useLoaderData } from "react-router-dom";
import ReadBookList from "../ReadBookList/ReadBookList";
import { useEffect, useState } from "react";
import { getstoredreadbook } from "../utilitis/localstorage";


const ReadBook = ({sortType}) => {

    const books = useLoaderData();
    const [booksread, setbooksread] = useState([]);
    useEffect( () => {
        const storedbookId = getstoredreadbook();
        if(books.length > 0){
            const readbooklist = [];
            for(const id of storedbookId){
                const book = books.find(list => list.bookId === id);
                if(book){
                    readbooklist.push(book)
                }
                
            }
            if(sortType === 'Rating'){
                readbooklist.sort((a,b) => b.rating - a.rating)
            }
            else if(sortType === 'Number of pages'){
                readbooklist.sort((a,b) => b.totalPages - a.totalPages)
            }
            else if(sortType === 'Publisher year'){
                readbooklist.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
            }
            setbooksread(readbooklist);
            console.log(sortType, readbooklist);
        }
        
    }, [sortType])

    return (
        <div>
            <div className="">
                {
                    booksread.map(book => <ReadBookList key={booksread.bookId} book={book}></ReadBookList>)
                }
            </div>
            
        </div>
    );
};

export default ReadBook;