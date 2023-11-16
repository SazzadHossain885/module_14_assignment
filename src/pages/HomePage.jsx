import Layout from "../Layout/Layout";
import WorkList from "../components/WorkList";
import Header from "../components/Header";
import FeaturedProjects from "../components/FeaturedProjects";

const HomePage = () => {
    return (
        <Layout>
            <Header />
            <WorkList />
            <FeaturedProjects />
        </Layout>
    );
};

export default HomePage;