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

      <section className="text-white body-font bg-violet-900 py-8 md:py-28">
        <div className="container px-5 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="container px-5 mx-auto">
            <div className="text-left mx-auto">
              <p className="pb-6">
                <a
                  className="hover:bg-[#C9BA32]  ml-2"
                  href="https://km.design"
                >
                  <svg
                    className="back"
                    data-testid="geist-icon"
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    style={{ color: "#ffffff" }}
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </a>
              </p>
              <img
                src="/images/kinetic-small-logo.png"
                alt=""
                className=" w-12 self-start pb-4"
              />
              <p className="text-left font-bold leading-relaxed">Kinetic</p>
              <p className="text-left leading-relaxed">
                Lead Product Designer & Manager
              </p>
              <div className="w-9 h-0.5 rounded-full bg-white inline-flex"></div>

              <h1 className="mb-8 md:mb-16 text-5xl md:text-7xl pt-6 md:pt-12 font-bold lg:text-7xl md:text-1xl">
                <span>Prototype on devices in real time.</span>
              </h1>
              <div className="text-left">
                <p className="sm:justify-start mx-auto">
                  A case study in learning and adapting while creating a
                  prototyping platform to help product teams design, build, and
                  ship device experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="text-left mx-auto flex justify-center">
            <video autoPlay muted loop className=" rounded-md m-auto">
              <source src="/video/kinetic-demo-short.mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="container bg-black m-auto flex flex-col justify-center py-12 mb-8 md:pt-12">
        <div className="my-4 lg:my-16">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-8 lg:mx-auto">
            <div className="h-full flex flex-col items-left text-left">
              <h2 className="text-lg text-gray-500 pb-2.5">Beta Sign Ups</h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700 inline-flex mb-2"></div>
              <h3 className="title-font font-medium text-5xl font-bold text-white pb-2.5">
                10,400+
              </h3>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="text-lg text-gray-500 pb-2.5">Paying Customers</h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700 inline-flex mb-2"></div>
              <h3 className="title-font font-medium text-5xl font-bold text-white pb-2.5">
                100
              </h3>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="text-lg text-gray-500 pb-2.5">Timeline</h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700 inline-flex mb-2"></div>
              <h3 className="title-font font-medium text-5xl font-bold text-white pb-2.5">
                2 years
              </h3>
            </div>
            <div className="h-full flex flex-col items-left text-left">
              <h2 className="text-lg text-gray-500 pb-2.5">Team Members</h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700 inline-flex mb-2"></div>
              <h3 className="title-font font-medium text-5xl font-bold text-white pb-2.5">
                3
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container px-5 py-16 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left text-black font-light lg:text-md text-md pb-8">
                The year was{" "}
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-violet-800 to-purple-500">
                  2013
                </span>
              </p>

              <p className="text-left xl:w-3/4 lg:w-3/4 text-black lg:text-5xl text-3xl font-bold py-6">
                Photoshop was the leading design software and dominated the
                space.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                Elon Musk announced the Hyperloop, Facebook &amp; Twitter went
                public, Edward Snowden's leaked documents came out, iOS 7 was
                launched as the first iOS update post-Steve Jobs, &amp; who
                could forget the XBOX One?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-left">
            <p className="text-left lg:w-3/4 text-white text-5xl lg:text-6xl font-bold pb-2">
              Everything changes when {""}
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500 mx-auto pb-8">
                fingers hit glass.
              </p>
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500">
              I have spent the majority of my career building products for
              devices—everything from 2-inch screens to 10-foot UIs. During that
              time, I learned how valuable and critical testing your designs on
              actual devices is to the viability of your work. Creating design
              artifacts happens on a desktop, and when designing a mobile
              experience, you need to test your work on your target devices. How
              a button feels in your design tool is very different from how it
              performs in the real world.
            </p>
            <div className="flex mt-px justify-left">
              <p className="justify-left sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4 pb-24">
                After years of designing and shipping mobile products, we were
                frustrated with the considerable time and cost investment that
                came from creating a believable prototype.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-violet-800">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-center">
            <div className="pt-4 pb-16 mx-auto">
              <p className="text-left font-light lg:text-md text-md pb-12">
                Existing ways to prototype designs on devices in 2013
              </p>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="2.18"
                            ry="2.18"
                          />
                          <path d="M7 2v20" />
                          <path d="M17 2v20" />
                          <path d="M2 12h20" />
                          <path d="M2 7h5" />
                          <path d="M2 17h5" />
                          <path d="M17 17h5" />
                          <path d="M17 7h5" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        Video Playback
                      </h3>

                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Build an aspirational product experience in After
                        Effects and watch a video. (Often, the shipped product
                        couldn't replicate the custom motion captured in AE.)
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Beautiful UIs and motion.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4">
                        ❌ Unrealistic motion capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M12 19l7-7 3 3-7 7-3-3z" />
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                          <path d="M2 2l7.586 7.586" />
                          <circle cx="11" cy="11" r="2" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        Low-fi &amp; Static
                      </h3>

                      <p className="justify-left text-sm sm:justify-start pt-6 xl:w-3/4 lg:w-3/4">
                        Create a low-fidelity prototype that transitioned from
                        screen to screen with static animations. This option
                        could be anything from a complete UI to hand-drawn
                        sketches.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Fast to create &amp; iterate.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4 ">
                        ❌ Feels unauthentic to testers and negatively impacting
                        the quality of feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M16 18l6-6-6-6" />
                          <path d="M8 6l-6 6 6 6" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        Engineering Partner
                      </h3>

                      <p className="justify-left text-sm sm:justify-start xl:w-3/4 lg:w-3/4 pt-8">
                        Work with an engineering partner to build a prototype in
                        code.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Feels the closest to a shipped product.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4">
                        ❌ High time and financial cost to create.
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
              <p className="text-left xl:w-3/4 lg:w-3/4 text-white lg:text-5xl text-3xl font-bold py-6">
                None of those options allowed a designer to build a believable
                prototype on their own
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-violet-500">
                  {""} — quickly and easily.
                </span>
              </p>
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-5xl text-3xl font-bold py-6">
                So we built one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-violet-800">
        <div className="container px-5 pt-8 mx-auto">
          <div className="text-center">
            <div className="container pt-8 pb-8 mx-auto">
              <p className="text-left font-light lg:text-md text-md pb-12">
                My roles at Kinetic
              </p>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        Experience Strategy <br></br>&amp; Vision{" "}
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Drove our product's short-term feature development and
                        long-term vision by creating our roadmap and evolving
                        feature releases.
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Created and developed our brands.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path
                            d="M7 14.5s0 4 5 4 5-4 5-4"
                            fill="currentColor"
                          />
                          <path d="M7 14.5s0 4 5 4 5-4 5-4H7z" />
                          <circle cx="15.5" cy="9.5" r=".75" />
                          <circle cx="8.5" cy="9.5" r=".75" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        Design Research <br></br>&amp; Customer Insights
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Interviewed 100+ designers and product teams to
                        understand their needs and, balanced with our vision,
                        transformed their insights into product requirements.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        Increased customer engagement and loyalty by building
                        practical documentation and sample files to unblock
                        issues or offer workflow support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-8">
                      <h2 className="title-font font-bold md:text-5xl text-3xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        Design Execution <br></br>&amp; Validation{" "}
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Designed the entire product, from initial concepts to
                        final UIs.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        Built high-fidelity prototypes to test our assumptions
                        with fellow designers.
                      </p>

                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        Worked closely with engineering to constantly refine the
                        craft of our shipped product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-zinc-100">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <div className="flex mt-px mx-auto mb-2"></div>
            <img
              src="/images/standin-icon.png"
              alt=""
              className=" w-24 self-start pb-4"
            />

            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-6xl text-4xl font-bold py-6">
              Stand In
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-4">
              Our first attempt to address this challenge was Stand In—a
              Photoshop plug-in. Photoshop was the most widely used design
              software for product designers at the time. We built a layer
              integrated into Adobe’s software and allowed designers to create
              interactive prototypes straight from their files to their devices
              in real-time.
            </p>
          </div>
          <div className="text-left mx-auto bg-red flex justify-center">
            <video autoPlay muted loop className=" rounded-md m-auto">
              <source src="/video/standin-photoshop.mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-violet-800">
        <div className="container px-5 pt-8 mx-auto">
          <div className="text-center">
            <div className="container pt-8 mx-auto">
              <p className="text-left font-light  lg:text-md text-md pb-12">
                What we learned after launching the Photoshop plugin
              </p>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>

                      <h3 className="text-white text-xl font-bold">
                        I want my layers the way they are!
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Designers dedicated to Photoshop had specific workflows
                        built around how their files were structured. To use
                        Stand In, they had to change their existing layer
                        structure. We found that most Photoshop superusers would
                        create duplicate files for Stand In instead of adapting
                        their existing files to avoid restructuring their
                        folders.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Photoshop users found Stand In easy to use.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4">
                        ❌ Duplicating files was inefficient for designers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" />
                          <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" />
                          <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" />
                          <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" />
                          <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Divestment from Photoshop
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        A new product called Sketch was rapidly taking over
                        Photoshop's product designer user base. In 3-4 months,
                        the majority of teams we spoke to had switched from
                        Photoshop to Sketch. (Oh, and we also heard about tiny
                        startup called Figma that was just begining. 🙌)
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ❌ Designers were quickly abandoning Photoshop in favor
                        of more modern software
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M12 2v4" />
                          <path d="M12 18v4" />
                          <path d="M4.93 4.93l2.83 2.83" />
                          <path d="M16.24 16.24l2.83 2.83" />
                          <path d="M2 12h4" />
                          <path d="M18 12h4" />
                          <path d="M4.93 19.07l2.83-2.83" />
                          <path d="M16.24 7.76l2.83-2.83" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        How can I add motion to my designs?
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        After interviewing our beta users, most feedback
                        centered on the need to experiment with UI motion. Brand
                        expression in products was starting to become more of a
                        focus, and motion design emerged as a critical
                        experience differentiator.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Feels the closest to a shipped product.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 pb-16 xl:w-3/4 lg:w-3/4">
                        ❌ High time and financial cost to create.
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
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <p className="text-left font-light lg:text-md text-md pb-8">
            Transitioning from a Photoshop plugin to a Mac app
          </p>
          <p className="text-left xl:w-3/4 lg:w-3/4 text-white lg:text-5xl text-3xl font-bold py-6">
            Techstars gave us the time and resources to take a deeper look at
            the challenges facing our customers which led to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-300">
              Kinetic.
            </span>{" "}
          </p>
        </div>
      </section>

      <section className="text-white body-font bg-violet-900">
        <div className="container px-5 py-16 md:py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <div className="flex mt-px mx-auto mb-2"></div>
            <img
              src="/images/kinetic-icon-sm.png"
              alt=""
              className="pb-4 md:w-24 w-16"
            />

            <h1 className="mb-4 justify-left text-1xl font-bold lg:text-6xl text-4xl">
              <span>Kinetic</span>
            </h1>

            <p className="sm:justify-left lg:text-xl md:text-l mx-auto lg:pr-28">
              A Mac App for building realistic prototypes and experimenting with
              real-time UI motion design on devices.
            </p>

            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              I love this video of Kinetic and a paired device working together
              seamlessly in real-time—it feels like magic. As the motion is
              created in the Mac App, the design is loaded automatically onto
              the device. The movement is triggered from the Mac App, in this
              instance, allowing for rapid design refinements based on how the
              UI moves on the iPhone. Kinetic prototypes could be triggered
              either from the Mac App or the device prototype.
            </p>
          </div>
          <div className="text-left mx-auto pt-12 pb-8 md:pb-12 md:pb-0 flex justify-center">
            <video autoPlay muted loop className=" rounded-md m-auto">
              <source src="/video/kinetic-demo-short.mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-zinc-50">
        <div className="container px-5 py-12 md:py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <p className="text-left font-light lg:text-md text-md pb-8 ">
              Critical findings that shaped how we created Kinetic
            </p>
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              1
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700  inline-flex"></div>
            </div>
            <div className="lg:text-3xl md:text-2xl font-bold">
              Keep Stand In's prototyping features
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              Our original Photoshop plug-in successfully allowed designers to
              easily and quickly create working prototypes on their devices in
              real-time. Designers could build and share prototypes with
              customers, clients, and peers.
            </p>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              ✅ Build interactive prototypes easily and quickly on devices.{" "}
            </p>
          </div>
          <div className="text-left">
            <h2 className="title-font font-thin text-4xl font-bold pb-2.5 pt-8 md:pt-16">
              “Stand In brings my designs to life and gives people a chance to
              emotionally connect with my work.”
            </h2>
            <p className="justify-left text-l sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              Senior UX Design Lead, <span className="font-bold">Adobe</span>
            </p>
          </div>
        </div>
      </section>
      <section className="text-black body-font bg-white">
        <div className="container px-5 py-12 md:py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              2
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700  inline-flex"></div>
            </div>
            <div className="text-black lg:text-3xl md:text-2xl font-bold">
              Be design tool agnostic
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              We learned our lesson by committing to one design tool. To be
              successful, we would have to create a way to seamlessly work with
              different design tools and enhance productivity instead of
              creating barriers with additional software layers.
            </p>
            <p className="justify-left text-sm sm:justify-start  pt-8 xl:w-3/4 lg:w-3/4">
              ✅ Work regardless of design tool choice.
            </p>
          </div>
          <div className="text-left">
            <h2 className="title-font font-thin text-4xl font-bold text-black pb-2.5 pt-8 md:pt-16">
              “Exactly the prototyping tool I’ve been waiting for. When will it
              work with Sketch?”
            </h2>
            <p className="justify-left text-l sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              Interaction Designer, <span className="font-bold">Google</span>
            </p>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-zinc-50">
        <div className="container px-5 py-12 md:py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold text-black pb-2.5">
              3
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700  inline-flex"></div>
            </div>
            <div className="text-black lg:text-3xl md:text-2xl font-bold">
              Motion, motion, motion
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              How could we build a new visual editor for designers to create and
              prototype custom UI motion on actual devices? Once a designer
              creates an engaging prototype with beautiful movement, how could
              we then bridge the gap between the prototype and engineers
              responsible for shipping the final product?
            </p>
            <p className="justify-left text-sm sm:justify-start text-black pt-8 xl:w-3/4 lg:w-3/4">
              ✅ Help designers create innovative and shippable UI motion.
            </p>
            <p className="justify-left text-sm sm:justify-start text-black pt-2 xl:w-3/4 lg:w-3/4">
              ✅ Bridge the gap between design and engineering.
            </p>
          </div>
          <div className="text-left">
            <h2 className="title-font font-thin text-4xl font-bold text-black pb-2.5 pt-8 md:pt-16">
              “The needs of my job demand that I communicate through interaction
              and motion. I’m tired of waving my hands.”
            </h2>
            <p className="justify-left text-l sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              Senior Visual Designer, <span className="font-bold">frog</span>
            </p>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-white">
        <div className="container px-5 py-12 md:py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              4
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700  inline-flex"></div>
            </div>
            <div className="text-black lg:text-3xl md:text-2xl font-bold">
              Android please!
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              We focused on iOS first, given its dominance in the market and
              Android's fragmentation. As we worked on Stand In, we found our
              iOS-first assumption worked for most of our customers, but we had
              increasing requests for Android support. From the time we launched
              Stand In to our shift to Kinetic, Android projects became more
              standard and common.
            </p>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              ✅ Meet the demands of our existing customers and their increasing
              number of Android projects.
            </p>
          </div>
          <div className="text-left bg-white">
            <img
              src="/images/devices-jump.jpg"
              alt=""
              className="mx-auto pb-4"
            />
            <p className="justify-left text-xs text-gray-500 mx-auto sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              Kinetic brand illustration by{" "}
              <a href="http://www.beccacm.com">
                Becca Charlier-Matthews (hire her!)
              </a>{" "}
              &amp; creative direction by Kat.
            </p>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black py-24">
        <div className="container px-5  mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left mx-auto mb-2 pb-8 flex justify-left">
            <video autoPlay muted loop className=" rounded-md m-auto">
              <source src="/video/early-kinetic-01.mp4" />
            </video>
          </div>

          <div className="text-left md:ml-24">
            <div className="flex mt-px md:pt-28 justify-left">
              <div className="lg:text-3xl text-2xl font-bold">
                First Kinetic Release
              </div>
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              Our initial release had motion customization hidden and
              standardized. We learned that designers wanted more control over
              the physics and motion specifics. I also reduced the visual
              styling for the buttons and UI elements to increase hierarchy
              while minimizing visual noise.
            </p>
          </div>
        </div>
      </section>
      <section></section>

      <section className="text-white body-font py-12 bg-gray-900">
        <div className="container px-5 py-12 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <div className="flex mt-px mb-2 md:pt-28 justify-left">
              <div className="lg:text-3xl text-2xl font-bold">
                Last Kinetic Release
              </div>
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              This version of Kinetic shows how we incorporated the feedback and
              insights we learned from previous versions. I developed a way to
              establish a "future state" of an element for designers to move on
              the screen as a way to design motion without a timeline editor. We
              also brought the contextual menu concept from Stand In to allow
              for more granular control over UI elements.
            </p>
          </div>

          <div className="text-left mx-auto bg-red flex pt-8 justify-center">
            <video autoPlay muted loop className="w-11/12 rounded-sm m-auto">
              <source src="/video/kinetic-motion-design-01.mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-white">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="text-left">
            <p className="text-left font-light lg:text-md text-md pb-8">
              <span className="font-bold">Outcomes:</span> What we learned after
              launching Kinetic
            </p>
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              1
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700 inline-flex"></div>
            </div>
            <div className="lg:text-3xl pt-4 text-2xl font-bold">
              Our retention was highest with startups and lowest with large
              in-house teams
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              More established companies with larger teams and additional layers
              of design management found our product to be less refined than
              expected. Startups had greater leniency for our frequent updates
              and feature releases. Startup designers requested fewer guides and
              tutorials but wanted more sample files, while larger in-house
              teams asked for more documentation.
            </p>
          </div>
          <div className="text-left">
            <h2 className="title-font font-thin md:text-4xl text-3xl font-bold pb-2.5 pt-8 md:pt-16">
              "I liked it initially, but as I got into more detailed actions, it
              seemed sluggish. Great syncing product! I would love to see what
              the next release can do!"
            </h2>
            <p className="justify-left text-l sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              <span className="font-bold"> Senior Art Director, </span> in-house
              team (Exit Interview Quote)
            </p>
          </div>
        </div>
      </section>
      <section className="text-black body-font bg-zinc-50">
        <div className="container px-5 py-12 md:py-24 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              2
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-900 to-violet-700  inline-flex"></div>
            </div>
            <div className="lg:text-3xl pt-4 text-2xl font-bold">
              Our price point was too high
            </div>
            <p className="justify-left text-sm sm:justify-start  pt-2.5 md:pt-8 xl:w-3/4 lg:w-3/4">
              We priced Kinetic at $25/mo and hoped to convert 10% of our
              10,400+ beta sign-ups over three months for an MRR of $25,000.
              That price point proved too high for most of our beta users at
              startups. The designers at larger organizations with budgets for
              design tools needed help to validate the benefits of prototyping
              to their finance teams and managers. When we shut Kinetic down, we
              had 100 paying users generating $2,500 in revenue per month.
            </p>
          </div>
          <div className="text-left">
            <h2 className="title-font font-thin md:text-4xl pt-8 md:pt-0 text-3xl font-bold pb-2.5">
              “Give me a one-time fee or other options for monthly pricing.”
            </h2>
            <p className="justify-left text-l sm:justify-start  pt-2.5 md:pt-8 xl:w-3/4 lg:w-3/4">
              <span className="font-bold">Product Designer,</span> startup (Exit
              Interview Quote)
            </p>
            <h2 className="title-font font-thin md:text-4xl text-3xl pb-2.5 pt-12">
              "Make a different pricing model. I want a cheaper monthly fee or,
              more preferable; I want a single license fee. I don't want to pay
              monthly.”
            </h2>
            <p className="justify-left text-l sm:justify-start pt-2.5 md:pt-8 xl:w-3/4 lg:w-3/4">
              <span className="font-bold">UX & UI Designer,</span> small product
              agency (Exit Interview Quote)
            </p>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-violet-800">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-center">
            <p className="text-left font-light lg:text-md text-md pb-8">
              Important takeaways
            </p>
            <div className="container pt-4 pb-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 00-3-3.87" />
                          <path d="M16 3.13a4 4 0 010 7.75" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Talk to your customers every day
                      </h3>
                      <p className="text-xl italic">
                        Designers, learn to love customer support!
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Listening to our customers was where I could uncover
                        critical challenges that they were facing with our
                        product. From the very beginning, I prioritized having a
                        conversation with someone using our product every day.
                        During those interviews, I realized that your angriest
                        customers are often your biggest advocates once you
                        validate their feelings and respond to their feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Curiosity is key
                      </h3>
                      <p className="text-xl italic">
                        Develop resilance &amp; grit from change
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        I learned how important my natural curiosity was to our
                        product's momentum. To capture lessons from the day I'd
                        write the answers to two questions before I logged off.
                        First, "what unexpected lessons or events happened to me
                        today?" and second, "How can tomorrow be improved by
                        what today has taught me?"{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">
                    <div className="w-full pb-16">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                          style={{ color: "#ffffff" }}
                        >
                          <circle cx="12" cy="12" r="5" />
                          <path d="M12 1v2" />
                          <path d="M12 21v2" />
                          <path d="M4.22 4.22l1.42 1.42" />
                          <path d="M18.36 18.36l1.42 1.42" />
                          <path d="M1 12h2" />
                          <path d="M21 12h2" />
                          <path d="M4.22 19.78l1.42-1.42" />
                          <path d="M18.36 5.64l1.42-1.42" />
                        </svg>
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Be fearless and ship
                      </h3>
                      <p className="text-xl italic">
                        Learn to be comfortable with ambiguity
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Designers find comfort in research. However, there are
                        real-world experiences and inputs that you can't test
                        for during the research phase—even with incredible
                        prototypes. The best customer insights only come after
                        you've shipped a product and listen to feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container px-5 pt-12 pb-24 mx-auto ">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-5xl text-3xl font-bold py-6 text-black">
                From Sunset to{" "}
                <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
                  Sunrise
                </span>
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4  lg:text-l text-black md:text-md">
                After we shut Kinetic down, I spent the next few years as a
                fractional founding designer where I supported executive leaders
                at seed to growth stage companies. My work specialized in
                solving product design and management challenges, crafting
                engaging investor relations with strategic storytelling, and
                building brands.{" "}
              </p>
              <section className="text-black body-font text-sm bg-white">
                <div className="container flex m-auto pt-24 md:flex-row flex-col">
                  <div className="mx-8 md:mx-4 lg:mx-auto text-left text-black py-2">
                    <p className="justify-center items-center flex">
                      <a
                        className="hover:text-blue-500  ml-2"
                        href="mailto:kat@km.design"
                      >
                        kat@km.design
                      </a>
                    </p>
                  </div>

                  <div className="mx-8 md:mx-4 lg:mx-auto text-left text-black py-2">
                    <p className="justify-center items-center flex">
                      <a
                        className="hover:text-blue-500  ml-2"
                        href="https://read.cv/katm"
                      >
                        read.cv/katm
                      </a>
                    </p>
                  </div>
                  <div className="mx-8 md:mx-4 lg:mx-auto text-left text-black py-2">
                    <p className="justify-center items-center flex">
                      <a
                        className="hover:text-blue-500  ml-2"
                        href="https://twitter.com/avoiceandname"
                      >
                        @avoiceandname
                      </a>
                    </p>
                  </div>
                  <div className="mx-8 md:mx-4 lg:mx-auto text-left text-black py-2">
                    <p className="justify-center items-center flex">
                      <a
                        className="hover:text-blue-500  ml-2"
                        href="https://cal.com/kat/30min"
                      >
                        cal.com/kat
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
