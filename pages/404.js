import React, {useEffect} from 'react';
import Heading from "../components/heading/Heading";
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const ErrorPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 4000)
    }, [router])

    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <div className={styles.wrapper}>
                <Heading text="404"/>
            </div>
            <div className={styles.wrapper}>
                <Heading text="The page is not found" tag="h2"/>
            </div>
        </>


    )
}

export default ErrorPage;