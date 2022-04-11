import {Row, Col} from "react-bootstrap";
import styles from "./Navbar.module.css";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";

const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Todos", path: "/todolist" },
    { id: 3, title: "Photos", path: "/photos" }
]

const Navbarr = () => {
    const { pathname } = useRouter();

    return (
        <Row className={styles.flex}>
                {navigation.map(({ id, title, path }) => (
                    <Col className={pathname === path ? styles.active : styles.flexItem}>
                        <Link key={id} href={path}>
                            <a>{title}</a>
                        </Link>
                    </Col>
                ))}
        </Row>
    )
}

export default Navbarr;