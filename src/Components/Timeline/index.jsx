import React from 'react'
import { Tweet } from '..'

const Timeline = ({ tweets }) => {
    return (
        <div className="timeline">
            {
                tweets.map((t) => (
                    <Tweet
                        interaction={t.interaction}
                        account={t.account}
                        user={t.user}
                        profile_picture={t.profile_picture}
                        tweet={t.tweet}
                        comments={t.comments}
                        retweets={t.retweets}
                        likes={t.likes}
                        time={t.time}
                        share={t.share}
                        key={t.id()}
                    />
                ))
            }

        </div>
    )
}

export default Timeline
