import React from "react";
import styles from "./Stars.module.css";
import photo from "../ShopCard/lamp.jpg";

function Stars({ stars }) {

    return (
        stars.map((star, i) => {
            const starItems = [];
            for (let j = 0; j < star.rating; j++) {
                starItems.push(
                    <li key={"star-" + i + "-" + j}>
                        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                            <path d="M0 0h18v18H0z" fill="none"/>
                        </svg>
                    </li>
                );
            }

            return (
                <div className={styles.root} key={i}>
                    <div className={styles.filmCard}>
                        <div className={styles.picture}>
                            <img src={star.img} className={styles.photo} />
                        </div>

                        <div className={styles.discription}>
                            <h1 className={styles.name}> {star.title} </h1>
                            <p className={styles.tell}> {star.shortDiscription} </p>
                            <ul className={styles.reviews}>
                                Рейтинг зрителей {starItems}
                            </ul>
                            <p className={styles.fullDiscription}>
                                {star.fullDiscription}
                            </p>
                        </div>
                    </div>
                </div>
            );
        })
    );
}

export default Stars;
