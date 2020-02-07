import React, { useState } from 'react';
import axios from 'axios';

const AddButton = () => {
    const [data, setData] = useState([]);
    const [newAnimeModal, setNewAnimeModal] = useState(false);
    const [newAnimeData, setNewAnimeData] = useState({ title: '', rating: '' });

    const handleChangeTitle = e => {
        newAnimeData.title = e.target.value;
        setNewAnimeData({ newAnimeData });
    };

    const handleChangeRating = e => {
        newAnimeData.rating = e.target.value;
        setNewAnimeData({ newAnimeData });
    };

    const toggleNewAnimeModal = () => {
        console.log(newAnimeModal)
        setNewAnimeModal(true);

    };

    const closeModal = () => {
        setNewAnimeModal(false);
    }

    const addAnime = () => {
        console.log(newAnimeData);
        axios
            .post(
                "https://api.jikan.moe/v3/user/nekomata1037/animelist/all",
                newAnimeData
            )
            .then(response => {
                data.push(response.data);
                setData(data);
                setNewAnimeData({
                    title: '',
                    rating: ''
                });
                setNewAnimeModal(false);
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    return (
        <div className="container">
            <button className="button is-info is-normal" onClick={toggleNewAnimeModal}>
                Add Anime
            </button>
            {newAnimeModal ? <div className="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add a new anime</p>
                        <button class="delete" aria-label="close" onClick={closeModal}></button>
                    </header>
                    <div className="modal-card-body">
                        <div className="field">
                            <label className="subtitle">Title</label>
                            <div className="control">
                                <input className="input"
                                    id="title"
                                    value={newAnimeData.title}
                                    onChange={handleChangeTitle}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="rating">Rating</label>
                            <div className="control">
                                <input className="input" id="rating"
                                    value={newAnimeData.rating}
                                    onChange={handleChangeRating}
                                />
                            </div>
                        </div>
                    </div>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={addAnime}>
                            Add Anime
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

export default AddButton;