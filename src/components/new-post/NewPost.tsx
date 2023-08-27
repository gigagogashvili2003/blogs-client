import {
    AuthorBlock,
    NewPostDescriptionBlock,
    NewPostImageBlock,
    NewPostStyled,
    NewPostTitleBlock,
} from './NewPost.styled';
import { INewPost } from './NewPost.types';
import { FC } from '@/types';

const NewPost: FC<INewPost> = (props) => {
    const { image, author, title, description, section } = props;
    return (
        <NewPostStyled>
            <NewPostImageBlock>
                <img src={image} />
            </NewPostImageBlock>
            <AuthorBlock>
                <span className="prefix">By </span>
                {author}
                <span className="suffix"> IN </span>
                {section}
            </AuthorBlock>
            <NewPostTitleBlock>{title}</NewPostTitleBlock>
            <NewPostDescriptionBlock>{description}</NewPostDescriptionBlock>
        </NewPostStyled>
    );
};

export default NewPost;
