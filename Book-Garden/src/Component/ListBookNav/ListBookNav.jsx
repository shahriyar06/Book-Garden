import { useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListBookNav = ({ sortType }) => {
    const [active, setActive] = useState("read"); // State variable to track active tab

    const handleTabClick = (tabName) => {
        setActive(tabName);
    };

    return (
        <div>
            <div className="flex gap-6 mb-10 text-xl">
                <div role="tablist" className="tabs tabs-lifted">
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Read Book"
                        checked={active === "read"}
                        onChange={() => handleTabClick("read")}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <ReadBook sortType={sortType}></ReadBook>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Wish List"
                        checked={active === "wishlist"}
                        onChange={() => handleTabClick("wishlist")}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <WishlistBook sortType={sortType}></WishlistBook>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListBookNav;
