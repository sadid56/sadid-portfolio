/* eslint-disable react/prop-types */


const SectionTitle = ({color, text}) => {
    return (
        <div className="my-16">
            <h2 className="text-4xl font-semibold text-center"><span className="text-color-change">{color}</span> {text}</h2>
        </div>
    );
};

export default SectionTitle;