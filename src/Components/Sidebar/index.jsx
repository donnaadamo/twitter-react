import React, { useState, useEffect } from 'react';
import Button from '../Button';

const Sidebar = ({ array }) => {
    const [fetchData, setFetchData] = useState();
    const fetchingData = array;

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        if (fetchingData.length === 0) {
            setFetchData(
                <span>No hay datos</span>
            )
        } else {
            setFetchData(
                fetchingData.map((i) => (
                    <Button className={i.className} description={i.description} src={i.src} imgClassname={i.imgClassname} key={randomId()}/>
                ))
            )
        }
    }

    const randomId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="sidebar">
            <div className="sidebar__box">
                {fetchData}
            </div>
        </div>
    )
}

export default Sidebar;
