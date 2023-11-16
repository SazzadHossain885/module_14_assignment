import featuredData from "../database/featuredProjectData";
import SectionTitle from "./SectionTitle";
import mask from "../assets/images/mask.png"


const FeaturedProjects = () => {
    return (
        <section className="bg-green-50 mt-16">
            <div className="max-w-7xl mx-auto py-16">
                <SectionTitle title="Fetured Project" subTitle1="We provide the Perfect Solution" subTitle2="to your business growth" />
                <section className="flex mt-16">
                    <div>
                        <img src={mask} alt="" />
                        <p className="my-2"><small>App Design - June 20, 2023</small></p>
                        <h3 className="text-xl font-semibold">App Redesign</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mx-5">
                        {
                            featuredData.map((item, i) => {
                                return (
                                    <div key={i} className="">
                                        <img src={item.image} alt="featured" className=""/>
                                        <p className="my-2"><small>{item.text}</small></p>
                                        <h3 className="font-semibold">{item.title}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </section>
    );
};

export default FeaturedProjects;