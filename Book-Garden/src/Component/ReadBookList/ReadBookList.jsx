import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { GrUserManager } from "react-icons/gr";

const ReadBookList = () => {
    return (
        <div>
            <div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold mb-4">The Catcher in the Rye</h1>
                            <h1>By : Awlad Hossain</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className="flex gap-5">
                                <h1 className="text-lg flex items-center gap-3"><GrUserManager />  Publisher: Scribner</h1>
                                <h1 className="text-lg flex items-center gap-3"><HiOutlineDocumentChartBar />  Page 192</h1>
                            </div>
                            <hr className="border-[#1313132f] border-t-2 my-4"/>
                            <div className=" flex gap-8 items-center">
                                <h1 className="text-[#328EFF] bg-[#328eff20] rounded-full py-3 px-7">Category :  Classic</h1>
                                <h1 className="text-[#FFAC33] bg-[#ffad331e] rounded-full py-3 px-7 my-2 md:my-0">Rating :  4.5</h1>
                                <button className="btn bg-[#23BE0A] border-[#23BE0A] text-lg mr-4 text-[#FFFFFF] rounded-full  px-6 ">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookList;