import React, {useEffect, useState} from 'react';
import styles from './TodoItemList.module.css'
import {Button, ButtonGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faEdit, faLock, faLockOpen, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Heading from "../../heading/Heading";
import {ISSERVER} from "../../../localName";

const TodoItemList = ({itemList, setItemList, itemNew}) => {
    const [edit, setEdit] = useState(null);
    const [valueItem, setValueItem] = useState();
    const [filteredItem, setFilteredItem] = useState(itemList);
    const [item, setItem] = useState()

    if (!filteredItem) {
        return <Heading tag="h3" text="Wait..."/>
    }

    useEffect(() => {
        if(!ISSERVER) {
            localStorage.setItem("item", item)
        }
    }, [item])

    useEffect(() => {
        setFilteredItem(statusCheck(itemList));
    }, [itemList])

    const deleteItem = (id) => {
        let newItemList = [...itemList].filter(item => item.id !== id)
        setItemList(newItemList);
    }
    const statusItem = (id) => {
        let newItemList = [...itemList].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setItemList(newItemList);
    }

    const editItem = (id, title) => {
        setEdit(id)
        setValueItem(title)
    }

    const onSaveItem = (id) => {
        let newItemList = [...itemList].map(item => {
            if (item.id === id) {
                item.title = valueItem
            }
            return item;
        })
        setItemList(newItemList);
        setEdit(null)
    }

    const statusCheck = () => {
        itemList.forEach((item, index) => {
            if (!item.status) {
                itemList.push(item);
                itemList.splice(index, 1);
            }
        });
        return itemList;
    }

    const itemFilter = (value) => {
        if (value === "all") {
            setFilteredItem(itemList);
        } else {
            let newItemList = [...itemList].filter(item => item.status === value)
            setFilteredItem(newItemList);
        }
    }

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button className={styles.buttonFilter} variant="secondary" onClick={() => {itemFilter("all")}}>All</Button>
                <Button className={styles.buttonFilter} variant="secondary" onClick={() => {itemFilter(true)}}>Open</Button>
                <Button className={styles.buttonFilter} variant="secondary" onClick={() => {itemFilter(false)}}>Done</Button>
            </ButtonGroup>
            {filteredItem.map(item => {
                return (
                    <div className={styles.flexContainer} key={item.id}>
                        {
                            edit === item.id
                                ?
                                <div className={styles.input}>
                                    <input className={styles.inputSave} value={valueItem} onChange={(e) => setValueItem(e.target.value)}/>
                                </div>
                                :
                                <div className={!item.status ? styles.close : styles.input} onClick={() => setItem(item.title)} >
                                    <Link href={`/todolist/${item.id}`}>{item.title}</Link>
                                </div>
                        }
                        {
                            edit === item.id
                                ?
                                <div>
                                    <Button className={styles.button} onClick={() => onSaveItem(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                                </div>
                                :
                                <div>
                                    <Button className={styles.button} onClick={() => deleteItem(item.id)}><FontAwesomeIcon icon={faDeleteLeft} /></Button>
                                    <Button className={styles.button} onClick={() => editItem(item.id, item.title)} className={styles.button}><FontAwesomeIcon icon={faEdit} /></Button>
                                    <Button className={styles.button} onClick={() => statusItem(item.id, item.status)} className={styles.button}>
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} />
                                        }
                                    </Button>
                                </div>
                        }
                    </div>
                )})}
        </div>
    )
}

export default TodoItemList;