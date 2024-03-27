import { IoIosArrowDown } from "react-icons/io";
import { Outlet } from "react-router-dom";
import ListBookNav from "../ListBookNav/ListBookNav";

const ListedBook = () => {
    return (
        <div>
            <div>
                <div className="bg-[#1313132f] p-7 rounded-2xl mb-8">
                    <h1 className="text-4xl font-bold text-center text-[#131313]">Books</h1>
                </div>
                <div className="text-center mb-12">
                    <details className="dropdown">
                        <summary className="m-1 btn items-center text-lg bg-[#22be0ad2] border-[#2beb0e] hover:bg-[#41c92ccf] text-[#FFFFFF]">Sort By  <IoIosArrowDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Rating</a></li>
                            <li><a>Number of pages</a></li>
                            <li><a>Publisher year</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    <ListBookNav></ListBookNav>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;