

const SectionTitle = ({title, subTitle1, subTitle2}) => {
    return (
        <div className="pl-5">
            <h3 className="text-green-500 font-medium uppercase my-3">{title}</h3>
            <h2 className="text-3xl font-semibold my-3">{subTitle1} <br /> {subTitle2}</h2>
        </div>
    );
};

export default SectionTitle;