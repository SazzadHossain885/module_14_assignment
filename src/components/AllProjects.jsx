import projectData from "../database/projectData.js";


const AllProjects = () => {
    return (
        <section className="grid grid-cols-2 gap-7 mt-16 mb-40">
            {
                projectData.map(item => {
                    return (
                        <div key={item.id} className="card shadow-xl p-5">
                            <img src={item.image} alt="" />
                            <h3 className="text-xl uppercase font-semibold my-3">{item.title}</h3>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default AllProjects;