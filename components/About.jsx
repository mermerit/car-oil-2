import React from 'react'
import Header from "./Header.jsx";

const About = () => {
    return (
        <div className="  flex flex-col items-center justify-center
        mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden " id="About"
        style={{backgroundImage: "url('background/tank-400.jpg')",}}>

            <h1 className=" text-2xl sm:text-4xl    font-bold mb-4">عن
                  <span className="underline underline-offset-12 text-background decoration-1.2 under font-light "> ئيكسترا بي وان</span>
            </h1>

                <p className=" max-w-80     text-center  ">
                    نحن متخصصون في توفير زيوت سيارات عالية
                    الجودة تحافظ على محركك وتمنحه أداءً أفضل
                </p>



            <div className="flex z-10 flex-col lg:flex-row items-center lg:items-start lg:gap-20">

                    <img src="../public/background/zait-taza.png" alt="" className="w-full  lg:w-1/2 max-w-lg     "/>


                <div className="flex flex-col items-center md:items-start mt-10 ">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 ">
                        <div>
                            <p className="text-4xl font-medium text-button ">10+</p>
                            <p className="text-foreground">Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-button  ">10+</p>
                            <p className="text-foreground">Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium  text-button ">10+</p>
                            <p className="text-foreground">Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-button">10+</p>
                            <p className="text-foreground">Years of Excellence</p>
                        </div>
                    </div>
                    <p className="my-10 max-w-lg text-center">
                        نحن في موقعنا نضع ثقة عملائنا في المقام الأول، ونسعى دائمًا لتقديم أفضل أنواع زيوت السيارات التي تواكب أحدث المواصفات العالمية. ندرك أن زيت المحرك هو العنصر الأساسي في حماية السيارة وضمان كفاءتها، لذلك اخترنا بعناية منتجات عالية الجودة تمنح محركك قوة، حماية، وأداء يدوم لفترة أطول
                    </p>

                </div>

            </div>
            <button  className="bg-button  text-white px-8 py-4 rounded"><a href="#Header">تواصل معنا</a></button>
        </div>
    )
}
export default About
