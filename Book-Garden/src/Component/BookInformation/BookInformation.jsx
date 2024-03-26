import { useLoaderData, useParams } from "react-router-dom";

const BookInformation = () => {
    const book = useLoaderData();
    const {bookId} = useParams();
    const IdInt = parseInt(bookId)
    const books = book.find(books => books.bookId === IdInt);
    // const {tags} = books;
    console.log(books);
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2 rounded-3xl p-1">
                    <img src={books.image} className="rounded-3xl" alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col">
                    <h1 className="text-3xl font-bold mb-5">{books.bookName}</h1>
                    <h1 className="text-xl">By : {books.author}</h1>
                    <hr className="border-[#1313132f] border-t-2 my-4" />
                    <h2 className="text-lg">{books.category}</h2>
                    <hr className="border-[#1313132f] border-t-2 my-4" />
                    <p className="text-base mb-4 flex-grow"><span className="text-lg font-semibold">Review :</span> {books.review}</p>
                    {/* <div className="flex gap-3">
                        {
                                tags.map((tags , idx) => <span className='text-[#23BE0A] bg-[#22be0a0e] py-2 px-4 rounded-full' key={idx} ><h1> {tags}</h1></span>)
                        }
                    </div> */}
                    <hr className="border-[#1313132f] border-t-2 mt-5 mb-4" />
                    <div>
                        <table className="table-auto mb-6">
                            <tbody>
                                <tr>
                                    <td className=" text-[#222222b3] pr-12
                                    ">Number of Pages: </td>
                                    <td className="text-[#222222b3]"> {books.totalPages} </td>
                                </tr>
                                <tr>
                                    <td className=" text-[#222222b3] pr-12
                                    ">Publisher: </td>
                                    <td className="text-[#222222b3]">{books.publisher} </td>
                                </tr>
                                <tr>
                                    <td className=" text-[#222222b3] pr-12
                                    ">Year of Publishing:</td>
                                    <td className="text-[#222222b3]">{books.yearOfPublishing} </td>
                                </tr>
                                <tr>
                                    <td className="text-[#222222b3] pr-12
                                    ">Rating: </td>
                                    <td className="text-[#222222b3]">{books.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookInformation;