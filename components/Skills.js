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
                        
                    </div>
                    <div
                        className={`${skillStyles.javascript} ${skillStyles.skill}`}>
                        <h6>JavaScript</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.react} ${skillStyles.skill}`}>
                        <h6>React/Redux</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.bootstrap} ${skillStyles.skill}`}>
                        <h6>Bootstrap</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.tailwind} ${skillStyles.skill}`}>
                        <h6>Tailwind</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.materialize} ${skillStyles.skill}`}>
                        <h6>Materialize</h6>
                        
                    </div>
                    <div className={`${skillStyles.sass} ${skillStyles.skill}`}>
                        <h6>Sass</h6>
                        
                    </div>
                    <div className={`${skillStyles.gsap} ${skillStyles.skill}`}>
                        <h6>Gsap</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.async} ${skillStyles.skill}`}>
                        <h6>Async/Await</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.axios} ${skillStyles.skill}`}>
                        <h6>Axios</h6>
                        
                    </div>
                </div>
            </div>
            <div className={`${styles.card} ${skillStyles.skillsCard}`}>
                <div className={skillStyles.textContent}>
                    <h3>Back End</h3>
                    <div className={`${skillStyles.node} ${skillStyles.skill}`}>
                        <h6>Node/Express</h6>
                        
                    </div>
                    <div className={`${skillStyles.aws} ${skillStyles.skill}`}>
                        <h6>AWS</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.firebase} ${skillStyles.skill}`}>
                        <h6>Firebase</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.multer} ${skillStyles.skill}`}>
                        <h6>Multer</h6>
                        
                    </div>
                    <div className={`${skillStyles.sql} ${skillStyles.skill}`}>
                        <h6>SQL</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.python} ${skillStyles.skill}`}>
                        <h6>Python</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.django} ${skillStyles.skill}`}>
                        <h6>Django</h6>
                        
                    </div>
                    <div className={`${skillStyles.rest} ${skillStyles.skill}`}>
                        <h6>REST API</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.postman} ${skillStyles.skill}`}>
                        <h6>Postman</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.postgres} ${skillStyles.skill}`}>
                        <h6>Postgres</h6>
                        
                    </div>
                </div>
            </div>
            <div className={`${styles.card} ${skillStyles.skillsCard}`}>
                <div className={skillStyles.textContent}>
                    <h3>Other Skills</h3>
                    <div
                        className={`${skillStyles.vscode} ${skillStyles.skill}`}>
                        <h6>VSCode</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.git} ${skillStyles.skill}`}>
                        <h6>Git</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.gimp} ${skillStyles.skill}`}>
                        <h6>Gimp</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.jira} ${skillStyles.skill}`}>
                        <h6>Jira</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.trello} ${skillStyles.skill}`}>
                        <h6>Trello</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.clickUp} ${skillStyles.skill}`}>
                        <h6>ClickUp</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.scrum} ${skillStyles.skill}`}>
                        <h6>Agile/Scrum</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.solidity} ${skillStyles.skill}`}>
                        <h6>Solidity</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.blender} ${skillStyles.skill}`}>
                        <h6>Blender</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.csharp} ${skillStyles.skill}`}>
                        <h6>C#</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.cplusplus} ${skillStyles.skill}`}>
                        <h6>C++</h6>
                        
                    </div>
                    <div
                        className={`${skillStyles.java} ${skillStyles.skill}`}>
                        <h6>Java</h6>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
