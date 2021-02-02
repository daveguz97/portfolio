import Head from 'next/head';
import styles from '../styles/Layout.module.scss';
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>David Guzman</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <h4 className={styles.title}>Welcome to my Site</h4>
            <Footer />
        </>
    );
}
