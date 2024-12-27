import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/selectors";
import { closeModal } from "../../store/comparedCarsSlice";
import { Close } from "@mui/icons-material";
import { WarningOutlined } from "@mui/icons-material";
import styles from "./index.module.css";

export const Warning = () => {

    const dispatch = useDispatch();
    const showed = useSelector(state => showModal(state));

    if (!showed) {

        return null;
    }

    const onModalClose = () => {

        dispatch(closeModal());
    }

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.warning}>
                <div className={styles.close}>
                    <WarningOutlined className={styles.icon} style={{ fontSize: 30 }} />
                    <p>Внимание</p>
                    <Close className={styles.closeBtn} style={{fontSize: 30}} onClick={onModalClose} />
                </div>
                <div className={styles.main}>
                    <p>Вы можете сравнить только 3 авто!</p>
                </div>
            </div>
        </>
    );
}