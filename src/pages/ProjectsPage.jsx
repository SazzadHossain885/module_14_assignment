import Layout from "../Layout/Layout";
import AllProjects from "../components/AllProjects";
import BreadCrumb from "../components/BreadCrumb";
import SectionTitle from "../components/SectionTitle";

const ProjectsPage = () => {
    return (
        <Layout>
            <BreadCrumb title="Home" navTitle="All Project" link="projects" />
            <section className="max-w-7xl mx-auto mt-16">
                <SectionTitle title="All Project" subTitle1="Better Agency/SEO Solution At" subTitle2="Your Fingertips" />
                <AllProjects />
            </section>
        </Layout>
    );
};

export default ProjectsPage;