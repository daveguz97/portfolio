import React, { useState } from 'react';
import projectStyles from '../styles/Projects.module.scss';
import ProjectList from './ProjectList';
import styles from '../styles/Layout.module.scss';

const Projects = () => {
    const [tags, setTags] = useState(['responsive', 'front-end', 'back-end']);
    const [filteredTags, setFilteredTags] = useState(tags);
    const allBtn = () => {
        setFilteredTags(tags);
    };

    const responsiveBtn = () => {
        setFilteredTags(tags.filter((tag) => tag === 'responsive'));
    };

    const frontEndBtn = () => {
        setFilteredTags(tags.filter((tag) => tag === 'front-end'));
    };

    const backEndBtn = () => {
        setFilteredTags(tags.filter((tag) => tag === 'back-end'));
    };

    return (
        <section className={projectStyles.projectSection}>
            <div className={styles.card}>
                <h3>Projects (7)</h3>
                <button onClick={allBtn} className={styles.btn}>
                    All
                </button>
                <button onClick={responsiveBtn} className={styles.btn}>
                    Responsive
                </button>
                <button onClick={frontEndBtn} className={styles.btn}>
                    Front-End
                </button>
                <button onClick={backEndBtn} className={styles.btn}>
                    Back-End
                </button>
            </div>
            <ProjectList tags={filteredTags} />
        </section>
    );
};

export default Projects;
