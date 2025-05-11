import * as React from "react";
import styles from './BlogHeader.module.css'
import headerImg from '@site/static/img/Jeep.jpg'


export default function BlogHeader() {
    return (
        <div>
            <h1 className={styles.pageTitle}>Journal.</h1>
            <p className={styles.pageDescription}> Articles covering photography, gear, travel, and social media. </p>
            <hr></hr>
        </div>
    )
} 