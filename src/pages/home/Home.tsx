import { useMemo } from 'react';
import NewPost from '@/components/new-post/NewPost';
import { HomeStyled } from './Home.styled';
import NewPostImage from '@/assets/images/new-post.png';
import { Flex } from '@/components/flex/Flex.styled';
import CarouselComponent from '@/components/carousel/Carousel';
import carousel1 from '@/assets/images/carousel-1.png';
import carousel2 from '@/assets/images/carousel-2.png';
import carousel3 from '@/assets/images/carousel-3.png';
import carousel4 from '@/assets/images/carousel-4.png';
import carousel5 from '@/assets/images/carousel-5.png';
import { ICarouselItems } from '@/components/carousel/Carousel.types';

const Home = () => {
    const images: ICarouselItems = useMemo<ICarouselItems>(() => {
        return [
            { imageSrc: carousel1, title: 'UI Design' },
            { imageSrc: carousel2, title: 'UX Design' },
            { imageSrc: carousel3, title: 'SEO' },
            { imageSrc: carousel4, title: 'Popular' },
            { imageSrc: carousel5, title: 'Essentials' },
            { imageSrc: carousel1, title: 'Popular' },
            { imageSrc: carousel2, title: 'Popular' },
            { imageSrc: carousel3, title: 'Popular' },
            { imageSrc: carousel4, title: 'Popular' },
            { imageSrc: carousel5, title: 'Popular' },
            { imageSrc: carousel1, title: 'UI Design' },
            { imageSrc: carousel2, title: 'UX Design' },
            { imageSrc: carousel3, title: 'SEO' },
            { imageSrc: carousel4, title: 'Popular' },
            { imageSrc: carousel5, title: 'Essentials' },
            { imageSrc: carousel1, title: 'Popular' },
            { imageSrc: carousel2, title: 'Popular' },
            { imageSrc: carousel3, title: 'Popular' },
            { imageSrc: carousel4, title: 'Popular' },
            { imageSrc: carousel5, title: 'Popular' },
            { imageSrc: carousel1, title: 'UI Design' },
            { imageSrc: carousel2, title: 'UX Design' },
            { imageSrc: carousel3, title: 'SEO' },
            { imageSrc: carousel4, title: 'Popular' },
            { imageSrc: carousel5, title: 'Essentials' },
            { imageSrc: carousel1, title: 'Popular' },
            { imageSrc: carousel2, title: 'Popular' },
            { imageSrc: carousel3, title: 'Popular' },
            { imageSrc: carousel4, title: 'Popular' },
            { imageSrc: carousel5, title: 'Popular' },
        ];
    }, []);

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
                <NewPost
                    section="DESIGN PROCESS"
                    image={NewPostImage}
                    author="Giga Gogashvili"
                    title="How to Reinstall WordPress: 5 Different Methods Depending On Your Needs"
                    description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
                />
            </Flex>
            <CarouselComponent slidesToShow={5} slidesToScroll={5} items={images} />
        </HomeStyled>
    );
};

export default Home;
