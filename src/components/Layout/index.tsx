import Footer from "../Footer";
import Header from "../Header";
import { LayoutContainer, LayoutMainContent } from "./styles";

export interface LayoutPageProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutMainContent>{children}</LayoutMainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
