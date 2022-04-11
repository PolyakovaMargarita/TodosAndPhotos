import Head from "next/head";
import Heading from "../components/heading/Heading";
import styles from "../styles/Home.module.css";

const Home = () => (

    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text="Todos Application" />
    </div>
);

export default Home;