import React, { useState, Fragment } from 'react';
import Anime from '../anime/anime';
import SearchAnime from '../search-anime/search-anime';

const AnimeList = () => {
    const [data, setData] = useState([]);
    const [filterAnime, setFilterAnime] = useState([]);

    return (
        <Fragment>
            <SearchAnime
                filterAnime={filterAnime}
                setFilterAnime={setFilterAnime}
                data={data}
                setData={setData}
            />
            <table className="table is-bordered is-hoverable is-fullwidth">
                <thead key="thead">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <Anime
                    filterAnime={filterAnime}
                    setFilterAnime={setFilterAnime}
                    data={data}
                    setData={setData}
                />
            </table>
        </Fragment>
    )
}

export default AnimeList;