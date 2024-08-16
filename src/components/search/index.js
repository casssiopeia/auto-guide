import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { SearchOutlined } from "@mui/icons-material";

export const Search = () => {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef();

    const handleSearch = useCallback(() => {

        if (query.trim()) {

            navigate(`/search?brand=${query}`);

            setQuery("");
        }
    }, [navigate, query]);

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                handleSearch();
            }
        }

        const inputElement = inputRef.current;

        if (inputElement) {
            inputElement.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            
            if (inputElement) {
                inputElement.removeEventListener("kewdown", handleKeyDown);
            }
        }
    }, [handleSearch]);

    return (
        <>
            <div className={styles.searchField}>
                <label>Поиск</label>
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="Введите бренд" 
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
    );
}