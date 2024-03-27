import { NavLink } from "react-router-dom";

const ListBookNav = () => {
    return (
        <div>
            <div className="flex gap-6 mb-10 text-xl ">
                {/* <div role="tablist" className="tabs tabs-lifted justify-start flex">
                    <Link><input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" /></Link>
                    <Link to='listedbooks/wishlist'><input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked /></Link>
                </div> */}
                {/* <div role="tablist" className="tabs tabs-lifted justify-start">
                    <NavLink to='' role="tab" className="tab tab-active">Read Books</NavLink>
                    <NavLink to='listedbooks/wishlist' role="tab" className="tab tab-active">Wishlist Books</NavLink>
                </div> */}
                <NavLink to=''>Read Books</NavLink>
                <NavLink to='listedbooks/wishlist'>Wishlist Books</NavLink>
            </div>
        </div>
    );
};

export default ListBookNav;