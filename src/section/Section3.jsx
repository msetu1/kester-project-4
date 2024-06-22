import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const Section3 = () => {
    return (
        <div className="my-20 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-[65%] ">
                   <SectionOne></SectionOne>
                </div>
                <div className="w-full lg:w-[35%] ">
                    <SectionTwo></SectionTwo>
                </div>
            </div>
        </div>
    );
};

export default Section3;