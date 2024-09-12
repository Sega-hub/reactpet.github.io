import React from "react";
import styles from "./Portfolio.module.css";
import { useState } from "react";

function Portfolio({portfolio}) {
    
    let [project, setproject] = useState("All");   

    return(

        <div className={styles.container}>

         <div className={styles.categories}>
            <button onClick={() => setproject("All")}>All</button>
            <button onClick={() => setproject("Business Cards")}>Business</button>
            <button onClick={() => setproject("Flayers")}>Flayers</button>
            <button onClick={() => setproject("Websites")}>Websites</button>
         </div>


         <div className={styles.card}> 
        {

            portfolio.map(function(item, i) {

                         
                if (project === "Business Cards") {

                   if (item.category === "Business Cards") {
                        return <div className={styles.img} key={item+i}>
                            <img src={item.img}/>
                        </div>
                   }

                }

                if (project === "Flayers") {

                    if (item.category === "Flayers") {
                         return <div className={styles.img} key={item+i}>
                             <img src={item.img}/>
                         </div>
                    }
 
                 }

                 if (project === "Websites") {

                    if (item.category === "Websites") {
                         return <div className={styles.img} key={item+i}>
                             <img src={item.img}/>
                         </div>
                    }
 
                 }

                 if (project === "All") {

                     return <div className={styles.img} key={item+i}>
                        <img src={item.img}/>
                    </div>
 
                 }

              

            })

        } 
         </div>
        
        </div>
    );
}

export default Portfolio;