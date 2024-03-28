import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getstoredwishlist } from "../utilitis/localstorage";
import BookWishList from "../BookWishList/BookWishList";


const WishlistBook = () => {
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
            setwishlist(bookwishlist);
        }
    }, [])
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