import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import projectListStyle from '../styles/ProjectList.module.scss';
import styles from '../styles/Layout.module.scss';

const ProjectList = ({ tags }) => {
    return (
        <div className={projectListStyle.projectList}>
            <div className={`${styles.card} front-end`}>
                <div className={projectListStyle.cardImgDiv}>
                    <img src='/images/projects/knowrona.png' alt='Knowrona' />
                </div>
                <p className={projectListStyle.tags}>
                    #HTML #CSS #React #JavaScript #frontend
                </p>
                <p className={projectListStyle.description}>
                    Here is a cool react pop quiz game I worked on with a team
                    of developers and designers.
                </p>
                <div className='btn-group'>
                    <a href='https://www.knowrona.net/home' target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnDanger}`}>
                            Demo
                        </button>
                    </a>
                    <a
                        href='https://github.com/HJassar/knowrona'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
            <div className={`${styles.card} back-end`}>
                <div className={projectListStyle.cardImgDiv}>
                    <img src='/images/projects/pinterest.png' alt='Pinterest' />
                </div>
                <p className={projectListStyle.tags}>
                    #HTML #CSS #bootstrap #django #python #JavaScript
                </p>
                <p className={projectListStyle.description}>
                    This was my final capstone project we made with a team of 3
                    in only 2 weeks! You can add a board, a pin, dark mode,
                    comment, like, user authentication and a lot more!
                </p>
                <div className='btn-group'>
                    <button
                        className={`${styles.btn} ${projectListStyle.btnLocked}`}>
                        <LockIcon className={projectListStyle.lock} /> Demo
                    </button>
                    <a
                        href='https://github.com/sarahbeverton/capstone'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
            <div className={`${styles.card} responsive`}>
                <div className={projectListStyle.cardImgDiv}>
                    <img src='/images/projects/404.png' alt='404 Not found' />
                </div>
                <p className={projectListStyle.tags}>
                    #HTML #CSS #SASS #responsive
                </p>
                <p className={projectListStyle.description}>
                    Here is a fancy 404 page I created with SASS and HTML from{' '}
                    <a href='http://devchallenges.io' target='_blank'>
                        devchallenges.io
                    </a>
                </p>
                <div className='btn-group'>
                    <a
                        href='https://scarecrow-404.netlify.app/'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnDanger}`}>
                            Demo
                        </button>
                    </a>
                    <a
                        href='https://github.com/daveguz97/404-Not-Found'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
            <div className={`${styles.card} responsive`}>
                <div className={projectListStyle.cardImgDiv}>
                    <img src='/images/projects/checkout.png' alt='Checkout' />
                </div>
                <p className={projectListStyle.tags}>
                    #HTML #CSS #SASS #Responsive
                </p>
                <p className={projectListStyle.description}>
                    This is a mobile responsive checkout page I made with{' '}
                    <a href='http://devchallenges.io' target='_blank'>
                        devchallenges.io
                    </a>
                </p>
                <div className='btn-group'>
                    <a href='https://checkout-dg.netlify.app/' target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnDanger}`}>
                            Demo
                        </button>
                    </a>
                    <a
                        href='https://github.com/daveguz97/Checkout-Page'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
            <div className={`${styles.card} responsive`}>
                <div className={projectListStyle.cardImgDiv}>
                    <img
                        src='/images/projects/interior-consultant.png'
                        alt='Interior Consultant page'
                    />
                </div>
                <p className={projectListStyle.tags}>
                    #HTML #CSS #SASS #responsive
                </p>
                <p className={projectListStyle.description}>
                    This is an interior consultant page I made from{' '}
                    <a href='http://devchallenges.io' target='_blank'>
                        devchallenges.io
                    </a>
                    . It also includes dark mode and light mode.
                </p>
                <div className='btn-group'>
                    <a
                        href='https://my-interior-consultant.netlify.app/'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnDanger}`}>
                            Demo
                        </button>
                    </a>
                    <a
                        href='https://github.com/daveguz97/interior-consultant'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
            <div className={`${styles.card} responsive`}>
                <div className={projectListStyle.cardImgDiv}>
                    <img src='/images/projects/recipe.png' alt='Recipe Page' />
                </div>
                <p className={projectListStyle.tags}>
                    #HTML #CSS #SASS #responsive
                </p>
                <p className={projectListStyle.description}>
                    Here is a recipe blog I created as a challenge from{' '}
                    <a href='http://devchallenges.io' target='_blank'>
                        devchallenges.io
                    </a>
                </p>
                <div className='btn-group'>
                    <a
                        href='https://cheesecake-recipe.netlify.app/'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnDanger}`}>
                            Demo
                        </button>
                    </a>
                    <a
                        href='https://github.com/daveguz97/recipe-blog'
                        target='_blank'>
                        <button
                            className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
            <style jsx>
                {`
                    .responsive {
                        display: ${!tags.includes('responsive')
                            ? 'none'
                            : 'block'};
                    }

                    .front-end {
                        display: ${!tags.includes('front-end')
                            ? 'none'
                            : 'block'};
                    }

                    .back-end {
                        display: ${!tags.includes('back-end')
                            ? 'none'
                            : 'block'};
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectList;
