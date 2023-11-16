import Layout from "../Layout/Layout";
import AllTestimonials from "../components/AllTestimonials";
import BreadCrumb from "../components/BreadCrumb";
import SectionTitle from "../components/SectionTitle";

const TestimonialsPage = () => {
    return (
        <Layout>
            <BreadCrumb title="Home" navTitle="Testimonial List" link="testimonials" />
            <section className="max-w-7xl mx-auto mt-16">
                <SectionTitle title="Testimonial List" subTitle1="Better Agency/SEO Solution At" subTitle2="Your Fingertips" />
                <AllTestimonials />
            </section>
        </Layout>
    );
};

export default TestimonialsPage;