import React, {useState} from 'react';
import styles from './TodoAdd.module.css';
import * as uuid from "uuid";
import {Button, Col, FormControl, Row} from "react-bootstrap";

const TodoAdd = ({itemList, setItemList}) => {
    const [value, setValue] = useState("");

    const saveItem = () => {
        if (value) {
            setItemList([
                ...itemList, {
                    id: uuid.v4(),
                    title: value,
                    status: true
                }
            ])
            setValue("")
        }
    }

    return (
        <Row>
            <Col className={styles.wrapper}>
                <FormControl
                    className={styles.input}
                    type="text"
                    placeholder="Enter text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button className={styles.button} onClick={saveItem}>Enter</Button>
            </Col>
        </Row>
    )
}

export default TodoAdd;