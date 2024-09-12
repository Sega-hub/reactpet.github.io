import React from "react";
import styles from './ShopCard.module.css';
import photo from './lamp.jpg'


function ShopCard({cardInfo}) {   

    return(               
        <div className={styles.cardContainer}>
           {cardInfo.map((card, i) => {
             return <div className={styles.card} key={i+" cardKey"}>
                <div className={styles.picture}>
                    <img src={card.img} className={styles.photo}/>
                </div>

                <div className={styles.discription}>
                    <div className={styles.title}> {card.brand} </div>
                    <div className={styles.subtitle}> {card.title} </div>
                    <div className={styles.price}> Price {card.price} {card.currency}</div>
                    <div className={styles.productDiscription}> 
                        <p>{card.description} </p>
                        <p>{card.descriptionFull}</p>
                    </div>  
                    <div className={styles.move}>
                        <button className={styles.button}> Buy </button>
                        <button className={styles.button}> Add to card </button>  
                    </div>
                </div>
            </div>
           })}
        </div>
    );
}

export default ShopCard;