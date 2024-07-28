import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { SearchOutlined } from "@mui/icons-material";

export const Search = () => {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?brand=${query}`);
        }

        setQuery("");
    }

    return (
        <>
            <div className={styles.searchField}>
                <label>Поиск</label>
                <input 
                    type="text" 
                    placeholder="Ваш запрос" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchOutlined 
                    className={`${styles.search}`} 
                    style={{fontSize: 32}} 
                    onClick={handleSearch}
                />
            </div>
        </>
    )
}