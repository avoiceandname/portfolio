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
      <section className="text-gray-600 body-font bg-violet-900">
        <div className="container px-5 py-28 mx-auto">
          <div className="text-center mx-auto">
            <div className="flex mt-px mx-auto mb-2"></div>
            <img
              src="/images/kinetic-icon-sm.png"
              alt=""
              className="mx-auto pb-4"
            />
            <p className="text-center font-bold leading-relaxed text-white">
              Kinetic
            </p>
            <p className="text-center leading-relaxed text-white">
              UX, UI, Strategy
            </p>
            <div className="w-9 h-0.5 rounded-full bg-white inline-flex"></div>

            <h1 className="mb-16 text-7xl font-bold text-white lg:text-7xl md:text-1xl">
              <span>Prototype on devices in real time.</span>
            </h1>
            <div className="text-center">
              <p className="sm:justify-start text-white pt-8 mx-auto">
                A case study in learning and adapting while creating a
                prototyping platform to help companies design, build, and ship
                device experiences.
              </p>
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
                      <h3 className="text-gray-500 text-md pb-2.5">
                        Beta Sign Ups
                      </h3>
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
                    <h3 className="text-gray-500 text-md pb-2.5">
                      Paying Customers
                    </h3>
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
      <section className="text-black body-font bg-zinc-100">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                The year was{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500">
                  2013
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container px-5 pt-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-5xl md:text-3xl font-bold py-6">
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
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-6xl md:text-4xl font-bold py-6">
              Everything changes when
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500 mx-auto pb-6">
                fingers hit glass.
              </div>
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

      <section className="text-white body-font bg-violet-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Existing ways to prototype designs on devices in 2013:
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
                        *
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Video Playback
                      </h3>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Beautiful UIs and motion.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4">
                        ❌ Unrealistic motion capabilities.
                      </p>

                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Build an aspirational product experience in After
                        Effects and watch a video. (Often, the shipped product
                        couldn't replicate the custom motion captured in AE.)
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
                      <h3 className="text-white text-xl font-bold">
                        Low-fi &amp; Static
                      </h3>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Fast to create &amp; iterate.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4 pb-24">
                        ❌ Feels unauthentic to testers and negatively impacting
                        the quality of feedback.
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Create a low-fidelity prototype that transitioned from
                        screen to screen with static animations. This option
                        could be anything from a complete UI to hand-drawn
                        sketches.
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
                      <h3 className="text-white text-xl font-bold">
                        Engineering Partner
                      </h3>
                      <p className="justify-left text-sm sm:justify-start text-white pt-8 xl:w-3/4 lg:w-3/4">
                        ✅ Feels the closest to a shipped product.
                      </p>
                      <p className="justify-left text-sm sm:justify-start text-white pt-1 xl:w-3/4 lg:w-3/4 pb-24">
                        ❌ High time and financial cost to create.
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Work with an engineering partner to build a prototype in
                        code.
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
                None of those options allowed a designer to build a believable
                prototype on their own
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500">
                  —quickly and easily.
                </span>
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
                My roles at Kinetic:
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
                        <div className="ml-3">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                      <h3 className="text-white text-xl font-bold">
                        Experience Strategy &amp; Vision:{" "}
                      </h3>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Drove our product's short-term feature development and
                        long-term vision by creatingour roadmap and evolving
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
                    <div className="w-full">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <div className="ml-3">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                      <h3 className="text-white text-xl font-bold">
                        Design Research &amp; Customer Insights:
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
                    <div className="w-full">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        <div className="ml-3">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                      <h3 className="text-white text-xl font-bold">
                        Design Execution &amp; Validation:{" "}
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
      <section className="text-white body-font bg-white">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-left">
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-6xl md:text-4xl font-bold py-6">
              Stand In
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-24">
              Our first attempt to address this challenge was Stand In—a
              Photoshop plug-in. Photoshop was the most widely used design
              software for product designers at the time. We built a layer
              integrated into Adobe’s software and allowed designers to create
              interactive prototypes straight from their files to their devices
              in real-time.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="text-white body-font bg-zinc-100">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-left">
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-4xl md:text-2xl font-bold py-6">
              Automatic Interaction
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-24">
              Stand In reads how the folders and layers are organized to build
              the interactive prototype. This video shows how our Photoshop
              panel worked as we added a scroll element. After creating the
              scroll folder, the existing design layers are moved into the
              parent folder. Suddenly, what was a static Photoshop file behaves
              like a native app.
            </p>
          </div>
        </div>
      </section> */}
      <section className="text-white body-font bg-violet-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                What we learned after launching the Photoshop plugin:
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
                    <div className="w-full">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        2
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
                    <div className="w-full">
                      <h2 className="title-font font-bold text-5xl font-bold text-white pb-2.5">
                        3
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
      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Transitioning from a Photoshop plugin to a Mac app
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-5xl md:text-3xl font-bold py-6">
                Techstars gave us the time and resources to take a deeper look at the problems facing our customers which led to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-500">
                  Kinetic.
                </span>{" "}

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-900 body-font bg-[#ECE5DF]">
        <div className="container px-5 py-28 mx-auto">
          <div className="text-center mx-auto">
            <div className="flex mt-px mx-auto mb-2"></div>
            <img
              src="/images/kinetic-icon-sm.png"
              alt=""
              className="mx-auto pb-4"
            />


            <h1 className="mb-4 text-6xl font-bold text-gray-900 lg:text-7xl md:text-1xl">
              <span>Kinetic</span>
            </h1>
            <div className="text-center">
              <p className="sm:justify-start lg:text-3xl md:text-xl mx-auto">
                A Mac App for building realistic prototypes and experimenting with
                real-time UI motion design on devices.
              </p>
            </div>
            <div className="text-left pt-28">
              <img
                src="/images/kinetic-desk-bg-1.png"
                alt=""
                className="mx-auto pb-4"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="text-white body-font bg-white bg-[url('/images/kinetic-desk-bg-1.png')] bg-[center] bg-[repeat-no]">
        <div className="container px-5 pb-124 mx-auto p-60">
          <div className="text-left">
            <div className="text-left px-5 pt-24">
            </div>
            <div className="text-left bg-white">
            
          </div>
        </div>
      </section> */}

      <section className="text-white body-font bg-white">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-left">
            <div className="text-left px-5 pt-24">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-24">
                I love this video of Kinetic and a paired device working together
                seamlessly in real-time. As the motion is created in the Mac App,
                the design is loaded automatically onto the device. The movement
                is triggered, allowing for rapid design refinements based on how
                the UI moves on the iPhone.
              </p></div>
          </div>
        </div>
      </section>


      <section className="text-black body-font bg-zinc-100">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Critical findings that shaped how we created Kinetic
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-zinc-50">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              1
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
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
            <h2 className="title-font font-thin text-4xl font-bold pb-2.5 pt-16">
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
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              2
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
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
            <h2 className="title-font font-thin text-4xl font-bold text-black pb-2.5 pt-16">
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
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold text-black pb-2.5">
              3
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
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
            <h2 className="title-font font-thin text-4xl font-bold text-black pb-2.5 pt-16">
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
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              4
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
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
              <a href="http://www.beccacm.com">Becca Charlier-Matthews</a> &amp;
              art direction by Kat.
            </p>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                First Kinetic Release              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-zinc-100">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-left">
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-4xl md:text-2xl font-bold py-6">
              This recording shows an early version of Kinetic.
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-24">
              Our initial release had motion customization hidden and standardized. We learned that designers wanted more control over the physics and motion specifics. I also reduced the visual styling for the buttons and UI elements to increase hierarchy while minimizing visual noise.
            </p>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Last Kinetic Release             </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-zinc-100">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-left">
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-4xl md:text-2xl font-bold py-6">
              A later version of Kinetic with an updated UX and UI for improved usability.            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-24">
              This version of Kinetic shows how we incorporated the feedback and insights we learned from previous versions. I developed a way to establish a "future state" of an element for designers to move on the screen as a way to design motion without a timeline editor.
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black pb-24">
              We also brought the contextual menu concept from Stand In to allow for more granular control over UI elements.            </p>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Outcomes: What we learned after launching Kinetic
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              1
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
            </div>
            <div className="lg:text-3xl md:text-2xl font-bold">
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
            <h2 className="title-font font-thin text-4xl font-bold pb-2.5 pt-16">
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
      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="text-left">
            <h2 className="title-font font-bold text-5xl font-bold pb-2.5">
              2
            </h2>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
            </div>
            <div className="lg:text-3xl md:text-2xl font-bold">
              Our price point was too high
            </div>
            <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
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
            <h2 className="title-font font-thin text-4xl font-bold pb-2.5">
              “Give me a one-time fee or other options for monthly pricing.”
            </h2>
            <p className="justify-left text-l sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              <span className="font-bold">Product Designer,</span> startup (Exit
              Interview Quote)
            </p>
            <h2 className="title-font font-thin text-4xl pb-2.5 pt-12">
              "Make a different pricing model. I want a cheaper monthly fee or,
              more preferable; I want a single license fee. I don't want to pay
              monthly.”
            </h2>
            <p className="justify-left text-l sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
              <span className="font-bold">UX & UI Designer,</span> small product
              agency (Exit Interview Quote)
            </p>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-violet-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Essential product lessons I learned
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
                        *
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
                        While I learned a lot and expanded my skillset with each of the roles I took on, listening to our customers was where I could uncover critical challenges they were facing with our product. I realized that your angriest customers are often your biggest advocates once you validate their feelings and respond to their feedback.
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
                      <h3 className="text-white text-xl font-bold">
                        Curiosity is key
                      </h3>
                      <p className="text-xl italic">
                        Develop resilance &amp; grit from change
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Its common to feel stuck and unsure of what to do next in rapid product cycles. I learned how important my natural curiosity was to our momentum. To capture lessons from the day I'd write the answers to two questions before I logged off. First, "what unexpected lessons or events happened to me today?" and second, "How can tomorrow be improved by what today has taught me?"                   </p>

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
                      <h3 className="text-white text-xl font-bold">
                        Be fearless and ship
                      </h3>
                      <p className="text-xl italic">
                        Learn to be comfortable with feeling exposed
                      </p>
                      <p className="justify-left text-sm sm:justify-start pt-8 xl:w-3/4 lg:w-3/4">
                        Designers find comfort in research. We can test our assumptions and make changes by learning early and often. There are real-world experiences and inputs that you can't test for during the research phase—even with incredible prototypes. The best customer insights only come after you've shipped a product and dare to listen to feedback.
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
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Reflection
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-bl body-font bg-gray-900 text-white">
        <div className="container px-5 pt-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-5xl md:text-3xl font-bold py-6">
                From Sunset
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-l md:text-md">
                Out of our frustrations as product makers, we took a stand and said, "this must be better." For two years, we dedicated our lives to improving how designers created device experiences. We were inspired to make engaging products easy for teams to ship. Ultimately, we shut down Kinetic in 2015. I’ll always feel deep gratitude for Stand In & Kinetic for teaching me to:
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="text-bl body-font bg-white">
        <div className="container px-5 pt-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-5xl md:text-3xl font-bold py-6 ">
                to Sunrise
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                My journey with Kinetic and Stand In ultimately led me to the kind of design that connects deeply with my personality, skills, and valuesearly-stage product design. After we shut Kinetic down, I spent the next 5 years helping other early-stage founders with end-to-end product design          </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
