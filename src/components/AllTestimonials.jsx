import testimonialsData from "../database/testimonialsData.js";


const AllTestimonials = () => {
    return (
        <section className="grid grid-cols-3 gap-7 mt-16 mb-40">
            {
                testimonialsData.map(item => {
                    return (
                        <div key={item.id} className="card shadow-2xl p-5 text-center my-3">
                            <img src={item.image} alt="" className="w-[100px] mx-auto mt-5"/>
                            <p className="text-justify my-5"><small>{item.text}</small></p>
                            <h3 className="text-xl uppercase font-semibold my-3">{item.name}</h3>
                            <p className="mb-8">{item.position}</p>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default AllTestimonials;