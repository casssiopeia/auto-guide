import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import styles from "./index.module.css";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import { BookmarkOutlined } from "@mui/icons-material";
import { addBookmark, removeBookmark } from "../../store/bookmarkSlice";
import { isBookmarked } from "../../store/selectors";
import { isCarInCompare } from "../../store/selectors";

export const AutoCard = ({ 
    picture, 
    brand, 
    model, 
    year, 
    price,
    engine,
    id,
    ...restProps 
}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const bookmarked = useSelector(state => isBookmarked(state, id));
    const compared = useSelector(state => isCarInCompare(state, id));

    const toggleBookmark = () => {

        if (bookmarked) {
            dispatch(removeBookmark(id));
        } else {
            dispatch(addBookmark({ picture, brand, model, year, price, engine, id, ...restProps }));
        }
    }

    const cardClicked = () => {
        navigate(`/details/${model}`);
    }
    
    return (
        <div className={styles.card}>
            <div onClick={cardClicked}
            >
                <img className={styles.img} src={picture} alt={model} />
                <h2>{brand} {model}</h2>
                <p>{year} Год</p>
                <p>Средняя цена: {price} $</p>
            </div>
            <div className={styles.btnWrapper}>
                { bookmarked ? (
                    <BookmarkOutlined style={{fontSize: 40}} htmlColor="#fff566" className={styles.bookmark} onClick={toggleBookmark} />
                ) : (
                    <BookmarkBorderOutlined style={{fontSize: 40}} className={styles.bookmark} onClick={toggleBookmark} />
                ) }
                <Button car={{ picture, brand, model, year, price, engine, id, ...restProps }} isCarInCompare={compared} />
            </div>
        </div>
    )
}

// TODO: Добавить оценку