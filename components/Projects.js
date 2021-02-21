import React, { useState } from 'react';
import ProjectList from './ProjectList';
import styles from '../styles/Layout.module.scss';

const Projects = () => {
    const [tags, setTags] = useState(['responsive', 'front-end', 'back-end']);
    const [filteredTags, setFilteredTags] = useState(tags);
    const [count, setCount] = useState(8)
    const allBtn = () => {
        setFilteredTags(tags);
        setCount(8);
    };

    const responsiveBtn = () => {
        setFilteredTags(tags.filter((tag) => tag === 'responsive'));
        setCount(6)
    };

    const frontEndBtn = () => {
        setFilteredTags(tags.filter((tag) => tag === 'front-end'));
        setCount(1)
    };

    const backEndBtn = () => {
        setFilteredTags(tags.filter((tag) => tag === 'back-end'));
        setCount(1)
    };

    return (
        <section>
            <div className={styles.card}>
                <h3>Projects ({count})</h3>
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
