import NewPost from '@/components/new-post/NewPost';
import { HomeStyled } from './Home.styled';
import NewPostImage from '@/assets/images/new-post.png';
import { Flex } from '@/components/flex/Flex.styled';
const Home = () => {
    return (
        <HomeStyled>
            <Flex $justify="space-between">
                <NewPost
                    section="DESIGN PROCESS"
                    image={NewPostImage}
                    author="Giga Gogashvili"
                    title="How to Reinstall WordPress: 5 Different Methods Depending On Your Needs"
                    description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
                />
                <NewPost
                    section="DESIGN PROCESS"
                    image={NewPostImage}
                    author="Giga Gogashvili"
                    title="How to Reinstall WordPress: 5 Different Methods Depending On Your Needs"
                    description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
                />
            </Flex>
        </HomeStyled>
    );
};

export default Home;
