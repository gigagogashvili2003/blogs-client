import { FC } from '@/types';
import { MainContentStyled } from './Layouts.styled';

const MainContent: FC = ({ children }) => {
    return <MainContentStyled>{children}</MainContentStyled>;
};

export default MainContent;
