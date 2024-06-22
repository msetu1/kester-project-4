import { Helmet } from "react-helmet-async";
import BannerImg from "../shared/BannerImg";
import AboutThe from "../components/AboutThe";
import Sponsors from "../components/Sponsors";


const About = () => {
    return (
        <div>
          <Helmet>
      <title>Kester | ABOUT
      </title>
      </Helmet>
        <BannerImg 
        subHeading={'home | About'}
        heading={'about'}
        ></BannerImg>
        <div className="">
        <AboutThe></AboutThe>
        <Sponsors></Sponsors>
      </div>
        </div>
    );
};

export default About;