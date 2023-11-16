import { workList, startList } from "../database/workData.js";
import SectionTitle from "./SectionTitle";


const WorkList = () => {
    return (

        <section className="max-w-7xl mx-auto mt-16">
            <SectionTitle title="Work List" subTitle1="We provide the Perfect Solution" subTitle2="to your business growth" />
            <div className="flex mt-20 ml-10">
                {
                    workList.map((work) => {
                        return (
                            <div key={work.id}>
                                <img src={work.image} alt="" className="bg-green-100 p-5 rounded-xl" />
                                <h3 className="text-xl font-semibold my-2">{work.heading}</h3>
                                <p className="mb-10">{work.content}</p>
                                <div className="flex">
                                    <p className="mx-3 link link-hover">Learn More</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-40">
                {
                    startList.map((item) => {
                        return (
                            <div key={item.id} className="card w-60 h-52 bg-base-100 shadow-xl mx-3 text-center p-3">
                                <div className="self-center bg-green-100 p-5 rounded-xl my-3">
                                    <img src={item.image} alt="" className="w-[30px]"/>
                                </div>
                                <h3 className="text-xl font-semibold my-2">{item.number}</h3>
                                <p className="font-semibold">{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default WorkList;