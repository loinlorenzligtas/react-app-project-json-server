import React, { useState } from 'react';

const SearchAnime = ({ data, setFilterAnime }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChangeAnime = e => {
        console.log(inputValue)
        setInputValue(e.target.value);
        if (e.target.value) {
            const filteredAnime = data.filter(anime =>
                anime.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilterAnime(filteredAnime);
        } else {
            setFilterAnime(data);
        }
    }

    return (
        <div class="search">
            <div class="field">
                <div class="control has-icons-left">
                    <input
                        class="input is-info is-rounded"
                        type="text"
                        placeholder="Search for an anime, e.g Naruto...."
                        style={{ width: '40%' }}
                        onChange={handleChangeAnime}
                        value={inputValue}
                    />
                    <span class="icon is-small is-left">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchAnime;