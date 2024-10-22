import Footer from "../Footer";
import Header from "../Header";
import { LayoutContainer } from "./styles";

export interface LayoutPageProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
