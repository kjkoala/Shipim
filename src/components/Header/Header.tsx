import { Search } from "../Search/Search"
import { Filters } from "./Filters/Filters";

import './Header.scss';

export const Header = () => {
    return <div className="header">
            <div className="header__item header__search">
                <Search />
            </div>
            <Filters />
    </div>
}