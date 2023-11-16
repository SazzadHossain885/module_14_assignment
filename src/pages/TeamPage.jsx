import Layout from "../Layout/Layout";
import BreadCrumb from "../components/BreadCrumb";
import SectionTitle from "../components/SectionTitle";
import TeamMember from "../components/TeamMember";


const TeamPage = () => {
    return (
        <Layout>
            <BreadCrumb title="Home" navTitle="Team" link="team" />
            <section className="max-w-7xl mx-auto mt-16">
                <SectionTitle title="Our Team Member" subTitle1="Check Our Awesome Team" subTitle2="Members" />
                <TeamMember />
            </section>
        </Layout>
    );
};

export default TeamPage;