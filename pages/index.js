import Head from 'next/head';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';

export default function Home() {
    return (
        <>
            <Head>
                <title>David Guzman</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Skills />
            <Hobbies />
        </>
    );
}
