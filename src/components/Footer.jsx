import social from "../assets/images/social.png"

const Footer = () => {
    return (
        <section className="bg-black">
            <div className="max-w-7xl mx-auto">
                <footer className="footer p-10 text-white ml-24">
                    <nav>
                        <header className="text-3xl font-semibold">Web Logo</header>
                        <p className="my-3">Some footer text about the <br /> Agency. Just a little description to <br />help people understand you better</p>
                        <img src={social} alt="" className="link"/>
                    </nav>
                    <nav className="font-light">
                        <header className="text-lg font-semibold">Quick Links</header>
                        <a className="link link-hover my-1">Sevices</a>
                        <a className="link link-hover my-1">Portfolio</a>
                        <a className="link link-hover my-1">About Us</a>
                        <a className="link link-hover my-1">Contact Us</a>
                    </nav>
                    <nav>
                        <header className="text-lg font-semibold">Address</header>
                        <p className="leading-loose">Design Agency Head Office. <br /> Airport Road <br />United Arab Emirate</p>
                    </nav>
                </footer>
                <footer className="footer px-10 py-4 ml-24">
                    <aside className="items-center grid-flow-col text-white">
                        <p>Copyright Design Agency 2023</p>
                    </aside>
                </footer>
            </div>
        </section>
    );
};

export default Footer;