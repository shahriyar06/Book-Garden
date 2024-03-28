import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getstoredwishlist } from "../utilitis/localstorage";
import BookWishList from "../BookWishList/BookWishList";


const WishlistBook = ({sortType}) => {
    const wish = useLoaderData();
    const [wishlist, setwishlist] = useState([]);
    useEffect( () => {
        const storedbookId = getstoredwishlist();
        if(wish.length > 0){
            const bookwishlist = [];
            for(const id of storedbookId){
                const wishs = wish.find(list => list.bookId === id);
                if(wishs){
                    bookwishlist.push(wishs)
                }
                
            }
            if(sortType === 'Rating'){
                bookwishlist.sort((a,b) => b.rating - a.rating)
            }
            else if(sortType === 'Number of pages'){
                bookwishlist.sort((a,b) => b.totalPages - a.totalPages)
            }
            else if(sortType === 'Publisher year'){
                bookwishlist.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
            }
            setwishlist(bookwishlist);
        }
    }, [sortType])
    return (
        <div>
            <div className="">
                {
                    wishlist.map(wish => <BookWishList key={wishlist.bookId} wish={wish}></BookWishList>)
                }
            </div>
            
        </div>
    );
};

export default WishlistBook;