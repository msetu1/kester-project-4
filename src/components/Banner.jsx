
const Banner = () => {
    return (
        <div className="min-h-screen text-white " style={{
            backgroundImage: "url(	https://themewant.com/products/wordpress/kester-cricket/wp-content/uploads/2023/06/banner-bg11.jpg)",
          }}>
  <div className="hero-content uppercase font-bold lg:pt-48 max-w-7xl mx-auto ">
    <div>
        <p className="text-xl">welcome to our cricket news</p>
      <h1 className="lg:text-7xl text-4xl font-bold mt-5 mb-10">From village green to <br />
         international stadia</h1>
      
      <button className="uppercase px-6 py-3 bg-white text-black hover:bg-black hover:text-white">read more</button>
     <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mt-20">

        <div className="flex items-center gap-6">
        <div className="divider lg:divider-horizontal divider-info"></div> 
<div className="">
    <p className="">football june 19,2023</p>
    <h2 className="text-2xl mt-3">destination for world cricket news</h2>
</div>

        </div>
        <div className="flex items-center gap-6">
        <div className="divider lg:divider-horizontal divider-info"></div> 
<div className="">
    <p className="">football june 19,2023</p>
    <h2 className="text-2xl mt-3">FROM VILLAGE GREEN TO
    INTERNATIONAL STADIA</h2>
</div>

        </div>
        <div className="flex items-center gap-6">
        <div className="divider lg:divider-horizontal divider-info"></div> 
<div className="">
    <p className="">the acrobatic ucl premier langue</p>
    <h2 className="text-2xl mt-3">destination for world cricket news</h2>
</div>

        </div>
     </div>
    </div>
  </div>
</div>
    );
};

export default Banner;