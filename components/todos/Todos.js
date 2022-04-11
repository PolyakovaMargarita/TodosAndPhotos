import React from 'react';
import styles from './Todos.module.css'
import TodoAdd from "./todoAdd/TodoAdd";
import {Col, Row} from "react-bootstrap";
import TodoItemList from "./todoItemList/TodoItemList";

const Todos = ({itemList, setItemList }) => {

    return (
        <Row>
            <Col className={styles.center}>
                <TodoAdd itemList={itemList} setItemList={setItemList}/>
                <TodoItemList itemList={itemList} setItemList={setItemList}/>
            </Col>
        </Row>
    )
}

export default Todos;