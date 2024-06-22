import { Helmet } from "react-helmet-async";

import BannerImg from "../shared/BannerImg";
import ContactSection from "../components/ContactSection";
import TouchSection from "../components/TouchSection";

const Contact = () => {
    return (
        <div className="">
            <Helmet>
      <title>Kester | CONTACT
      </title>
      </Helmet>
            <BannerImg
            subHeading={'home | Contact'}
            heading={'contact'}
            ></BannerImg>
            <div className="max-w-7xl mx-auto">
<ContactSection></ContactSection>
<TouchSection></TouchSection>
            </div>
        </div>
    );
};

export default Contact;