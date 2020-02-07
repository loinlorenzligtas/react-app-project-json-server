import React, { useState, useEffect, Fragment } from 'react';
import EditForm from '../edit-form/edit-form';
import axios from 'axios';

const Anime = ({ filterAnime, setFilterAnime, setData }) => {
    const [editAnimeData, setEditAnimeData] = useState({ mal_id: '', title: '', rating: '' });
    const [editAnimeModal, setEditAnimeModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://api.jikan.moe/v3/user/nekomata1037/animelist/all'
            );
            setData(result.data.anime);
            setFilterAnime(result.data.anime);
        };
        fetchData();
    }, []);

    const refreshAnime = () => {
        const result = axios
            .get("https://api.jikan.moe/v3/user/nekomata1037/animelist/all")
            .then(_response => {
                setData(result.data.anime);
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    const deleteButtonClick = (mal_id) => {
        console.log(deleteButtonClick)
        axios
            .delete(
                "https://api.jikan.moe/v3/user/nekomata1037/animelist/all" + mal_id
            )
            .then(_response => {
                refreshAnime();
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    const editButtonClick = (mal_id, title, rating) => {
        console.log(editAnimeData)
        setEditAnimeData({ mal_id, title, rating });
        setEditAnimeModal(true)
    }

    return (
        <Fragment>
            <tbody>
                {filterAnime.map(anime => (
                    <tr>
                        <td>{anime.mal_id}</td>
                        <td>{anime.title}</td>
                        <td>{anime.rating}</td>
                        <td>
                            <button className="button is-success is-small" onClick={() => editButtonClick(anime.mal_id, anime.title, anime.rating)}>
                                Edit
                        </button>
                            <button className="button is-danger is-small" onClick={() => deleteButtonClick(anime.mal_id)}>
                                Delete
                        </button>

                        </td>
                    </tr>
                ))}
                <EditForm
                    setEditAnimeModal={setEditAnimeModal}
                    editAnimeModal={editAnimeModal}
                    editAnimeData={editAnimeData}
                    setEditAnimeData={setEditAnimeData}
                />
            </tbody>
        </Fragment>
    )
}

export default Anime;