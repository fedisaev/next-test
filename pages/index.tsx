import HeadTag from "../components/HeadTag/HeadTag";
import MyButton from "../components/MyButton/MyButton";
import Paragraph from "../components/Paragraph/Paragraph";
import Tag from "../components/Tag/Tag";

export default function Home(): JSX.Element {
    return (
        <>
            <HeadTag tag='h1'>Text</HeadTag>
            <MyButton appearance='primary' arrow='right'>
                Primary
            </MyButton>
            <MyButton appearance='ghost' arrow='down'>
                Ghost
            </MyButton>
            <Paragraph size='s'>Small</Paragraph>
            <Paragraph>Middle</Paragraph>
            <Paragraph size='l'>Big</Paragraph>
            <Tag color='red'>RED</Tag>
            <Tag size='m'>GHOST</Tag>
            <Tag color='green'>GREEN</Tag>
            <Tag size='m' color='gray'>GRAY</Tag>
            <Tag color='primary'>PRIMARY</Tag>
        </>
    )
}
