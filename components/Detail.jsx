import React from "react";

const Detail = () => {
    return (
        <section className="relative bg-gray-50 py-20 px-6 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-2xl sm:text-5xl font-bold text-center mb-12">
                    Distribution of{" "}
                    <span className="text-button underline underline-offset-8">
            Extra B1 Oils
          </span>
                </h2>

                {/* Intro */}
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
                    Extra B1 is one of Malaysia’s leading companies in the production of
                    lubricants and engine oils. Over the past years, it has achieved wide
                    international expansion. The company distributes its products across
                    several regional and global markets to meet the needs of various types
                    of modern and older vehicles.
                </p>

                {/* Countries of Distribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            region: "Southeast Asia",
                            countries:
                                "Malaysia (HQ), Indonesia, Thailand, Vietnam, Philippines",
                        },
                        {
                            region: "Middle East",
                            countries: "Iraq, UAE, Saudi Arabia, Kuwait, Jordan",
                        },
                        { region: "Africa", countries: "Egypt, Sudan, Nigeria, Kenya" },
                        {
                            region: "Latin America",
                            countries: "Brazil, Peru (emerging markets)",
                        },
                        {
                            region: "Eastern Europe",
                            countries: "Georgia, Azerbaijan",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-button mb-3">
                                {item.region}
                            </h3>
                            <p className="text-gray-600">{item.countries}</p>
                        </div>
                    ))}
                </div>

                {/* Advantages */}

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To provide high-quality lubricants that ensure engine protection,
                            fuel efficiency, and extended vehicle life while adhering to
                            international environmental and industrial standards.
                        </p>
                    </div>
                    <div className=" ">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To become a preferred brand in Middle Eastern and Asian markets
                            for lubricants that balance quality, price, and industrial value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
