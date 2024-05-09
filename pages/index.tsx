import HeadTag from "../components/HeadTag/HeadTag";
import MyButton from "../components/MyButton/MyButton";
import Paragraph from "../components/Paragraph/Paragraph";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import {ReactElement, useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): ReactElement {

    const [rating, setRating] = useState<number>(4);

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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    })
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
