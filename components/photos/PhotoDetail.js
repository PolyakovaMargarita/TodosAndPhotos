import Heading from "../heading/Heading";

const PhotoDetail = ({photo}) => {
    const { title, url, thumbnailUrl } = photo || {};

    if (!photo) {
        return <Heading tag="h3" text="Photo is empty"/>
    }

    return (
        <>
            <Heading text={title}/>
            <img src={url}/>
        </>
    )
}

export default PhotoDetail;