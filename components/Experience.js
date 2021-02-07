import React from 'react';
import experienceStyles from '../styles/Experience.module.scss';
import styles from '../styles/Layout.module.scss';

const Experience = () => {
    return (
        <section className={experienceStyles.experienceStyle}>
            <div className={styles.card}>
                <div className={experienceStyles.wrapper}>
                    <h3>Experience</h3>
                    <div className={experienceStyles.experienceGroup}>
                        <div>
                            <img
                                className={experienceStyles.companyLogo}
                                src='/images/superworld.svg'
                                alt='logo'
                            />
                        </div>
                        <div>
                            <h4>Super World</h4>
                            <p className={experienceStyles.description}>
                                Front-End Web Developer Intern{' '}
                                <small>Dec 2020- present</small>
                            </p>

                            <p>
                                We are a startup company that is building an
                                augmented reality site that sells virtual art
                                with crypto currency. The technologies we use
                                includes React, HTML/CSS, JavaScript, AWS, AWS
                                S3, Node, Git, Multer, NPM, Blockchain, Meta
                                Mask, Ganache, and postman.
                            </p>
                        </div>
                    </div>
                    <div className={experienceStyles.experienceGroup}>
                        <div>
                            <img
                                className={experienceStyles.companyLogo}
                                src='/images/gigtor.ico'
                                alt='logo'
                            />
                        </div>
                        <div>
                            <h4>Gigtor</h4>
                            <p className={experienceStyles.description}>
                                Full-stack Web Developer Intern{' '}
                                <small>Dec 2020- present</small>
                            </p>

                            <p>
                                We are a working on a music website to help
                                musicians find venues. We are using HTML/CSS,
                                JavaScript, Node.js, Express.js, Tailwind.css,
                                and Firebase.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
