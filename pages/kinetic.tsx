import Head from "next/head";
import Header from "../src/Header";
import Footer from "../src/Footer";

export default function Contact() {
    return (
        <div className="bg-black  text-white">
            <Head>
                <title>Kinetic Case Study</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className="text-gray-600 body-font bg-violet-800">
                <div className="container px-5 py-28 mx-auto">
                    <div className="text-center">
                        <div className="flex mt-px mb-2 justify-center">

                        </div>
                        <p className="text-center font-bold leading-relaxed text-white">
                            Kinetic
                        </p>
                        <p className="text-center leading-relaxed text-white">
                            UX, UI, Strategy
                        </p>
                        <div className="w-9 h-0.5 rounded-full bg-white inline-flex"></div>

                        <h1 className="mb-16 text-7xl font-bold text-white lg:text-7xl md:text-1xl">
                            <span>Prototype on devices <br></br>in real time.</span>
                        </h1>
                        <div className="text-center">
                            <p className="justify-center sm:justify-start text-white pt-8">
                                A case study in learning and adapting while creating a prototyping platform<br></br>
                                to help companies design, build, and ship device experiences.                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-16 mx-auto">
                    <div className="text-center">

                        <div className="container pt-4 pb-16 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h3 className="text-gray-500 text-md pb-2.5">Beta Sign Ups</h3>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>

                                            <h2 className="title-font font-medium text-5xl font-bold text-white pb-2.5">
                                                10,400+
                                            </h2>



                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <h3 className="text-gray-500 text-md pb-2.5">Paying Customers</h3>
                                        <div className="flex mt-px mb-2 justify-left">
                                            <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 inline-flex"></div>
                                        </div>


                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-5xl text-white pb-2.5">
                                                100
                                            </h2>


                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">
                                        <h3 className="text-gray-500 text-md pb-2.5">Timeline</h3>
                                        <div className="flex mt-px mb-2 justify-left">
                                            <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-800 inline-flex"></div>
                                        </div>


                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-5xl text-white pb-2.5">
                                                2 years
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-white body-font bg-black">
                <div className="container px-5 py-4 mx-auto">
                    <div className="text-left">
                        <div className="text-left">
                            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-6xl md:text-4xl font-bold py-6">
                                Everything changes when <br></br><span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500">fingers hit glass.</span>
                            </p>
                            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500">

                                I have spent the majority of my career building products for devices—everything from 2-inch screens to 10-foot UIs. During that time, I learned how valuable and critical testing your designs on actual devices is to the viability of your work. Creating design artifacts happens on a desktop, and when designing a mobile experience, you need to test your work on your target devices. How a button feels in your design tool is very different from how it performs in the real world.</p>
                            <div className="flex mt-px justify-left">
                                <p className="justify-left sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4 pb-24">
                                    After years of designing and shipping mobile products, we were frustrated with the considerable time and cost investment that came from creating a believable prototype.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-white body-font bg-violet-900">
                <div className="container px-5 py-4 mx-auto">
                    <div className="text-left">
                        <div className="text-left">
                            <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                                Existing ways to prototype designs on devices:
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-white body-font bg-violet-800">
                <div className="container px-5 pt-16 mx-auto">
                    <div className="text-center">

                        <div className="container pt-4 pb-16 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                                                1
                                            </h2>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>
                                            <h3 className="text-white text-xl font-bold">Video Playback</h3>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Build an aspirational product experience in After Effects and watch a video. (Often, the shipped product couldn't replicate the custom motion captured in AE.)
                                            </p>
                                            <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">

                                                ✅ Beautiful UIs and motion.
                                                <br></br>❌ Unrealistic to build and ship.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                                                2
                                            </h2>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>
                                            <h3 className="text-white text-xl font-bold">Low-fi & Static</h3>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Create a low-fidelity prototype that transitioned from screen to screen with static animations. This option could be anything from a complete UI to hand-drawn sketches.
                                            </p>
                                            <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">

                                                ✅ Fast to create & iterate.
                                                <br></br>❌ Feels unauthentic to testers and negatively impacting the quality of feedback.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                                                3
                                            </h2>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>
                                            <h3 className="text-white text-xl font-bold">Engineering Partner</h3>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Work with an engineering partner to build a prototype in code.</p>
                                            <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4 pb-24">

                                                ✅ Feels the closest to a shipped product.
                                                <br></br>❌ High time and financial cost to create.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-white body-font bg-black">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-left">
                        <div className="text-left">
                            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-5xl md:text-3xl font-bold py-6">
                                None of those options allowed a designer to build a believable prototype on their own
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500">—quickly and easily.</span>
                            </p>
                            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-5xl md:text-3xl font-bold py-6">
                                So we built one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-white body-font bg-violet-900">
                <div className="container px-5 py-4 mx-auto">
                    <div className="text-left">
                        <div className="text-left">
                            <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                                My Roles:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-white body-font bg-violet-800">
                <div className="container px-5 pt-16 mx-auto">
                    <div className="text-center">

                        <div className="container pt-4 pb-16 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                                                <div className="ml-3" href="https://twitter.com/">
                                                    <svg
                                                        fill="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </div>


                                            </h2>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>
                                            <h3 className="text-white text-xl font-bold">Experience Strategy & Vision: </h3>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Drove our product's short-term feature development and long-term vision by creatingour roadmap and evolving feature releases.
                                            </p>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Created and developed our brands.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                                                *
                                            </h2>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>
                                            <h3 className="text-white text-xl font-bold">Design Research & Customer Insights:</h3>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Interviewed 100+ designers and product teams to understand their needs and, balanced with our vision, transformed their insights into product requirements.

                                                <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                                                    Increased customer engagement and loyalty by building practical documentation and sample files to unblock issues or offer workflow support.
                                                </p>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/3 md:w-1/2">
                                    <div className="h-full flex flex-col items-left text-left">

                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                                                *
                                            </h2>
                                            <div className="flex mt-px mb-2 justify-left">
                                                <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                                            </div>
                                            <h3 className="text-white text-xl font-bold">Design Execution & Validation: </h3>
                                            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                                                Designed the entire product, from initial concepts to final UIs.

                                            </p>
                                            <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                                                Built high-fidelity prototypes to test our assumptions with fellow designers.</p>


                                            <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                                                Worked closely with engineering to constantly refine the craft of our shipped product.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <br></br>
            <Footer />
        </div>

    );
}
