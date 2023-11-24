export default function Main() {
  return (
    <div className="">
      <section className="text-black body-font bg-[#F49393]">
        <div className="m-auto py-12 md:py-0 content-center">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="py-4 pl-4 md:py-8 md:pl-8 lg:py-16 lg:pl-16 mx-auto text-left ">
              <div className="my-8 mx-8 md:mx-4 lg:mx-0 lg:my-auto flex flex-col">
                <h1 className="mb-2 text-9xl font-bold tracking-tighter text-[#217070] lg:text-8xl md:text-7xl">
                  <span>Kat Miller</span>
                </h1>
                <div className="text-gray-500 dark:text-gray-400">
                  <p className="text-md font-normal leading-normal text-[#804D4D]">
                    Techstars-backed founder specializing in 0→1 life sciences
                    and creator economy products, I blend innovation in device
                    design with a passion for the unexpected. Championing small
                    moments with big impacts, I'm dedicated to empowering
                    creators and advancing life sciences through transformative
                    technology
                  </p>
                  <div className="mx-auto text-black mt-4">
                    <a
                      className="flex items-center text-[#B85959] hover:text-[#217070]"
                      href="http://cal.com/kat/30min"
                    >
                      {" "}
                      Schedule a Meeting
                    </a>{" "}
                  </div>
                  <div className="mt-4 lg:mt-16">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8 md:pt-4 lg:pt-0">
                      <div className="h-full flex flex-col items-left text-left">
                        <h2 className="title-font font-medium text-md text-[#217070] pb-2.5">
                          Lead Product Designer
                        </h2>
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#B85959] to-[#6F9D9D] inline-flex mb-2"></div>
                        <h3 className="text-[#B85959] text-sm font-bold">
                          Matterport
                        </h3>
                        <p className="text-[#B85959] text-xs font-medium">
                          2023
                        </p>
                      </div>

                      <div className="h-full flex flex-col items-left text-left">
                        <h2 className="title-font font-medium text-md text-[#217070] pb-2.5">
                          Fractional Founding Designer
                        </h2>
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#B85959] to-[#6F9D9D] inline-flex mb-2"></div>
                        <h3 className="text-[#B85959] text-sm font-bold">
                          Tiny Creative
                        </h3>
                        <p className="text-xs text-[#B85959]">2015-2023</p>
                      </div>

                      <div className="h-full flex flex-col items-left text-left">
                        <h2 className="title-font font-medium text-md text-[#217070] pb-2.5">
                          Design Director
                        </h2>
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#B85959] to-[#6F9D9D] inline-flex mb-2"></div>
                        <h3 className="text-[#B85959] text-sm font-bold">
                          4G Clinical
                        </h3>
                        <p className="text-xs text-[#B85959]">2022-2022</p>
                      </div>

                      <div className="h-full flex flex-col items-left text-left">
                        <h2 className="title-font font-medium text-md text-[#217070] pb-2.5">
                          Co-founder, Head of Product
                        </h2>
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#B85959] to-[#6F9D9D] inline-flex mb-2"></div>
                        <h3 className="text-[#B85959] text-sm font-bold">
                          Kinetic
                        </h3>
                        <p className="text-xs text-[#B85959]">2013-2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-32 md:h-auto bg-cover bg-center flex-1 m-0 bg-[url('/images/nebula.jpg')]" />
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-[#FFF4EC]">
        <div className="container m-auto py-12 md:py-28">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className=" mx-auto text-left">
              <h4 className="mb-2 font-bold uppercase text-black lg:text-xs md:text-xxs">
                Case Study
              </h4>
              <h1 className="mb-8 md:mb-10 text-5xl font-bold text-black lg:text-7xl md:text-1xl ">
                <span>Everything changes when fingers hit glass.</span>
              </h1>
              <h2 className="mb-8 md:mb-10 text-l font-light text-black lg:text-1xl ">
                Kinetic was a Techstars-backed prototyping platform that helped
                product teams design, build and ship mobile experiences with
                over 10,400 beta signups.
              </h2>
              <span className="mx-auto text-black ">
                <a href="/kinetic">
                  <button className="group mt-1 font-semibold inline-flex items-center bg-black text-[#FFF4EC]  border border-2 border-black py-4 px-5 rounded hover:bg-[#FFF4EC] hover:text-black">
                    <span className="mr-2">View the Case Study</span>
                    <svg
                      className="w-4 h-4 color-[#FFF4EC] group-hover:color-white"
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="48"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>{" "}
                  </button>
                </a>
              </span>
            </div>
            <div className="text-left mx-auto flex justify-center">
              <video autoPlay loop className=" rounded-md m-auto">
                <source src="/video/kinetic-demo-short.mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-8 lg:py-12">
            <div className="flex items-center space-x-4 py-6 ">
              <img
                className="w-10 h-10 rounded-full"
                src="/images/falco.jpg"
                alt=""
              />
              <div className="font-medium dark:text-black">
                <div>
                  <a href="https://www.linkedin.com/in/antonyfalco/">
                    Antony Falco
                  </a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  CEO
                </div>
              </div>
            </div>

            <p className="text-left leading-tight text-2xl text-[#371802] lg:text-4xl  font-bold py-6">
              "Kat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99117] to-[#C65507]">
                brings order to the chaos
              </span>{" "}
              that characterizes all early project development when one must{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99117] to-[#C65507]">
                convert ideas
              </span>{" "}
              into a plan of action."
            </p>
            <p className="text-left leading-relaxed text-black pb-12">
              Kat is a high-impact leader who moves effortlessly from strategy
              to implementation. She combines a product designer's sense of how
              aesthetics should serve function with a product owner's analytical
              rigor. She brings order to the chaos that characterizes all early
              project development when one must convert ideas into a plan of
              action. A common thread in all Kat's endeavors is iterative
              research -- she tests hypotheses with her suspected audiences,
              learns their needs, trims away anything not needed for the initial
              personae and then retests. But none of this compares to Kat's
              character and strength. She meets even the most enormous
              challenges with creativity and optimism. She sets an example not
              just for her teammates but for the people, like me, who have known
              her over the years. You build great teams around talent but you
              build great companies around character.
            </p>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-[#3041D3]">
        <div className="m-auto py-12 md:py-0 content-center">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="py-4 pl-4 md:py-8 md:pl-8 lg:py-32 lg:pl-16 lg:pr-16 mx-auto text-left ">
              <div className="my-8 mx-8 md:mx-4 lg:mx-0 lg:my-auto flex flex-col">
                <h4 className="mb-2 font-bold uppercase text-white lg:text-xs md:text-xxs">
                  Essay
                </h4>
                <h1 className="mb-8 md:mb-0 text-5xl font-bold tracking-tight leading-6 text-[#C9BA32] lg:text-8xl md:text-1xl ">
                  <span>The In Between</span>
                </h1>
                <h3 className="mb-0 pt-4 md:mb-0 text-md font-light text-white lg:text-3xl ">
                  Resilience, discomfort, and advocacy in design & healthcare
                </h3>
                <span className="mb-10 pt-4 md:mb-10 text-md font-light text-white lg:text-l ">
                  As designers, we have the unique privilege and responsibility
                  to shape experiences, not just with aesthetics or
                  functionality, but with a deep understanding of the human
                  condition, much like the thoughtfully curated sounds in a
                  hospital - subtle, yet profoundly impactful.
                </span>
                <span className="text-black ">
                  <a href="/kinetic">
                    <button className="group mt-1 font-semibold inline-flex items-center bg-[#C9BA32] text-[#3041D3]  border border-2 border-[#C9BA32] py-4 px-5 rounded hover:bg-[#FFF4EC] hover:text-black">
                      <span className="mr-2">Read the Essay</span>
                      <svg
                        className="w-4 h-4 color-[#FFF4EC] group-hover:color-white"
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="48"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>{" "}
                    </button>
                  </a>
                </span>
              </div>
            </div>

            <div className="h-32 md:h-auto bg-cover bg-center flex-1 m-0 bg-[url('/images/nova.jpg')]" />
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-8 lg:py-12">
            <div className="flex items-center space-x-4 py-6">
              <img
                className="w-10 h-10 rounded-full"
                src="/images/hovey.jpg"
                alt=""
              />
              <div className="font-medium dark:text-black">
                <div>
                  <a href="https://www.linkedin.com/in/lisahovey/">
                    Lisa Hovey
                  </a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Chief of Staff
                </div>
              </div>
            </div>
            <p className="text-left leading-tight text-2xl  text-[#371802] lg:text-4xl font-bold py-6">
              "...truly the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99117] to-[#C65507]">
                most strategic
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99117] to-[#C65507]">
                systems-focused
              </span>{" "}
              designer I've ever worked with."
            </p>
            <p className="text-left leading-relaxed text-black pb-12">
              I sincerely hope I get to partner with Kat again in the future.
              Kat is such an incredible human and such a great leader for any
              team. She is so versatile, collaborative, intuitive, strategic,
              and thoughtful. I've worked with Kat in several areas from
              employee engagement and company communications to investor
              relations and strategic storytelling to overall design systems and
              UX. She approached each project in the same holistic way and
              ensured the right people were involved to get to the best
              solution. She is detail oriented, solutions-focused, passionate,
              and always comes to the table with a positive attitude. She is
              truly the most strategic and systems-focused designer I've ever
              worked with. Not only is she a very talented and creative
              designer, but the way she weaves in design thinking, design
              research, and her ability to bring teams together to solve a
              problem, she acts as an incredible "glue" for any org.
            </p>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-[#3CA8F3]">
        <div className="m-auto py-12 md:py-0 content-center">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="py-4 pl-4 md:py-8 md:pl-8 lg:py-32 lg:pl-16 lg:pr-16 mx-auto text-left ">
              <div className="my-8 mx-16 md:mx-4 lg:mx-0 lg:my-auto flex flex-col">
                <h4 className="mb-2 font-bold uppercase text-white lg:text-xs md:text-xxs">
                  Case Study
                </h4>
                <h1 className="mb-8 md:mb-0 text-5xl font-bold tracking-tight leading-6 text-[#AF4801] lg:text-8xl md:text-1xl ">
                  <span>Building a developer-native brand</span>
                </h1>
                <h3 className="mb-10 pt-4 md:mb-10 text-md font-light text-white lg:text-l ">
                  Building an authentic, developer-native brand and design
                  system for a YC & NEO backed startup.
                </h3>
                <span className="text-black ">
                  <a href="/kinetic">
                    <button className="group mt-1 font-semibold inline-flex items-center bg-[#AF4801] text-[#3CA8F3]  border border-2 border-[#AF4801] py-4 px-5 rounded hover:bg-[#3CA8F3] hover:text-black">
                      <span className="mr-2">Read the Case Study</span>
                      <svg
                        className="w-4 h-4 color-[#FFF4EC] group-hover:color-white"
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="48"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>{" "}
                    </button>
                  </a>
                </span>
              </div>
            </div>

            <div className="h-32 md:h-auto bg-cover bg-center flex-1 m-0 bg-[url('/images/dunes.jpg')]" />
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-8 lg:py-12">
            <div className="flex items-center space-x-4 py-6">
              <img
                className="w-10 h-10 rounded-full"
                src="/images/chen.jpeg"
                alt=""
              />
              <div className="font-medium dark:text-black">
                <div>
                  <a href="https://www.linkedin.com/in/cheneric86/">
                    Eric Chen
                  </a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Director of People Ops
                </div>
              </div>
            </div>
            <p className="text-left leading-relaxed text-[#371802] text-2xl lg:text-4xl md:text-2xl font-bold py-6">
              "Kat is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99117] to-[#C65507]">
                joy
              </span>{" "}
              to work with!"
            </p>
            <p className="text-left leading-relaxed text-black pb-12">
              Kat's visual design prowess and passion for implementing design as
              a practice really up-leveled the couple of projects that we worked
              on together. However, what stuck out to me most is her ability to
              listen, ask the right questions, and build a case for better
              design decisions with her stakeholders. In all of my interactions
              with Kat, I left those conversations feeling like the work product
              or process was significantly improved. Kat is well-qualified to
              lead a design practice and be a trusted advisor to senior leaders.
              She's a joy to work with!
            </p>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container m-auto xl:max-w-6xl">
          <div
            className="mx-8 md:mx-4 lg:mx-auto text-left py-20
          "
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="/images/cm.jpeg"
                alt=""
              />
              <div className="font-medium dark:text-black">
                <div>
                  <a href="https://www.linkedin.com/in/beccacm/">
                    Becca Charlier-Matthews
                  </a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Designer
                </div>
              </div>
            </div>
            <p className="text-left leading-tight text-2xl text-[#371802] lg:text-4xl font-bold py-6">
              "Kat is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99117] to-[#C65507]">
                great designer, art director, and mentor.
              </span>
              "
            </p>
            <p className="text-left leading-relaxed text-black pb-8">
              Kat Miller is a great designer, art director, and mentor. I’ve
              worked with her for several years in both an agency setting and as
              a freelancer. I’ve had the pleasure of working with her on several
              freelance projects, our most recent being building the branding
              and website designs for Foxbox. One of Kat’s many strengths is
              being able to articulate a clear design vision while seamlessly
              working with individual contributors to bring that vision to life.
              On any large design project, it’s important to have a design
              leader who understands and communicates the needs and priorities
              of a project while also creating an environment that encourages
              collaboration and feedback. Kat is that person and I think any
              organization can be confident in her abilities as a creative
              director and manager.{" "}
            </p>

            <a
              className="text-sm font-bold text-[#C65507] hover:text-[#F99117]"
              href="https://www.linkedin.com/in/millerkat/"
            >
              Read more recommendations on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="text-black body-font text-sm bg-[#FFF4EC]">
        <div className="container flex m-auto pt-8 md:flex-row flex-col">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-2">
            <p className="justify-center items-center flex">
              <a
                className="hover:text-blue-500  ml-2"
                href="mailto:kat@km.design"
              >
                kat@km.design
              </a>
            </p>
          </div>
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-2">
            <p className="justify-center items-center flex">
              <a
                className="font-bold hover:text-blue-400 ml-2"
                href="https://dribbble.com/kat"
              >
                dribbble.com/kat
              </a>
            </p>
          </div>
          <div className="mx-8 md:mx-4 lg:mx-auto text-left  py-2">
            <p className="justify-center items-center flex">
              <a
                className="hover:text-blue-500  ml-2"
                href="https://read.cv/katm"
              >
                read.cv/katm
              </a>
            </p>
          </div>
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-2">
            <p className="justify-center items-center flex">
              <a
                className="hover:text-blue-500  ml-2"
                href="https://twitter.com/avoiceandname"
              >
                @avoiceandname
              </a>
            </p>
          </div>
          <div className="mx-8 md:mx-4 lg:mx-auto text-left pb-12 py-2">
            <p className="justify-center items-center flex">
              <a
                className="hover:text-blue-500  ml-2"
                href="https://cal.com/kat"
              >
                cal.com/kat
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
