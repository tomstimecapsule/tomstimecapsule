import React from "react";
import styles from './aboutMe.module.css'
import profileImg from '@site/static/img/robotham_profile.jpg'
import profileImg2 from '@site/static/img/robotham_profile_2.jpg'



export default function AboutMe() {
    return (
        <main>
              {/* <div className={styles.mainContainer}> */}
                <div className={styles.sectionContainer}>
                    <img src={profileImg2}></img>
                   <div className={styles.profileText}>
                        <h1 className={styles.pageTitle}>Welcome.</h1>
                        <div className={styles.paragraph}>
                            <p>My name is Tom — welcome to my photography journal.</p>
                        </div>
                        <div className={styles.paragraph}>
                            <p><strong>tomstimecapsule</strong> — <i>What's with the name?</i></p>
                            <p>The name is a reflection of my time, and where I spend my attention. Here, you'll find a collection of some of my favourite photos, along with journal entries sharing my thoughts and experiences about photography, travel, gear, and social media.</p>
                            <p>Check out my <a href="./blog/welcome" className="journal-link">Journal entry <i class="fa-regular fa-pen-to-square"></i> </a> if you want to read more.</p>           
                        </div>
                        <div className={styles.paragraph}>
                        <h3>Thanks for being here <i class="fa-regular fa-hand-peace"></i> </h3>       
                        </div>  
                        <div className={styles.buttonSep}>
                            <a className={styles.buttonLike} href="./blog">Journal <i class="fa-regular fa-pen-to-square"></i></a>    
                            <a className={`${styles.buttonLike} ${styles.subscribeButtonLike}`}href="./Contact">Contact <i class="fa-regular fa-bell"></i></a>    
                        </div>
                    </div>
                </div> 
            {/* </div> */}
        </main>
    )
} 