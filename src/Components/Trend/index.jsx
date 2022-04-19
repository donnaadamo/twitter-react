import React from 'react'
import { GLOBAL } from '../../Config/global'

const Trend = ({ position, hashtag, tweets, country, description, url, isNews }) => {
    return (
        <div className="trends__trend" >
            <div className="trends__trend__content">
                <p className="trends__trend__content__flex__position">{position} <span className="trends__trend__content__position__span">&#183;</span> {GLOBAL.TRENDS.TRENDS}</p>
                <p className="trends__trend__content__hashtag">{hashtag}</p>
                {tweets && (
                    <p className="trends__trend__content__tweets">{tweets} {GLOBAL.TRENDS.TWEETS}</p>
                )
                }
            </div>
            {isNews && (
                <div className="trends__trend__news">
                    <div className="trends__trend__news__content">
                        <p className="trends__trend__news__content__p">{country}</p>
                        <span className="trends__trend__news__content__span">{description}</span>
                    </div>
                    <div className="trends__trend__news__image">
                        <img className="trends__trend__news__image__img" src={url} alt={url} width={100} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Trend
