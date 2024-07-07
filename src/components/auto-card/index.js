import React, { useState } from "react";
import { Button } from "../button";
import styles from "./index.module.css";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import { BookmarkOutlined } from "@mui/icons-material";
import { colors } from "../../constants/colors";

export const AutoCard = ({
  brand,
  model,
  year,
  price,
  picture,
  onCardClick,
  ...restProps
}) => {
  const [isBookmarked, setIsBookmarked] = useState(true);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <div
        onClick={() =>
          onCardClick({
            brand,
            model,
            year,
            price,
            picture,
            ...restProps,
          })
        }
      >
        <img className={styles.img} src={picture} alt={brand} />
        <h2>
          {brand} {model}
        </h2>
        <p>{year} Год</p>
        <p>Средняя цена: {price} $</p>
      </div>
      <div className={styles.btnWrapper}>
        {isBookmarked ? (
          <BookmarkBorderOutlined
            style={{ fontSize: 40 }}
            className={`${styles.bookmark}`}
            onClick={toggleBookmark}
          />
        ) : (
          <BookmarkOutlined
            style={{ fontSize: 40 }}
            htmlColor={colors.primary}
            className={`${styles.bookmark}`}
            onClick={toggleBookmark}
          />
        )}
        <Button onClick={() => {}} />
      </div>
    </div>
  );
};

// TODO: Добавить оценку
