import React from 'react';
import Heading from "../heading/Heading";
import {Col, Row} from "react-bootstrap";
import styles from '../navbar/Navbar.module.css'
import Navbarr from "../navbar/Navbarr";

const Header = () => {
    return (
        <header>
            <Navbarr/>
        </header>
    )
}

export default Header;