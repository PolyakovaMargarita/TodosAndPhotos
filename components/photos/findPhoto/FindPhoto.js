import React, {useEffect, useState} from 'react';
import styles from './FindPhoto.module.css';
import {Button, Col, FormControl, Row} from "react-bootstrap";
import Link from "next/link"


const FindPhoto = ({photoList, setPhotoList}) => {
    const [value, setValue] = useState();
    const [newAlbumList, setNewAlbumList] = useState(photoList);
    const [albumTrue, setAlbumTrue] = useState(false);

    useEffect(() => {

    }, [newAlbumList])

    const findItem = () => {
            let newItemList = [...photoList].filter(item => item.albumId == value)
            setNewAlbumList(newItemList);
            setAlbumTrue(true)
    }

    return (
        <Row>
            <Col className={styles.wrapper}>
                <FormControl
                    className={styles.input}
                    type="text"
                    placeholder="Enter number from 1 to 100 to find album"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button className={styles.button} onClick={findItem}>Get photos</Button>
                {newAlbumList.map(photo => {
                    return (
                            <div className={styles.flexContainer} key={photo.id}>
                                {
                                    albumTrue === true
                                        ?
                                        <div>
                                            <strong>
                                                <div>{photo.id}. <span> {photo.title}</span></div>
                                            </strong>
                                            <Link href={`/photos/${photo.id}`}>
                                                {photo.url}
                                            </Link>
                                        </div>
                                        :
                                        <div></div>
                                }

                            </div>
                    )
                })}
            </Col>
        </Row>
    )
}

export default FindPhoto;