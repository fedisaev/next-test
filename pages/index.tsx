import HeadTag from "../components/HeadTag/HeadTag";
import MyButton from "../components/MyButton/MyButton";
import Paragraph from "../components/Paragraph/Paragraph";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import {ReactElement, useState} from "react";
import {withLayout} from "../layout/Layout";

function Home(): ReactElement {

    const [rating, setRating] = useState(4);

    return (
        <>
            <HeadTag tag='h1'>Text</HeadTag>
            <MyButton appearance='primary' arrow='right'>Primary</MyButton>
            <MyButton appearance='ghost' arrow='down'>Ghost</MyButton>
            <Paragraph size='s'>Small</Paragraph>
            <Paragraph>Middle</Paragraph>
            <Paragraph size='l'>Big</Paragraph>
            <Tag color='red'>RED</Tag>
            <Tag size='m'>GHOST</Tag>
            <Tag color='green'>GREEN</Tag>
            <Tag size='m' color='gray'>GRAY</Tag>
            <Tag color='primary'>PRIMARY</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    )
}

export default withLayout(Home);
