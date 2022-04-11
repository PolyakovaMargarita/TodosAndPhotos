import Head from "next/head";
import TodoInfo from "../../components/todos/todo/TodoInfo";

const Todo = ({ setItem, itemNew, item }) => {

    return (
            <>
                <Head>
                    <title>Todo</title>
                </Head>
                <TodoInfo />
            </>
        )
}


export default Todo;