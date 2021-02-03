import skillStyles from '../styles/Skills.module.scss';
import styles from '../styles/Layout.module.scss';

const Skills = () => {
    return (
        <section className={skillStyles.skills}>
            <div className={`${styles.card} ${skillStyles.skillsCard}`}>
                <div className={skillStyles.textContent}>
                    <h3>Front End</h3>
                    <div
                        className={`${skillStyles.htmlCss} ${skillStyles.skill}`}>
                        <h6>HTML/CSS</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.javascript} ${skillStyles.skill}`}>
                        <h6>JavaScript</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.react} ${skillStyles.skill}`}>
                        <h6>React/Redux</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.bootstrap} ${skillStyles.skill}`}>
                        <h6>Bootstrap</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.tailwind} ${skillStyles.skill}`}>
                        <h6>Tailwind</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.materialize} ${skillStyles.skill}`}>
                        <h6>Materialize</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div className={`${skillStyles.sass} ${skillStyles.skill}`}>
                        <h6>Sass</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div className={`${skillStyles.gsap} ${skillStyles.skill}`}>
                        <h6>Gsap</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.card} ${skillStyles.skillsCard}`}>
                <div className={skillStyles.textContent}>
                    <h3>Back End</h3>
                    <div
                        className={`${skillStyles.node} ${skillStyles.skill}`}>
                        <h6>Node/Express</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.aws} ${skillStyles.skill}`}>
                        <h6>AWS</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.firebase} ${skillStyles.skill}`}>
                        <h6>Firebase</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.multer} ${skillStyles.skill}`}>
                        <h6>Multer</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.sql} ${skillStyles.skill}`}>
                        <h6>SQL</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.python} ${skillStyles.skill}`}>
                        <h6>Python</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.django} ${skillStyles.skill}`}>
                        <h6>Django</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.rest} ${skillStyles.skill}`}>
                        <h6>REST API</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.postman} ${skillStyles.skill}`}>
                        <h6>Postman</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                    <div
                        className={`${skillStyles.postgres} ${skillStyles.skill}`}>
                        <h6>Postgres</h6>
                        <div className={skillStyles.progressBar}>
                            <div className={skillStyles.completed}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.card} ${skillStyles.skillsCard}`}>
                <div className={skillStyles.textContent}>
                    <h3>Other Skills</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;
