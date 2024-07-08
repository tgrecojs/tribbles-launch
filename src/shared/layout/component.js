import Navbar from "../../features/navbar/component";
import Footer from "../footer/component";

const Layout = ({ children }) => (
  <>
    <div className="wrapper">
      <Navbar />
      <main className="main-content">{children}</main>
    </div>
  </>
);

export default Layout;
