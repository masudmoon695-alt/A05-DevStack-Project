import img from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className="container mx-auto my-8   ">
      <div className="grid grid-cols-3 items-center justify-center">
        <div className="col-span-2">
          <h2 className="font-sans text-[60px] font-extrabold text-[#0F172A] leading-none mb-8"> Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className='mt text-[#475569FF]'>Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your<br />
            next project.</p>


          <div className="mt-8 flex ">
            <button className="bg-linear-to-r from-orange-500 to-pink-500 rounded-4xl text-white font-semibold px-6 py-3 hover:opacity-90 ">
              Explore Technologies
            </button>
            <button className="border border-gray-300 rounded-4xl text-gray-800 font-semibold px-6 py-3 ml-4 hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>


        </div>
        <img src={img} alt="Banner" className="w-full h-100 object-cover" />
      </div>
    </div>

  );
};

export default Banner;