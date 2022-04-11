import React, {useEffect, useState} from 'react';
import Heading from "../../components/heading/Heading";
import Head from "next/head";
import Todos from "../../components/todos/Todos";
import styles from "../../styles/Home.module.css";
import {ISSERVER} from "../../localName";



const TodoList = () => {
    const [itemList, setItemList] = useState(() => {
        if (!ISSERVER) {
            const savedTodos = localStorage.getItem("itemList");
            if (savedTodos) {
                return JSON.parse(savedTodos);
            } else {
                return [
                    {
                        id: 1,
                        title: "Task 1",
                        status: true
                    }
                ];
            }
        }
    });

    useEffect(() => {
        localStorage.setItem("itemList", JSON.stringify(itemList))
    }, [itemList])


    return (
        <div className={styles.center}>
            <Head>
                <title>Todos</title>
            </Head>
            <Heading text="List of Todos"/>
            <Todos setItemList={setItemList} itemList={itemList}/>
        </div>
    )
}

export default TodoList;