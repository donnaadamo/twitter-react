import React from 'react'

const SearchAccounts = ({ user }) => {
    return (
        <div className="searchbar__dropdown__accounts-container__account-search">
            <div className="searchbar__dropdown__accounts-container__account-search__profile-picture">
                <img className="searchbar__dropdown__accounts-container__account-search__profile-picture__img" src={user.url} alt={user.url} width={50} />
            </div>
            <div className="searchbar__dropdown__accounts-container__account-search__account">
                <span className="searchbar__dropdown__accounts-container__account-search__account__span">{user.name.substring(0, 20)}</span>
                <p className="searchbar__dropdown__accounts-container__account-search__account__p">{user.account}</p>
            </div>
        </div>
    )
}

export default SearchAccounts
