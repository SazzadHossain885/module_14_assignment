import banner from "../assets/images/banner.png"
import brand from "../assets/images/brand.png"

const Header = () => {
    return (
        <section className="bg-green-100">
            <section className="flex justify-between items-center max-w-7xl mx-auto pb-40">
                <div className="ml-5 mt-20">
                    <h1 className="text-5xl font-bold my-5 leading-snug">Increase Your <br />Customers Loyalty <br />and Satisfaction</h1>
                    <p>We help businesses like yours earn more customers, <br /> standout from competitors, make more money</p>
                    <button className="btn bg-green-600 text-white rounded-xl my-10">Get Started</button>
                </div>
                <div className="mt-20">
                    <img src={banner} alt="" />
                </div>
            </section>
            <div className="bg-white py-12 hide">
                <img src={brand} alt="" className="max-w-7xl mx-auto"/>
            </div>
            <div className="bg-green-100 h-12 hide"></div>
        </section>
    );
};

export default Header;