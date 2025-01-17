import { useLoaderData, useParams } from "react-router-dom";
import { BsHash } from "react-icons/bs";
import { getstoredreadbook, getstoredwishlist, savereadbook, savewishlist } from "../utilitis/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookInformation = () => {
    const book = useLoaderData();
    const {bookId} = useParams();
    const IdInt = parseInt(bookId)
    const books = book.find(books => books.bookId === IdInt);
    const {tags} = books;

    const handlereadbook = () =>{
        const readbooks = getstoredreadbook(); 
        if (readbooks.includes(IdInt)) 
        {
            toast("You have already read book..");      
        } else 
        {
            savereadbook(IdInt);
            toast("You have read book..");
        }
    }

    const handlewishlist = () =>{
        const readbooks = getstoredreadbook();
        const wishlists = getstoredwishlist();
        if (wishlists.includes(IdInt)) 
        {
            toast("You have already read book..");
        } 
        else if (readbooks.includes(IdInt)) 
        {
            toast("This book is already in your Read list.");
        } else 
        {
            savewishlist(IdInt);
            toast("You have added to wishlist..");
        }
    }

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2 rounded-3xl p-1 items-center flex flex-col">
                    <img src={books.image} className="rounded-3xl flex-grow" alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col">
                    <h1 className="text-3xl font-bold mb-5">{books.bookName}</h1>
                    <h1 className="text-xl">By : {books.author}</h1>
                    <hr className="border-[#1313132f] border-t-2 my-4" />
                    <h2 className="text-lg">{books.category}</h2>
                    <hr className="border-[#1313132f] border-t-2 my-4" />
                    <p className="text-base mb-4 "><span className="text-lg font-semibold flex-grow">Review :</span> {books.review}</p>
                    <div className="flex items-center gap-6">
                        <h1 className="text-lg font-semibold">Tag</h1>
                        <div className="flex gap-3">
                            {
                                    tags.map((tags , idx) => <span className='text-[#23BE0A] bg-[#22be0a09] py-2 px-4 rounded-full' key={idx} ><h1 className="flex items-center"><span><BsHash /></span> {tags}</h1></span>)
                            }
                        </div>
                    </div>
                    <hr className="border-[#1313132f] border-t-2 mt-5 mb-4" />
                    <div>
                        <table className="table-auto mb-6">
                            <tbody>
                                <tr>
                                    <td className=" text-[#222222b3] pr-12
                                    ">Number of Pages: </td>
                                    <td className="text-[#131313] font-medium"> {books.totalPages} </td>
                                </tr>
                                <tr>
                                    <td className=" text-[#222222b3] pr-12
                                    ">Publisher: </td>
                                    <td className="text-[#131313] font-medium">{books.publisher} </td>
                                </tr>
                                <tr>
                                    <td className=" text-[#222222b3] pr-12
                                    ">Year of Publishing:</td>
                                    <td className="text-[#131313] font-medium">{books.yearOfPublishing} </td>
                                </tr>
                                <tr>
                                    <td className="text-[#222222b3] pr-12
                                    ">Rating: </td>
                                    <td className="text-[#131313] font-medium">{books.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button onClick={handlereadbook} className="btn bg-[#22be0ae2] border-[#23BE0A] text-base mr-4 text-[#FFFFFF] hover:bg-[#66e752e2]">Read</button>
                        <button onClick={handlewishlist} className="btn bg-[#59c6d2e5] border-[#59C6D2] text-base text-[#FFFFFF] hover:bg-[#7cdae4e5]">Wishlist</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInformation;