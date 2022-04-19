import React from 'react';
import { Button, Textarea } from '../index'
import { GLOBAL } from '../../Config/global';

const NewTweet = () => {
    const handleKey = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    return (
        <div className="newtweet">
            <div className="newtweet__header">
                <img src="https://pbs.twimg.com/profile_images/1158855492665577479/T6nP2Wrl_200x200.jpg" alt="profilePic" className="newtweet__header__pic" />
                <Textarea handleKeyDown={(e) => handleKey(e)} handleKeyUp={(e) => handleKey(e)} type="text" name="newtweet" className="newtweet__header__textarea" placeholder="¿Qué está pasando?" />
            </div>
            <div className="newtweet__bottom">
                <div className="newtweet__bottom__left">
                    <Button className="newtweet__bottom__left__button" src="" imgClassname="far fa-image newtweet__bottom__left__icons" />
                    <Button className="newtweet__bottom__left__button" src="" imgClassname="fas fa-image newtweet__bottom__left__icons" />
                    <Button className="newtweet__bottom__left__button" src="" imgClassname="fas fa-poll-h newtweet__bottom__left__icons" />
                    <Button className="newtweet__bottom__left__button" src="" imgClassname="far fa-smile newtweet__bottom__left__icons" />
                </div>
                <div className="newtweet__bottom__right">
                    <i className="far fa-circle newtweet__bottom__right__icons newtweet__bottom__right__icons--circle"></i>
                    <span className="newtweet__bottom__right__span">|</span>
                    <Button className="newtweet__bottom__right__button" src="" imgClassname="fas fa-plus-circle newtweet__bottom__right__icons newtweet__bottom__right__icons--plus" />
                    <Button className="newtweet__bottom__right__button newtweet__bottom__right__button--twit" description={GLOBAL.SIDEBAR.BUTTON_TWIT} />
                </div>
            </div>
        </div>
    )
}

export default NewTweet;
