import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { GrUserManager } from "react-icons/gr";
import { BsHash } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const BookWishList = ({wish}) => {
    const {tags} = wish;
    return (
        <div>
            <div className="mb-8 w-full border-2 border-[#13131327] rounded-3xl">
                <div className="hero w-full">
                    <div className="hero-content flex-col lg:flex-row grid grid-cols-6">
                        <div className=" col-span-2">
                            <img src={wish.image} className="max-w-sm rounded-lg shadow-2xl h-80" />
                        </div>
                        <div className="col-span-4 text-lg ml-5">
                            <h1 className="text-5xl font-bold mb-4">{wish.bookName}</h1>
                            <h1 className="text-xl font-semibold">By : {wish.author}</h1>
                            <div className="flex gap-5 items-center grow my-5">
                                <div className="flex items-center gap-6">
                                    <h1 className="text-lg font-semibold">Tag</h1>
                                    <div className="flex gap-3">
                                        {
                                            tags.map((tags, idx) => <span key={idx} className='text-[#23BE0A] bg-[#22be0a09] py-2 px-4 rounded-full'><h1 className="flex items-center"><span><BsHash /></span> {tags}</h1></span>)
                                        }
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <SlLocationPin />
                                    <h1>Year of Publishing :   {wish.yearOfPublishing}</h1>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <h1 className="text-lg flex items-center gap-3"><GrUserManager />  Publisher :    {wish.publisher}</h1>
                                <h1 className="text-lg flex items-center gap-3"><HiOutlineDocumentChartBar />  Page {wish.totalPages}</h1>
                            </div>
                            <hr className="border-[#1313132f] border-t-2 my-4"/>
                            <div className=" flex gap-8 items-center grow w-full">
                                <h1 className="text-[#328EFF] bg-[#328eff20] rounded-full py-3 px-7">Category :  {wish.category}</h1>
                                <h1 className="text-[#FFAC33] bg-[#ffad331e] rounded-full py-3 px-7 my-2 md:my-0">Rating :  {wish.rating}</h1>
                                <Link to={`/book/${wish.bookId}`}><button className="btn bg-[#23BE0A] border-[#23BE0A] text-lg mr-4 text-[#FFFFFF] rounded-full hover:bg-[#47d6318a]  px-6 ">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookWishList;