import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Subscribe from "../components/Subscribe";


const Layout = ({children}) => {
    return (
        <>
            <NavBar />
            {children}
            <Subscribe />
            <Footer />
        </>
    );
};

export default Layout;