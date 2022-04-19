import React from 'react'
import useDropdown from '../../Hooks/useDropdown'
import { GLOBAL } from '../../Config/global'

const Tweet = ({ interaction, account, user, profile_picture, tweet, comments, retweets, likes, time, share }) => {
    const { node, open, setOpen } = useDropdown()

    return (
        <div className="tweet">
            {interaction && (
                <div className="tweet__interaction">
                    <i className="fas fa-retweet tweet__interaction__i"></i><p className="tweet__interaction__p">{interaction}</p>
                </div>
            )
            }
            <div className="tweet__content">
                <div className="tweet__content__image">
                    <img className="tweet__content__image__img" src={profile_picture} alt={profile_picture} width={70} />
                </div>
                <div className="tweet__content__info">
                    <div className="tweet__content__info__account">
                        <div className="tweet__content__info__account__user">
                            <p className="tweet__content__info__account__p"><span className="tweet__content__info__account__p__span">{account}</span>{user} &#183;</p><p className="tweet__content__info__account__p tweet__content__info__account__p--time">{time}</p>
                        </div>
                        <i ref={node} onClick={(e) => setOpen(!open)} className="fas fa-chevron-down tweet__content__info__account__i"></i>
                        {
                            open && (
                                <div className="tweet__content__info__account__dropdown">
                                    <ul className="tweet__content__info__account__dropdown__ul">
                                        <li className="tweet__content__info__account__dropdown__ul__li"><i className="far fa-frown tweet__content__info__account__dropdown__ul__li__i"></i>{GLOBAL.TWEET.DROPDOWN_TWEET_IS_NOT_HELPFUL}</li>
                                        <li className="tweet__content__info__account__dropdown__ul__li"><i className="fas fa-code tweet__content__info__account__dropdown__ul__li__i"></i>{GLOBAL.TWEET.DROPDOWN_EMBED_TWEET}</li>
                                        <li className="tweet__content__info__account__dropdown__ul__li"><i className="fas fa-user-plus tweet__content__info__account__dropdown__ul__li__i"></i>{GLOBAL.TWEET.DROPWDOWN_FOLLOW} {user}</li>
                                        <li className="tweet__content__info__account__dropdown__ul__li"><i className="fas fa-volume-mute tweet__content__info__account__dropdown__ul__li__i"></i>{GLOBAL.TWEET.DROPDOWN_MUTE} {user}</li>
                                        <li className="tweet__content__info__account__dropdown__ul__li"><i className="fas fa-ban tweet__content__info__account__dropdown__ul__li__i"></i>{GLOBAL.TWEET.DROPDOWN_BLOCK} {user}</li>
                                        <li className="tweet__content__info__account__dropdown__ul__li"><i className="far fa-flag tweet__content__info__account__dropdown__ul__li__i"></i>{GLOBAL.TWEET.DROPDOWN_REPORT}</li>
                                    </ul>
                                </div>
                            )}
                    </div>

                    <div className="tweet__content__info__tweet">
                        <p>{tweet}</p>
                    </div>

                    <div className="tweet__content__info__actions">
                        <div className="tweet__content__info__actions__comment">
                            <i className="far fa-comment tweet__content__info__actions__comment__i"></i><p className="tweet__content__info__actions__comment__p">{comments}</p>
                        </div>
                        <div className="tweet__content__info__actions__retweet">
                            <i className="fas fa-retweet tweet__content__info__actions__retweet__i"></i><p className="tweet__content__info__actions__retweet__p">{retweets}</p>
                        </div>
                        <div className="tweet__content__info__actions__heart">
                            <i className="far fa-heart tweet__content__info__actions__heart__i"></i><p className="tweet__content__info__actions__heart__p">{likes}</p>
                        </div>
                        <div className="tweet__content__info__actions__share">
                            <i onClick={share} className="fas fa-share tweet__content__info__actions__share__i"></i><p className="tweet__content__info__actions__share__p"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
