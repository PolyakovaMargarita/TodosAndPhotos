import Head from "next/head";
import Heading from "../../components/heading/Heading";
import FindPhoto from "../../components/photos/findPhoto/FindPhoto";
import {useState} from "react";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { photos: data },
    }
};


const Photos = ({photos}) => {
    const [photoList, setPhotoList] = useState(photos)

    return (
            <div>
                <Head>
                    <title>Photos</title>
                </Head>
                <Heading text="Photos"/>
                <FindPhoto photoList={photoList} setPhotoList={setPhotoList}/>
            </div>
        )
};

export default Photos;