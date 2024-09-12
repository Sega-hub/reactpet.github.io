import React from "react";
import styles from "./MessageHistory.module.css";

function MessageHistory({data}) {

    return(
        <div className={styles.main}>
            <ul className={styles.allMessages}>
                {
                    data.map(function(item, i) {
                        switch( item.type) {
                            case "response":
                               return <li className={styles.foreignMessage} key={i+" response"}>
                                <div className={styles.massagesData}>
                                    <span className={styles.messageName}>{item.from.name}</span>
                                    <span className={styles.messageTime}>{item.time}</span>
                                </div>
                                <div className={styles.message}>{item.text}</div>
                            </li>
                                break;
                            case "message":
                                return <li className={styles.myMessage} key={i+" message"}>
                                    <div className={styles.massagesData}>
                                        <span className={styles.messageName}>{item.from.name}</span>
                                        <span className={styles.messageTime}>{item.time}</span>
                                    </div>
                                    <div className={styles.message}>{item.text}</div>
                                </li>
                                break;
                            case "typing":
                                return <li className={styles.foreignMessage} key={i+" typing"}>
                                <div className={styles.massagesData}>
                                    <span className={styles.messageName}>{item.from.name}</span>
                                    <span className={styles.messageTime}>{item.time}</span>
                                </div>
                                <div className={styles.message}>***{item.type}***</div>
                            </li>
                                break;
                            default: console.log( "Нет таких значений" );
                        }
                    })
                }
            </ul>          
        </div>
    );
}

export default MessageHistory;