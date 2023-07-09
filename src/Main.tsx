export default function Main() {
  return (
    <div className="">
      <section className="container bg-white m-auto flex flex-col justify-center xl:max-w-6xl mb-8 md:pt-24">
        <div className="flex flex-col lg:flex-row my-auto ">
          <div className="bg-[#FFF4EC] sm:bg-[#FFF4EC]"></div>
          <div className="my-8 mx-8 md:mx-4 lg:mx-0 lg:my-16 lg:my-auto flex flex-col">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-[#E2A174] lg:text-8xl md:text-7xl">
              <span>Kat Miller</span>
            </h1>
            <div className="text-gray-500 dark:text-gray-400">
              <p className="text-xl font-normal leading-normal text-black dark:text-black">
                Techstars-backed founder and designer specializing in 0→1
                products for devices. Advocate for embracing unexpected joy.
                Champion of tiny moments that make a big impact.
              </p>
              <div className="mx-auto text-black mt-4">
                <a
                  className="flex items-center text-[#592D0E] hover:text-violet-500"
                  href="mailto:kat@km.design"
                >
                  {" "}
                  Contact Kat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 lg:my-16">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-8 md:mx-4 lg:mx-0">
            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-[#592D0E] pb-2.5">
                Lead Product Designer
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#FECB8F] to-[#C65507] inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">Matterport</h3>
              <p className="text-gray-500 text-sm">2023</p>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-[#592D0E] pb-2.5">
                Founding Designer
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#FECB8F] to-[#C65507] inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">GitStart</h3>
              <p className="text-sm text-gray-500">2023-2023</p>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-[#592D0E] pb-2.5">
                Design Director
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#FECB8F] to-[#C65507] inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">4G Clinical</h3>
              <p className="text-sm text-gray-500">2022-2022</p>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-[#592D0E] pb-2.5">
                Partner, Design
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-[#FECB8F] to-[#C65507] inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">Tiny Creative</h3>
              <p className="text-sm text-gray-500">2015-2021</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black body-font bg-[#FFF4EC]">
        <div className="container m-auto py-12 md:py-28">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className=" mx-auto text-left">
              <h3 className="mb-2 font-bold uppercase text-black lg:text-sm md:text-xs">
                Case Study
              </h3>
              <h1 className="mb-8 md:mb-10 text-5xl font-bold text-black lg:text-7xl md:text-1xl ">
                <span>Everything changes when fingers hit glass.</span>
              </h1>
              <h2 className="mb-8 md:mb-10 text-xl font-light text-black lg:text-3xl ">
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
          <div className="mx-8 md:mx-4 lg:mx-auto text-left pb-12 py-2">
            <p className="justify-center items-center flex">
              <a
                className="hover:text-blue-500  ml-2"
                href="https://twitter.com/avoiceandname"
              >
                @avoiceandname
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
