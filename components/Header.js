import headerStyle from '../styles/Header.module.scss';
import Email from '@material-ui/icons/Email';
import Call from '@material-ui/icons/Call';
import styles from '../styles/Layout.module.scss';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={styles.card}>
                <div className={headerStyle.cardWrapper}>
                    <img
                        src='/me.jpg'
                        alt='A picture of me'
                    />
                    <div className={headerStyle.textContent}>
                        <h3 className={headerStyle.title}>David Guzman</h3>
                        <p className={headerStyle.description}>
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
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
