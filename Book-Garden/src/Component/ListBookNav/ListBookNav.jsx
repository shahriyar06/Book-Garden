// import { Link, NavLink } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListBookNav = () => {
    return (
        <div>
            <div className="flex gap-6 mb-10 text-xl ">
                {/* <div role="tablist" className="tabs tabs-lifted justify-start flex">
                    <Link><input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" /></Link>
                    <Link to='listedbooks/wishlist'><input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked /></Link>
                </div> */}
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Book" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><ReadBook></ReadBook></div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><WishlistBook></WishlistBook></div>
                </div>
                {/* <NavLink to=''>Read Books</NavLink>
                <NavLink to='listedbooks/wishlist'>Wishlist Books</NavLink> */}
                {/* <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" className="tab">Tab 1</a>
                    <a role="tab" className="tab tab-active">Tab 2</a>
                    <a role="tab" className="tab">Tab 3</a>
                </div> */}
            </div>
        </div>
    );
};

export default ListBookNav;