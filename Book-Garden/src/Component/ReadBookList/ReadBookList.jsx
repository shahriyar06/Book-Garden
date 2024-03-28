import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { GrUserManager } from "react-icons/gr";
import { BsHash } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const ReadBookList = ({book}) => {
    const {tags} = book;
    return (
        <div>
            <div className="mb-8 w-full border-2 border-[#13131327] rounded-3xl">
                <div className="hero w-full">
                    <div className="hero-content flex-col lg:flex-row grid lg:grid-cols-6">
                        <div className=" col-span-2">
                            <img src={book.image} className="max-w-sm rounded-lg shadow-2xl h-80" />
                        </div>
                        <div className="col-span-4 text-lg ml-5">
                            <h1 className="lg:text-5xl text-3xl font-bold mb-4">{book.bookName}</h1>
                            <h1 className="lg:text-xl text-lg font-semibold">By : {book.author}</h1>
                            <div className="lg:flex gap-5 items-center grow my-5">
                                <div className="flex items-center lg:gap-6 gap-6 mr-4 lg:mr-0 mb-5 lg:mb-0">
                                    <h1 className="text-lg font-semibold">Tag</h1>
                                    <div className="lg:flex lg:gap-3 gap-1">
                                        {
                                            tags.map((tags , idx) => <span className='text-[#23BE0A] bg-[#22be0a09] py-2 px-4 rounded-full' key={idx} ><h1 className="flex items-center"><span><BsHash /></span> {tags}</h1></span>)
                                        }
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <SlLocationPin />
                                    <h1>Year of Publishing :   {book.yearOfPublishing}</h1>
                                </div>
                            </div>
                            <div className="lg:flex gap-5">
                                <h1 className="text-lg flex items-center gap-3 mr-3 lg:mr-0 mb-5 lg:mb-0"><GrUserManager />  Publisher :    {book.publisher}</h1>
                                <h1 className="text-lg flex items-center gap-3"><HiOutlineDocumentChartBar />  Page {book.totalPages}</h1>
                            </div>
                            <hr className="border-[#1313132f] border-t-2 my-4 w-10/12 lg:w-0"/>
                            <div className="lg:flex gap-8 items-center grow w-full">
                                <h1 className="text-[#328EFF] bg-[#328eff20] rounded-full py-3 px-7  ">Category :  {book.category}</h1>
                                <h1 className="text-[#FFAC33] bg-[#ffad331e] rounded-full py-3 px-7 my-4  md:my-0">Rating :  {book.rating}</h1>
                                <Link to={`/book/${book.bookId}`}><button className="btn bg-[#23BE0A] border-[#23BE0A] text-lg mr-4 text-[#FFFFFF] rounded-full hover:bg-[#47d6318a]  px-6 ">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookList;