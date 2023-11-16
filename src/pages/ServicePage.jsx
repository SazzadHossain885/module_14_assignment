import Layout from "../Layout/Layout";
import AllServices from "../components/AllServices";
import BreadCrumb from "../components/BreadCrumb";
import SectionTitle from "../components/SectionTitle";


const ServicePage = () => {
    return (
        <Layout>
            <BreadCrumb title="Home" navTitle="Service" link="service" />
            <section className="max-w-7xl mx-auto mt-16">
                <SectionTitle title="Our All Services" subTitle1="We Provide Best Web Design" subTitle2="Services" />
                <AllServices />
            </section>
        </Layout>
    );
};

export default ServicePage;