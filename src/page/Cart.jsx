import { Helmet } from "react-helmet-async";

import BannerImg from "../shared/BannerImg";
import ImgSection from "../components/ImgSection";

const Cart = () => {
    return (
        <div>
            <Helmet>
      <title>Kester | CART
      </title>
      </Helmet>
           <BannerImg
           subHeading={"home | Cart"} heading={"cart"}
           ></BannerImg> 
           <div className="">
<ImgSection></ImgSection>
           </div>
        </div>
    );
};

export default Cart;