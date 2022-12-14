export default function Main() {
  return (
    <div className="">
      <section className="container bg-white m-auto flex flex-col justify-center xl:max-w-6xl mb-8 md:pt-24">
        <div className="flex flex-col lg:flex-row m-auto my-auto ">
          <div className="bg-[#0a0120] sm:bg-white">
            <img
              className="w-full h-auto max-w-sm	sm:rounded-full my-auto "
              src="/images/kat.jpg"
              alt=""
            />
          </div>
          <div className="my-8 mx-8 md:mx-4 lg:mx-0 lg:my-16 lg:my-auto lg:ml-16 flex flex-col">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-black lg:text-8xl md:text-7xl">
              <span>Kat Miller</span>
            </h1>
            <div className=" text-gray-500 dark:text-gray-400">
              <p className="text-xl font-normal leading-normal text-black dark:text-black">
                Techstars-backed founder and designer{" "}
                <span className="text-transparent font-bold bg-clip-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-400 via-violet-500 to-blue-400">
                  specializing in 0→1 products for devices,
                </span>{" "}
                from mobile to 10-foot UIs.
              </p>
              <div className="mx-auto text-black mt-4">
                <a
                  className="flex items-center text-fuchsia-500 hover:text-violet-500"
                  href="mailto:kat@km.design"
                >
                  <svg
                    className="w-4 h-4 color-pink-400 group-hover:color-pink-500 inline mr-2 mt-px"
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span className="mr-2 ">Email Kat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 lg:my-16">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-8 md:mx-4 lg:mx-0">
            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-black pb-2.5">
                Design Director
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-red-600 to-orange-400 inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">4G Clinical</h3>
              <p className="text-gray-500 text-sm">2022-2022</p>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-black pb-2.5">
                Partner, Design
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-500 inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">Tiny Creative</h3>
              <p className="text-sm text-gray-500">2015-2021</p>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-black pb-2.5">
                Co-Founder, Design
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">Stand In/Kinetic</h3>
              <p className="text-sm text-gray-500">2013-2015</p>
            </div>

            <div className="h-full flex flex-col items-left text-left">
              <h2 className="title-font font-medium text-lg text-black pb-2.5">
                Art Director, UX / UI
              </h2>
              <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-purple-800 inline-flex mb-2"></div>
              <h3 className="text-gray-500 text-md">Citizen</h3>
              <p className="text-sm text-gray-500">2011-2013</p>
            </div>
          </div>
        </div>
      </section>


      <section className="text-black body-font bg-violet-400">
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
                  <button className="group mt-1 font-semibold inline-flex items-center bg-black text-violet-400  border border-2 border-black py-4 px-5 rounded hover:bg-violet-400 hover:text-black">

                    <span className="mr-2">View the Case Study</span>
                    <svg
                      className="w-4 h-4 color-violet-400 group-hover:color-white"
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
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
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

      <section className="text-white body-font bg-black">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-8 lg:py-12">
            <div className="flex items-center space-x-4 py-6 ">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHlSYh_4p9r8g/profile-displayphoto-shrink_100_100/0/1517692339757?e=1674691200&v=beta&t=YbgvSuc-QhDKqb5PasoEd7lzXjTEc-fwiqWOUGJf-M0"
                alt=""
              />
              <div className="font-medium dark:text-white">
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

            <p className="text-left leading-tight text-2xl text-white lg:text-4xl  font-bold py-6">
              "Kat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">
                brings order to the chaos
              </span>{" "}
              that characterizes all early project development when one must{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                convert ideas
              </span>{" "}
              into a plan of action."
            </p>
            <p className="text-left leading-relaxed text-gray-500 pb-12">
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

      <section className="text-black body-font bg-sky-500">
        <div className="container m-auto pt-12 md:pt-28">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className=" mx-auto text-left">
              <h3 className="mb-2 font-bold uppercase text-black lg:text-sm md:text-xs">
                Case Study
              </h3>
              <h1 className="mb-4 md:mb-10 text-5xl font-bold text-black lg:text-7xl md:text-1xl ">
                <span>Help other makers by sharing what you’ve Made.</span>
              </h1>
              <h2 className="mb-4 md:mb-10 text-xl font-light text-black lg:text-3xl ">
                Built and shipped the MVP of Made in two weeks.
              </h2>
              <span className="mx-auto text-black ">
                <a href="https://cal.com/kat/30min">
                  <button className="group mt-1 font-semibold inline-flex items-center bg-black text-sky-500  border border-2 border-black py-4 px-5 rounded hover:bg-sky-500 hover:text-black">
                    <svg
                      className="w-4 h-4 color-sky-500 group-hover:color-white"
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                    </svg>{" "}
                    <span className="ml-2">Schedule time to learn more</span>
                  </button>
                </a>
              </span>
            </div>
            <div className="text-left mx-auto flex justify-center">
              <img
                src="/images/made-ui.jpg"
                alt=""
                className="self-start m-auto object-scale-down max-w-xs md:max-w-sm lg:pt-24"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-8 lg:py-12">
            <div className="flex items-center space-x-4 py-6">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQEVVwi4Nu-EAA/profile-displayphoto-shrink_100_100/0/1646784911662?e=1674691200&v=beta&t=hEAsZekwrKYb127ymbyyYZtNgA6qsPV6WlN2zUdbWZo"
                alt=""
              />
              <div className="font-medium dark:text-white">
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
            <p className="text-left leading-tight text-2xl  text-white lg:text-4xl font-bold py-6">
              "...truly the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                most strategic
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                systems-focused
              </span>{" "}
              designer I've ever worked with."
            </p>
            <p className="text-left leading-relaxed text-gray-500 pb-12">
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

      <section className="text-black body-font bg-emerald-500">
        <div className="container m-auto pt-12 md:pt-12 ">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className=" mx-auto text-left">
              <h3 className="mb-2 font-bold uppercase text-black lg:text-sm md:text-xs">
                Case Study
              </h3>
              <h1 className="mb-8 md:mb-10 text-5xl font-bold text-black lg:text-7xl md:text-1xl ">
                <span>An empathetic chatbot built for families in crisis.</span>
              </h1>
              <h2 className="mb-8 md:mb-10 text-xl font-light text-black lg:text-3xl">
                Foxbox, a 501(c)3 nonprofit, has supported over 70 infants, and
                their families, across 4 children's hospitals since 2021.
              </h2>
              <div className="mx-auto text-black ">
                <a href="https://cal.com/kat/30min">
                  <button className="group mt-1 font-semibold inline-flex items-center bg-black text-emerald-500  border border-2 border-black py-4 px-5 rounded hover:bg-emerald-500 hover:text-black">
                    <svg
                      className="w-4 h-4 color-emerald-500 group-hover:color-white"
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                    </svg>{" "}
                    <span className="ml-2">Schedule time to learn more</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="text-left mx-auto flex justify-center">
              <img
                src="/images/foxbox-ui.jpg"
                alt=""
                className="self-start m-auto object-scale-down max-w-xs md:max-w-sm lg:pt-24"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-8 lg:py-12">
            <div className="flex items-center space-x-4 py-6">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHmr7fcIbxByA/profile-displayphoto-shrink_100_100/0/1600795640583?e=1674691200&v=beta&t=f-iY4ERV80qWKB4TqkSm_FuNwTEF8LrpPcvvcH29Gpk"
                alt=""
              />
              <div className="font-medium dark:text-white">
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
            <p className="text-left leading-relaxed text-white text-2xl lg:text-4xl md:text-2xl font-bold py-6">
              "Kat is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">
                joy
              </span>{" "}
              to work with!"
            </p>
            <p className="text-left leading-relaxed text-gray-500 pb-12">
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

      <section className="text-black body-font bg-amber-500">
        <div className="container m-auto py-12 md:py-28">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className=" mx-auto text-left">
              <h3 className="mb-2 font-bold uppercase text-black lg:text-sm md:text-xs">
                Case Study
              </h3>
              <h1 className="mb-8 text-5xl font-bold text-black lg:text-7xl md:text-1xl ">
                <span>Better, Together. Faster, Together.</span>
              </h1>

              <h2 className="mb-8 text-xl font-light text-black lg:text-3xl ">
                Built the brand and conference experience in less than 6
                weeks for a 300+ attendee all hands.
              </h2>

              <span className="mx-auto text-black">
                <a href="https://cal.com/kat/30min">
                  <button className="group mt-1 font-semibold inline-flex items-center bg-black text-amber-500  border border-2 border-black py-4 px-5 rounded hover:bg-amber-500 hover:text-black">
                    <svg
                      className="w-4 h-4 color-amber-500 group-hover:color-white"
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                    </svg>{" "}
                    <span className="ml-2">Schedule time to learn more</span>
                  </button>
                </a>
              </span>
            </div>

            <div className="text-left mx-auto">
              <div className="grid grid-cols-2 gap-2 max-w-md ">
                <video
                  autoPlay
                  loop
                  className="bg-pink-500 rounded-md row-span-2"
                >
                  <source src="/video/april-badge.mp4" />
                </video>

                <img
                  className="flex-1 place-self-stretch object-cover m-0 w-auto h-auto rounded-md"
                  src="/images/badges.jpg"
                  alt=""
                />
                <img
                  className="flex-1 place-self-stretch object-cover m-0 w-auto h-auto rounded-md"
                  src="/images/stickers.jpg"
                  alt=""
                />

                <img
                  className="col-span-2  rounded-md"
                  src="/images/together-wide.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container m-auto xl:max-w-6xl">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-20
          ">
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQFWXlvbQ18_rQ/profile-displayphoto-shrink_100_100/0/1564757108379?e=1674691200&v=beta&t=oQprtdU9PhZ46K1orKFIc87dB57YboIAFGpcTFvVLnU"
                alt=""
              />
              <div className="font-medium dark:text-white">
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
            <p className="text-left leading-tight text-2xl text-white lg:text-4xl font-bold py-6">
              "Kat is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
                great designer, art director, and mentor.
              </span>
              "
            </p>
            <p className="text-left leading-relaxed text-gray-500 pb-8">
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
              className="text-sm font-bold hover:text-blue-400"
              href="https://www.linkedin.com/in/millerkat/"
            >
              Read more recommendations on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="bg-violet-700">
        <div className="container px-5 py-0.5 mx-auto"></div>
      </div>
      <div className="bg-sky-400">
        <div className="container px-5 py-0.5 mx-auto"></div>
      </div>
      <div className="bg-emerald-600">
        <div className="container px-5 py-0.5 mx-auto"></div>
      </div>
      <div className="bg-amber-400">
        <div className="container px-5 py-0.5 mx-auto"></div>
      </div>
      <div className="bg-orange-500">
        <div className="container px-5 py-0.5 mx-auto"></div>
      </div>


      <section className="text-black body-font bg-white">
        <div className="container flex m-auto pt-8 md:flex-row flex-col">
          <div className="mx-8 md:mx-4 lg:mx-auto text-left py-2">
            <p className="justify-center items-center flex">
              <svg
                className="w-4 h-4 color-amber-500 group-hover:color-white"
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>{" "}
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
              <svg
                className="w-4 h-4"
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>{" "}
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
              <svg
                className="w-4 h-4 color-amber-500 group-hover:color-white"
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
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="var(--geist-fill)"
                />
              </svg>{" "}
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
              <svg
                className="w-4 h-4 color-amber-500 group-hover:color-white"
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
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>{" "}
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
