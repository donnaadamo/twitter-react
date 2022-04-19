import React from 'react'
import { GLOBAL } from '../../Config/global'

const SearchHashtags = ({ trend }) => {
    return (
        <div className="searchbar__dropdown__hashtag-search">
            <p className="searchbar__dropdown__hashtag-search__p">{trend.hashtag}</p>
            {trend.isTrend && <span className="searchbar__dropdown__hashtag-search__span">{GLOBAL.SEARCHBAR.TRENDS}</span>}
        </div>
    )
}

export default SearchHashtags
