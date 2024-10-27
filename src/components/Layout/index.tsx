import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { LayoutContainer, LayoutMainContent } from "./styles";

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutMainContent>
        <Outlet />
      </LayoutMainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
