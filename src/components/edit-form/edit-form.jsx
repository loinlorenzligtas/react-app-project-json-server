import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditForm = ({
    editAnimeModal,
    setEditAnimeModal,
    editAnimeData,
    setEditAnimeData
}) => {
    const [data, setData] = useState([]);

    const refreshAnime = () => {
        axios
            .get("https://api.jikan.moe/v3/user/nekomata1037/animelist/all")
            .then(_response => {
                setData(data);
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    useEffect(() => {
        refreshAnime();
        setEditAnimeModal(false);
        setEditAnimeData({ mal_id: "", title: "", rating: "" });
    }, []);

    const closeModal = () => {
        setEditAnimeModal(false);
    }

    const updateAnime = () => {
        const { title, rating } = editAnimeData;
        axios
            .put(
                "https://api.jikan.moe/v3/user/nekomata1037/animelist/all" +
                editAnimeData.mal_id,
                {
                    title,
                    rating
                }
            )
            .then(_response => {
                refreshAnime();
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    const handleChangeEditTitle = e => {
        editAnimeData.title = e.target.value;
        setEditAnimeData({ editAnimeData });
    };

    const handleChangeEditRating = e => {
        editAnimeData.rating = e.target.value;
        setEditAnimeData({ editAnimeData });
    };

    return (
        <div className="container">
            {editAnimeModal ? <div className="modal is-active">
                <div class="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Edit anime</p>
                    </header>
                    <div className="modal-card-body">
                        <div className="field">
                            <label className="label" for="title">Title</label>
                            <input className="input"
                                id="title"
                                value={editAnimeData.title}
                                onChange={handleChangeEditTitle}
                            />
                        </div>
                        <div className="field">
                            <label className="label" for="rating">Rating</label>
                            <input className="input"
                                id="rating"
                                value={editAnimeData.rating}
                                onChange={handleChangeEditRating}
                            />
                        </div>
                    </div>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={updateAnime}>
                            Update Anime
                    </button>
                        <button className="button is-warning" onClick={closeModal}>
                            Cancel
                        </button>
                    </footer>
                </div>
            </div> : null}
        </div>
    )
}

export default EditForm;