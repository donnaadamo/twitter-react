import React, { useState, useContext } from 'react'
import { Button, SearchAccounts } from '..'
import { UserContext } from '../../Store/userContext'
import { TrendContext } from '../../Store/trendContext'
import useDropdown from '../../Hooks/useDropdown'
import { GLOBAL } from '../../Config/global'
import SearchHashtags from '../SearchHashtags'

const SearchBar = () => {
    const [ user ] = useContext(UserContext)
    const [ trend ] = useContext(TrendContext)
    const [search, setSearch] = useState('')
    const { node, open, setOpen, isActive } = useDropdown()
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClose = () => {
        setSearch('')
    }

    const randomId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    const renderAccounts = (user) => {
        return (
            <SearchAccounts user={user} key={randomId()} />
        )
    }

    const renderHashtags = (trend) => {
        return (
            <SearchHashtags trend={trend} key={randomId()} />
        )
    }

    const filteredAccounts = user.filter(i => {
        return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || i.account.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    const filteredTrends = trend.filter(i => {
        return i.hashtag.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    return (
        <div ref={node} className="searchbar">
            <div className={`searchbar__search ${isActive}`} onClick={(e) => setOpen(!open)}>
                <i className="fas fa-search searchbar__search__i"></i>
                <input autoComplete="off" name="busqueda" value={search} onChange={handleChange} className="searchbar__search__input" type="text" placeholder="Buscar en Twitter" />
                {
                    search && isActive ? <Button className="searchbar__search__input__button" icon={<i onClick={() => handleClose()} className="fas fa-times-circle searchbar__search__input__button__i"></i>}></Button> : null
                }
            </div>
            {open && (
                <div className="searchbar__dropdown">
                    {
                        search === '' ?
                        <p className="searchbar__dropdown__p">{GLOBAL.SEARCHBAR.DROPTDOWN}</p>
                        : null
                    }
                    {
                        search ?
                        filteredTrends.slice(0, 3).map(i => {
                            return renderHashtags(i);
                        })
                        : null
                    }
                    <div className="searchbar__dropdown__accounts-container">
                        {
                            search ?
                            filteredAccounts.map(i => {
                                return renderAccounts(i);
                            })
                            : null
                        }
                    </div>
                    {
                        search &&
                        filteredAccounts ? <p className="searchbar__dropdown--go-to">{GLOBAL.SEARCHBAR.GO_TO}{search}</p>
                        : null
                    }
                </div>
            )}
        </div>
    )
}

export default SearchBar
