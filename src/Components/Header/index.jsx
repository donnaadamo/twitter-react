import React from 'react';
import { GLOBAL } from '../../Config/global';
import { HeaderDropdownIcon } from '../../Resources/Images/index';
import useDropdown from '../../Hooks/useDropdown'

const Header = () => {
    const { node, open, setOpen } = useDropdown();

    return (
        <div className="header">
            <span className="header__text">
                {GLOBAL.HEADER.HEADER_HOME}
            </span>
            <span className="header__icon" ref={node} onClick={(e) => setOpen(!open)}>
                <i className="far fa-star"></i>
                {
                open && (<div className="header__dropdown">
                    <div className="header__dropdown__top">
                        <img className="header__dropdown__top__img" src={HeaderDropdownIcon} alt="" />
                        <h3 className="header__dropdown__top__title">{GLOBAL.HEADER.DROPDOWN_TOP}</h3>
                    </div>
                    <div className="header__dropdown__bottom">
                        <span className="header__dropdown__bottom__span">
                            <i className="fas fa-exchange-alt header__dropdown__bottom__span__icon"></i>
                            <div>
                                <p className="header__dropdown__bottom__span__p">{GLOBAL.HEADER.DROPDOWN_SPAN_1}</p>
                                <p className="header__dropdown__bottom__span__info">{GLOBAL.HEADER.DROPDOWN_SPAN_1_INFO}</p>
                            </div>
                        </span>
                        <span className="header__dropdown__bottom__span">
                            <i className="fas fa-cog header__dropdown__bottom__span__icon"></i>
                            <p className="header__dropdown__bottom__span__p">{GLOBAL.HEADER.DROPDOWN_SPAN_2}</p>
                        </span>
                    </div>
                </div>
            )}
            </span>
        </div>
    )
}

export default Header;
