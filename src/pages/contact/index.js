import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function ContactPage() {
  return (
    <Layout>
      {/* <main className={clsx(styles.heroBanner)}>
        <div className={clsx(styles.overlayContainer)}>
          <img src="./img/contactBanner.png" alt="Contact Banner" className={clsx(styles.bannerImage)} />
          <div className={clsx(styles.overlayText)}>Contact.</div>
        </div>
      </main> */}
      <main>
        <div className={clsx(styles.parentContainer)}>
          <div className={clsx(styles.contactContainer)}>
            <h1 className={clsx(styles.pageTitle)}>Contact.</h1>
            <p className={styles.subTitle}>Want to get in touch? Feel free to drop me message</p>          
            <div className={styles.contactContainerSplit}>

               <form className={styles.contactForm}
                action="https://formspree.io/f/mnndbpqb"
                // class="fs-form"
                target="_top"
                method="POST"
                >
                <div className={styles.contactEntrySplit}>
                    <input type="text" placeholder="Name*" id="name" name="name" required/>
                    <input type="email" placeholder='Email*' id="email" name="email" required />
                </div>
                <textarea id="message" placeholder="Your message*" name="message" rows="4" required></textarea>
                <label className={styles.formConsent}>
                  <input type="checkbox" required />
                  By checking this box, I consent to the processing of my personal data for the purpose of responding to my message. 
                  My data is handled securely via <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree</a> and is protected under the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                </label>
                <button type="submit" className={`${styles.subscribeButton} ${styles.submitButton}`}>Send <i class="fa-regular fa-envelope"></i></button>       

      
              </form>
            </div>        
              
          </div>
        </div>
      </main>
    </Layout>
  );
}


            {/* <div className={styles.contactContainerSplit}>

              <form className={styles.contactForm}>

                <p>Sign up for <strong>TomsTimeCapsule</strong> newsletter to get notified of the latest Journal entry <i class="fa-regular fa-pen-to-square"></i>.</p>

                <div className={styles.contactEntrySplit}>

                  <div className={styles.contactEntryGroup}>
                    <input type="text" placeholder='Name*' id="name" name="name" required />
                  </div>
                  <div className={styles.contactEntryGroup}>
                    <input type="email" placeholder='Email*' id="email" name="email" required />
                  </div>
                  
                </div>


                <button type="submit" className={styles.subscribeButton}>Subscribe <i class="fa-regular fa-bell"></i></button>      
                
                <h2 className={styles.subsubtitle}> <i class="fa-regular fa-lightbulb"></i> <strong> Who is this for, and why subscribe? </strong></h2>
                <p>If, like me, you're searching for a more <strong>authentic connection</strong> then this is the right place for you. </p>
                
                <p className={styles.textCentering}>The content of this Journal focuses on topics such as <strong>travel, gear, and photography</strong>... topics you will likely find in thousands of YouTube videos and other great blogs that do a great job. However, I hope to differentiate myself here by delivering content that expands on some of the surrounding aspects of travel and lifestyle photography, particularly with respect to <strong>AI, social media, and technology ethics</strong>, for example. These are discussions that don't necessarily go hand-in-hand with tailoring to an algorithm to push trends.</p>
                
                <p>If this sounds like something you are interested in, subscribe and follow along for the journey.</p>
              
              </form>

            </div> */}

            {/* <h1 className={styles.subTitle}>Contact.</h1> */}