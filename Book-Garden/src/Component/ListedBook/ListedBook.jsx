import { IoIosArrowDown } from "react-icons/io";
import ListBookNav from "../ListBookNav/ListBookNav";
import { useState } from "react";

const ListedBook = () => {
    const [sortType, setSortType] = useState('');

    const handleSorting = (e) => {
        const selectedSortType = e.target.innerHTML;
        setSortType(selectedSortType);
        console.log(selectedSortType);
        // Perform sorting or any other action based on the selected sort type
    }

    return (
        <div>
            <div className="bg-[#1313132f] p-7 rounded-2xl mb-8">
                <h1 className="text-4xl font-bold text-center text-[#131313]">Books</h1>
            </div>
            <div className="text-center mb-12">
                <details className="dropdown">
                    <summary className="m-1 btn items-center text-lg bg-[#22be0ad2] border-[#2beb0e] hover:bg-[#41c92ccf] text-[#FFFFFF]">Sort By  <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={handleSorting}>Rating</a></li>
                        <li><a onClick={handleSorting}>Number of pages</a></li>
                        <li><a onClick={handleSorting}>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <ListBookNav sortType={sortType}></ListBookNav>
            </div>
        </div>
    );
};

export default ListedBook;
