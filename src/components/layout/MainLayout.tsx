import { FC } from "@/types";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

const MainLayout: FC = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      <MainContent>{children}</MainContent>
      <Footer></Footer>
    </Container>
  );
};

export default MainLayout;
