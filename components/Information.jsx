import React from 'react'

const Information = () => {
    return (
        <section
            id="About"
            className="relative bg-gray-100 flex bg-cover bg-center  h-full flex-col items-center
            text-white py-10 px-6 md:px-16 lg:px-32 w-full"
            style={{ backgroundImage: "url('background/construction.jpg')" }}
        >
            {/* ✅ Bottom Fade Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/*<div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t*/}
            {/*from-gray-100 to-transparent"></div>*/}

            {/* ✅ Content */}
            <div className="relative z-10 max-w-3xl  flex flex-col  justify-center items-center   ">
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
