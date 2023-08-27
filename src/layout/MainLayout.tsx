import { FC } from '@/types';
import Container from './Container';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainContent from './MainContent';

const MainLayout: FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
        </Container>
    );
};

export default MainLayout;
