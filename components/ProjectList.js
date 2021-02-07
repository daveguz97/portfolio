import React from 'react';
import projectListStyle from '../styles/ProjectList.module.scss';
import styles from '../styles/Layout.module.scss';

const ProjectList = ({ tags }) => {
    return (
        <div className={projectListStyle.projectList}>
            <div className={styles.card}>
                <div className={projectListStyle.cardImg}>
                    <img src="/images/projects/404.png" alt="404 Not found"/>
                    <p className={projectListStyle.tags}>#HTML #CSS #SASS #responsive</p>
                    <p className={projectListStyle.description}>Here is a fancy 404 page I created with SASS and HTML from <a href="http://devchallenges.io" target="_blank">devchallenges.io</a></p>
                </div>
            </div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    );
};

export default ProjectList;
