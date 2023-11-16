import services from "../database/serviceData.js";


const AllServices = () => {
    return (
        <section className="grid grid-cols-2 gap-5 mb-40">
            {
                services.map(item => {
                    return (
                        <div key={item.id} className="card shadow-2xl w-[600px] px-3 py-5 my-5">
                            <div className="ml-8">
                                <h3 className="text-xl uppercase font-semibold my-3">{item.title}</h3>
                                <p className="text-slate-500"><small>{item.text}</small></p>
                            </div>
                            <div className="ml-5 mt-8">
                                <div className="flex">
                                    <img src={item.image1} alt="" className="m-[-20px]" />
                                    <img src={item.image2} alt="" className="m-[-20px]" />
                                </div>
                                <div className="flex">
                                    <img src={item.image3} alt="" className="m-[-20px]" />
                                    <img src={item.image4} alt="" className="m-[-20px]" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
};

export default AllServices;