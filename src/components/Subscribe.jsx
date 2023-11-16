

const Subscribe = () => {
    return (
        <div className="max-w-7xl mx-auto text-center mt-16 mb-16">
            <h3 className="text-lg text-green-600 font-semibold uppercase my-5">Subscribe</h3>
            <h3 className="text-3xl font-semibold my-3 leading-normal">Subscribe To Get The Latest <br /> News About Us</h3>
            <p>Please drop your email below to get daily update about what we do</p>
            <div className="join my-10">
                <input className="input input-bordered join-item" placeholder="Enter Your Email Address" />
                <button className="btn join-item rounded-md bg-orange-600 text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;