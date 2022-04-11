import Heading from "../../heading/Heading";
import {useEffect, useState} from "react";
import {ISSERVER} from "../../../localName";

const TodoInfo = ({itemNew, setItemNew}) => {
    const [itemTake, setItemTake] = useState();

    useEffect(() => {
        if(!ISSERVER) {
            setItemTake(localStorage.getItem("item"))
        }
    }, [itemTake])


    if (!itemTake) {
        return <Heading tag="h3" text="Todo is empty"/>
    }

    return (
        <>
            <Heading text={itemTake}/>
            <div>{}</div>
        </>
    )
}

export default TodoInfo;