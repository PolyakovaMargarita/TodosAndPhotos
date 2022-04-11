import Head from "next/head";
import PhotoDetail from "../../components/photos/PhotoDetail";

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { photo: data },
    }
};

const Photo = ({ photo }) => (
    <>
        <Head>
            <title>Photo</title>
        </Head>
        <PhotoDetail photo={photo}/>
    </>
);

export default Photo;