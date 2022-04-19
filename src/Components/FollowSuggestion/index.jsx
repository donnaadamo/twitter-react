import React from 'react'
import { Button } from '..'

const FollowSuggestion = ({ user }) => {
    return (
        <div className="suggestions__follow-suggestion">
            <div className="suggestions__follow-suggestion__profile-picture">
                <img className="suggestions__follow-suggestion__profile-picture__img" src={user.url} alt={user.url} width="50" />
            </div>
            <div className="suggestions__follow-suggestion__flex">
                <div className="suggestions__follow-suggestion__flex__account">
                    <p className="suggestions__follow-suggestion__flex__account__p">{user.name}</p>
                    <span className="suggestions__follow-suggestion__flex__account__span">{user.account}</span>
                </div>
                <div className="suggestions__follow-suggestion__flex__follow">
                    <Button className="suggestions__follow-suggestion__flex__follow__button" description="Seguir" />
                </div>
            </div>
        </div>
    )
}

export default FollowSuggestion
