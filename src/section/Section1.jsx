import { IoIosArrowForward } from "react-icons/io";
const Section1 = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center justify-between ">
          <h2 className="text-5xl font-bold">LATEST NEWS</h2>
          <h2 className="font-bold flex items-center ">
            LATEST NEWS <IoIosArrowForward className="text-xl font-bold " />
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[65%] ">
          <div className="relative">
            <img
              className="w-full"
              src="https://themewant.com/products/wordpress/kester-cricket/wp-content/uploads/2023/06/news23.jpg"
              alt=""
            />
            <div className="text-white absolute bottom-5 left-5">
              <div className="flex gap-3 mb-3">
                <h2 className="uppercase bg-[#2563eb] px-3 font-bold text-white ">
                  LA LIGA
                </h2>
                <h2 className="text-white">JUNE 19, 2023</h2>
              </div>
              <h2 className="text-3xl font-bold mb-3 hover:text-[#2563eb] hover:underline hover:underline-offset-4">
                CRICKET THE GENTLEMAN’S GAME OF PRECISION
              </h2>
              <h2 className="uppercase mt-3 font-bold hover:text-[#2563eb] hover:underline hover:underline-offset-4">
                Read more
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] ">
          <div className="mb-5">
            <div className="relative">
              <img
                className="w-full"
                src="https://themewant.com/products/wordpress/kester-cricket/wp-content/uploads/2023/06/news23-410x289.jpg"
                alt=""
              />
              <div className="text-white absolute bottom-5 left-5">
                <div className="flex gap-3 mb-3">
                  <h2 className="uppercase bg-[#2563eb] px-3 font-bold text-white ">
                    LA LIGA
                  </h2>
                  <h2 className="text-white">JUNE 19, 2023</h2>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-[#2563eb] hover:underline hover:underline-offset-4">
                  CRICKET THE GENTLEMAN’S GAME OF PRECISION
                </h2>
                <h2 className="uppercase mt-3 font-bold hover:text-[#2563eb] hover:underline hover:underline-offset-4">
                  Read more
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                className="w-full"
                src="	https://themewant.com/products/wordpress/kester-cricket/wp-content/uploads/2023/06/2-410x289.jpg"
                alt=""
              />
              <div className="text-white absolute bottom-5 left-5">
                <div className="flex gap-3 mb-3">
                  <h2 className="uppercase bg-[#2563eb] px-3 font-bold text-white ">
                    LA LIGA
                  </h2>
                  <h2 className="text-white">JUNE 19, 2023</h2>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-[#2563eb] hover:underline hover:underline-offset-4">
                  CRICKET THE GENTLEMAN’S GAME OF PRECISION
                </h2>
                <h2 className="uppercase mt-3 font-bold hover:text-[#2563eb] hover:underline hover:underline-offset-4">
                  Read more
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
