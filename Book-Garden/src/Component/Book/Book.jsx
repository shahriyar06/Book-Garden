import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {tags} = book;
    return (
        <div>
            <Link to="/book/:bookId">
                <div className="card rounded-3xl border-2 border-[#c2c2c2]">
                    <div className="rounded-3xl p-4 mt-4 bg-[#eff6ffb3]  w-11/12 mx-auto">
                        <figure><img src={book.image} className="h-52" alt="Shoes" /></figure>
                    </div>
                    
                    <div className="p-4 ">
                        <div className="flex gap-3">
                        {
                                tags.map((tags , idx) => <span className='text-[#23BE0A] bg-[#22be0a0e] py-2 px-4 rounded-full' key={idx} ><h1>{tags}</h1></span>)
                        }
                        </div>
                        <h2 className="card-title text-[#131313] text-2xl font-semibold my-3 flex-grow-0">{book.bookName}</h2>
                        <p className="text-[#131313] text-base">By : {book.author}</p>
                        <hr className="border-[#1313132f] border-t-2 border-dashed my-4" />
                        <div className="mb-4 flex justify-between text-[#131313]">
                            <h1>{book.category}</h1>
                            <h1 className="flex items-center gap-2">{book.rating} <IoIosStarOutline /></h1>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;