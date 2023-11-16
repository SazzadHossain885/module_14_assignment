import { Link } from "react-router-dom";


const BreadCrumb = ({ title, navTitle, link }) => {
    return (
        <section className="bg-top-custom">
            <div className="max-w-7xl mx-auto pl-6 pt-20 pb-10">
                <h3 className="text-3xl font-semibold">{navTitle}</h3>
                <div className="text-sm breadcrumbs font-semibold">
                    <ul>
                        <li><Link to="/">{title}</Link></li>
                        <li><Link to={"/"+link} className="text-green-500">{navTitle}</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BreadCrumb;