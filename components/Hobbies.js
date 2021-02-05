import hobbyStyle from '../styles/Hobby.module.scss';
import styles from '../styles/Layout.module.scss';

const Hobbies = () => {
    return (
        <section className={hobbyStyle.hobbies}>
            <div className={styles.card}>
                <div className={hobbyStyle.wrapper}>
                    <div className={hobbyStyle.hobbyGroup}>
                        <img src='./images/gaming.jpg' alt='Gaming' />
                        <h3>Gaming</h3>
                        <p>
                            I love to play RPGs, open world, and strategy games
                            on my free time.
                        </p>
                    </div>
                    <div className={hobbyStyle.hobbyGroup}>
                        <img src='./images/hiking.jpeg' alt='hiking' />
                        <h3>Hiking</h3>
                        <p>
                            I love to go hiking to the North Carolina Mountains,
                            trails, and Florida beaches.
                        </p>
                    </div>
                    <div className={hobbyStyle.hobbyGroup}>
                        <img src='./images/music.jpeg' alt='hiking' />
                        <h3>Music</h3>
                        <p>
                            I love to listen to all kinds of music such as
                            techno, rap, rock, the violin, the guitar, lofi hip
                            hop, and more. Some of my favorite artist are
                            Polyphia, Chiodos, Polo G, and A day to Remember.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
