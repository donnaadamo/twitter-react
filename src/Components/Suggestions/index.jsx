import React, { useContext } from 'react'
import { FollowSuggestion } from '..'
import { GLOBAL } from '../../Config/global'
import { UserContext } from '../../Store/userContext';

const Suggestions = () => {
    const [ user ] = useContext(UserContext)
    const randomId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    const renderSuggestions = (user) => {
        return (
            <FollowSuggestion user={user} key={randomId()} />
        )
    }

    return (
        <div className="suggestions">
            <div className="suggestions__title">
                <h2>{GLOBAL.SUGGESTIONS.WHO_TO_FOLLOW}</h2>
            </div>
            {
                user.slice(0, 3).map(u => (
                    renderSuggestions(u)
                ))
            }
            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">{GLOBAL.SUGGESTIONS.SHOW_MORE}</a>
            </div>
        </div>
    )
}

export default Suggestions
