import headerStyle from '../styles/Header.module.scss';
import { Call, Email, GitHub, Twitter, LinkedIn } from '@material-ui/icons/';
import styles from '../styles/Layout.module.scss';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={styles.card}>
                <div className={headerStyle.cardWrapper}>
                    <img src='/images/me.jpg' alt='A picture of me' />
                    <div className={headerStyle.textContent}>
                        <h3 className={headerStyle.title}>David Guzman</h3>
                        <p className={headerStyle.description} style={{fontSize: '1rem',
                        fontWeight: 300}}>
                            Front-End Web Developer
                        </p>
                        <p>
                            Passionate Front-End Developer who loves to problem
                            solve and Learn new things.
                        </p>
                        <p>
                            Father of fraternal twins, intern at two startups,
                            and a traveler.
                        </p>
                        <p>
                            View my resume{' '}
                            <a href="/main-resume.pdf" target='_blank'>
                                here
                            </a>
                        </p>
                    </div>
                    <div className={headerStyle.socialLinks}>
                        <p>
                            <a href='mailto: davidguzmaninc@gmail.com'>
                                <Email />
                                &nbsp;davidguzmaninc@gmail.com
                            </a>
                        </p>

                        <p>
                            <a href='tel:+1-980-621-2891'>
                                <Call /> &nbsp;+1 (980) 621-2891
                            </a>
                        </p>

                        <br />

                        <p>
                            <a
                                href='https://github.com/daveguz97'
                                target='_blank'>
                                <GitHub /> @daveguz97
                            </a>
                        </p>

                        <p>
                            <a
                                href='https://twitter.com/daveguz97'
                                target='_blank'>
                                <Twitter />
                                @daveguz97
                            </a>
                        </p>

                        <p>
                            <a
                                href='https://linkedin.com/in/daveguz97'
                                target='_blank'>
                                <LinkedIn />
                                @daveguz97
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
