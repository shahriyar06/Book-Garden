import { Link } from "react-router-dom";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div>
            {/* header part */}
            <div className="mb-16">
                <div className=" bg-[#c9c6c64f] rounded-3xl py-8">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:w-10/12 mx-auto">
                        <img src="https://i.ibb.co/HpwdqKD/Coffee-Table-Book-Gifts-for-Christmas-2019-Eco-Friendly-Mom-Blog-Sustainable-Family-Influencer-2022.jpg" className="w-72 h-3/4 rounded-lg shadow-2xl" />
                        <div className="mt-6">
                            <h1 className="lg:text-6xl text-5xl font-bold mb-10">Books to <span className="text-violet-400">freshen up</span> your bookshelf ..</h1>
                            <Link to='/listedbooks'><button className="btn bg-[#23BE0A] border-[#23BE0A] text-base text-[#FFFFFF] hover:bg-[#2cd212]">View The List</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;