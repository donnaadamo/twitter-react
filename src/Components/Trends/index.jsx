import React, { useContext } from 'react'
import { TrendContext } from '../../Store/trendContext';
import { GLOBAL } from '../../Config/global'
import { Trend } from '..'

const Trends = () => {
    const [ trend ] = useContext(TrendContext)

    const randomId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="trends">
            <div className="trends__title">
                <h2>{GLOBAL.TRENDS.TRENDS_FOR_YOU}</h2>
                <i className="fas fa-cog trends__title__i"></i>
            </div>

            {
                trend.slice(0, 5).map(t => (
                    <Trend
                        key={randomId()}
                        position={t.position}
                        hashtag={t.hashtag}
                        tweets={t.tweets}
                        country={t.country}
                        description={t.description}
                        url={t.url}
                        isNews={t.isNews}
                    />
                ))
            }

            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">{GLOBAL.TRENDS.SHOW_MORE}</a>
            </div>
        </div>
    )
}

export default Trends
