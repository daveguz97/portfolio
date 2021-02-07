import React, { useState } from 'react';
import projectStyles from '../styles/Projects.module.scss';
import ProjectList from './ProjectList';
import styles from '../styles/Layout.module.scss';

const Projects = () => {
    const [tags, setTags] = useState(['responsive', 'front-end', 'back-end']);
    return (
        <section className={projectStyles.projectSection}>
            <div className={styles.card}>
                <h3>Projects (10)</h3>
                <button className={styles.btn}>Responsive</button>
                <button className={styles.btn}>Front-End</button>
                <button className={styles.btn}>Back-End</button>
            </div>
            <ProjectList tags={tags} />
        </section>
    );
};

export default Projects;
