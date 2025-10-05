import React from 'react'

const Information = () => {
    return (
        <section
            id="About"
            className="relative bg-gray-100 flex bg-cover bg-center  h-screen flex-col items-center justify-center
            text-white  md:px-16 lg:px-32 w-full"
            style={{ backgroundImage: "url('background/construction.jpg')" }}
        >
            {/* ✅ Bottom Fade Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* ✅ Content */}
            <div className="relative container z-10 max-w-3xl  flex flex-col  justify-center items-center   ">
                <h1 className="text-3xl md:text-5xl font-semibold mb-2">
                    <span className="text-button" >Extra B1 </span> Product Specifications</h1>

                <div className=" bg-button mx-auto rounded-full mb-6"></div>

                <p className=" text-lg mb-6 text-gray-100 text-left leading-relaxed   w-full sm:w-120">
                     Commitment to high quality standards compliant with global specifications (API, SAE, ISO).
                </p>
                <p className=" text-lg mb-6 text-gray-100 text-left leading-relaxed w-full sm:w-120">
                     Offering a wide range of oils suitable for gasoline and diesel engines across all viscosity grades.
                </p>
                <p className=" text-lg mb-6 text-gray-100  text-left leading-relaxed w-full sm:w-120">
                     Strong distribution network and partnerships with exclusive agents in several countries.
                </p>
                <p className=" text-lg mb-0 text-gray-100 text-left leading-relaxed w-full sm:w-120">
                    Competitive prices compared to other international oil brands.

                </p>
            </div>

        </section>
    )
}

export default Information
