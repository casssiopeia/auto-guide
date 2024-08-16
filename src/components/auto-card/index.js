import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
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
        navigate(`/details/${model}/${year}`);
    }
    
    return (
        <div className={styles.card}>
            <div onClick={cardClicked}>
                <img className={styles.img} src={picture} alt={model} />
                <h2>{brand} {model}</h2>
                <p>{year} Год</p>
                <p>Объём двигателя: {engine.toFixed(1)} л</p>
                <p>Средняя цена: {price} $</p>
            </div>
            <div className={styles.btnWrapper}>
                <Tooltip id="favorites" />
                <span 
                    data-tooltip-id="favorites" 
                    data-tooltip-content="Избранное" 
                    data-tooltip-place="top"
                >
                    { bookmarked ? (
                        <BookmarkOutlined 
                            style={{fontSize: 40}} 
                            htmlColor="#FFD82B" 
                            className={styles.bookmark} 
                            onClick={toggleBookmark} 
                        />
                    ) : (
                        <BookmarkBorderOutlined 
                            style={{fontSize: 40}} 
                            className={styles.bookmark} 
                            onClick={toggleBookmark} 
                        />
                    ) }
                </span>
                <Tooltip id="compare" />
                <span 
                    data-tooltip-id="compare" 
                    data-tooltip-content="Сравнение" 
                    data-tooltip-place="top"
                >
                    <Button car={{ picture, brand, model, year, price, engine, id, ...restProps }} isCarInCompare={compared} />
                </span>
            </div>
        </div>
    )
}