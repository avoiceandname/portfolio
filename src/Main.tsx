
// import VisibilitySensor from "react-visibility-sensor";

import { Vector3 } from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

export default function Main() {
  return (
    <section className="text-black body-font">
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-28 mx-auto">

        </div>
      </section>

      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Kat Miller</span>
          </h1>
          <p className="text-xl font-normal leading-normal text-white dark:text-white lg:w-2/3">
            is a Techstars-backed founder and product designer passionate about shipping products for devices — from mobile to 10-foot experiences. Her work is powered by the belief that design can improve lives through <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">unexpected joy</span>.
          </p>
        </div>
      </div>


      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-left">

            <div className="container pt-4 pb-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white pb-2.5">
                        Design Director
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 inline-flex"></div>
                      </div>
                      <h3 className="text-gray-500 text-md">4G Clinical</h3>

                      <p className="text-sm">
                        2022-2022
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white pb-2.5">
                        Partner, Design
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 inline-flex"></div>
                      </div>
                      <h3 className="text-gray-500 text-md">Tiny Creative</h3>
                      <p className="text-sm">
                        2015-2021
                      </p>

                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white pb-2.5">
                        Co-Founder, Design
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 inline-flex"></div>
                      </div>
                      <h3 className="text-gray-500 text-md">Stand In</h3>
                      <p className="text-sm">
                        2013-2015
                      </p>

                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-left text-left">

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white pb-2.5">
                        Art Director, UX / UI
                      </h2>
                      <div className="flex mt-px mb-2 justify-left">
                        <div className="w-9 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-800 inline-flex"></div>
                      </div>
                      <h3 className="text-gray-500 text-md">Citizen</h3>
                      <p className="text-sm">
                        2011-2013
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-orange-500">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-amber-400">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-emerald-500">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-sky-400">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>

      <section className="text-white body-font bg-violet-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Case Studies
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-violet-800">
        <div className="container px-5 py-28 mx-auto">
          <div className="text-left">

            <h1 className="mb-16 text-7xl font-bold text-white lg:text-7xl md:text-1xl w-1/2">
              <span>Prototype on devices in real time.</span>
            </h1>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-white inline-flex"></div>
            </div>
            <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 text-white">
              Kinetic
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white">
              UX, UI, Strategy
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-violet-700">
        <div className="container px-5 py-28 mx-auto">
          <div className="text-left">
            <h1 className="mb-16 text-7xl font-bold text-black lg:text-7xl md:text-1xl w-1/2">
              <span>Help other makers by sharing what you’ve Made.</span>
            </h1>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-black inline-flex"></div>
            </div>
            <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 text-black">
              Made
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black">
              Mobile UX, UI
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-violet-500">
        <div className="container px-5 py-28 mx-auto">
          <div className="text-left">
            <h1 className="mb-16 text-7xl font-bold text-black lg:text-7xl md:text-1xl w-1/2">
              <span>An empathetic chatbot built for families in crisis.</span>
            </h1>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-black inline-flex"></div>
            </div>
            <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 text-black">
              Foxbox
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black">
              UX, Service Design
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-violet-400">
        <div className="container px-5 py-28 mx-auto">
          <div className="text-left">
            <h1 className="mb-16 text-7xl font-bold text-black lg:text-7xl md:text-1xl w-1/2">
              <span>Better, Together. Faster, Together.</span>
            </h1>
            <div className="flex mt-px mb-2 justify-left">
              <div className="w-9 h-0.5 rounded-full bg-black inline-flex"></div>
            </div>
            <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 text-black">
              4G Clinical
            </p>
            <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black">
              Design Direction, Brand Design
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-400">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-emerald-600">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-amber-400">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-orange-500">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>
      <section className="bg-red-600">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>


      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-3xl md:text-2xl">
                Recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-4xl md:text-2xl font-bold py-6">
                "Kat <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">brings order to the chaos</span> that characterizes all early project development when one must <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">convert ideas</span> into a plan of action."
              </p>
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500">
                Kat is a high-impact leader who moves effortlessly from strategy to implementation. She combines a product designer's sense of how aesthetics should serve function with a product owner's analytical rigor. She brings order to the chaos that characterizes all early project development when one must convert ideas into a plan of action. A common thread in all Kat's endeavors is iterative research -- she tests hypotheses with her suspected audiences, learns their needs, trims away anything not needed for the initial personae and then retests. But none of this compares to Kat's character and strength. She meets even the most enormous challenges with creativity and optimism. She sets an example not just for her teammates but for the people, like me, who have known her over the years. You build great teams around talent but you build great companies around character.
              </p>
              <div className="flex mt-px justify-left">
                <p className="justify-left sm:justify-start text-white font-bold pt-8">
                  Antony Falco
                </p>
              </div>
              <div className="flex mt-px justify-left">
                <p className="justify-left sm:justify-start text-white pb-10">
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-4xl md:text-2xl font-bold py-6">
                "...truly the <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-500">most strategic</span> and <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-400">systems-focused</span> designer I've ever worked with."
              </p>
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500">
                I sincerely hope I get to partner with Kat again in the future. Kat is such an incredible human and such a great leader for any team. She is so versatile, collaborative, intuitive, strategic, and thoughtful.

                I've worked with Kat in several areas from employee engagement and company communications to investor relations and strategic storytelling to overall design systems and UX. She approached each project in the same holistic way and ensured the right people were involved to get to the best solution. She is detail oriented, solutions-focused, passionate, and always comes to the table with a positive attitude.

                She is truly the most strategic and systems-focused designer I've ever worked with. Not only is she a very talented and creative designer, but the way she weaves in design thinking, design research, and her ability to bring teams together to solve a problem, she acts as an incredible "glue" for any org.</p>
              <div className="flex mt-px justify-left">
                <p className="justify-left sm:justify-start text-white font-bold pt-8">
                  Lisa Hovey
                </p>
              </div>
              <div className="flex mt-px justify-left">
                <p className="justify-left sm:justify-start text-white pb-10">
                  Chief of Staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-black">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-4xl md:text-2xl font-bold py-6">
                "Kat is a <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500">joy</span> to work with!"
              </p>
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500">
                Kat's visual design prowess and passion for implementing design as a practice really up-leveled the couple of projects that we worked on together. However, what stuck out to me most is her ability to listen, ask the right questions, and build a case for better design decisions with her stakeholders. In all of my interactions with Kat, I left those conversations feeling like the work product or process was significantly improved. Kat is well-qualified to lead a design practice and be a trusted advisor to senior leaders. She's a joy to work with!
              </p>
              <div className="flex justify-left">
                <p className="justify-left sm:justify-start text-white font-bold pt-8">
                  Eric Chen
                </p>
              </div>
              <div className="flex mt-px justify-left">
                <p className="justify-left sm:justify-start text-white pb-10">
                  Director of People Ops
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-4 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-4xl md:text-2xl font-bold py-6">
                "Kat is a <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-800">great designer, art director, and mentor.</span>"
              </p>
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500">
                Kat Miller is a great designer, art director, and mentor. I’ve worked with her for several years in both an agency setting and as a freelancer. I’ve had the pleasure of working with her on several freelance projects, our most recent being building the branding and website designs for Foxbox.    One of Kat’s many strengths is being able to articulate a clear design vision while seamlessly working with individual contributors to bring that vision to life. On any large design project, it’s important to have a design leader who understands and communicates the needs and priorities of a project while also creating an environment that encourages collaboration and feedback. Kat is that person and I think any organization can be confident in her abilities as a creative director and manager.   </p>
              <div className="flex justify-left">
                <p className="justify-left sm:justify-start text-white font-bold pt-8">
                  Becca Charlier-Matthews
                </p>
              </div>
              <div className="flex mt-px justify-left">
                <p className="justify-left sm:justify-start text-white pb-10">
                  Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex mt-px mb-2 justify-left">
            <span className="justify-left sm:justify-start">
              💞    <strong class="underline decoration-1 decoration-line underline-offset-6 decoration-red-100 hover:decoration-blue-400"><a href="https://facebook.com/">Read more recommendations</a></strong> on LinkedIn.
            </span>
          </div>
        </div>
      </section>

      <section className="bg-sky-400">
        <div className="container px-5 py-px mx-auto">
        </div>
      </section>
      <section className="bg-emerald-600">
        <div className="container px-5 py-px mx-auto">
        </div>
      </section>
      <section className="bg-amber-400">
        <div className="container px-5 py-px mx-auto">
        </div>
      </section>
      <section className="bg-orange-500">
        <div className="container px-5 py-px mx-auto">
        </div>
      </section>
      <section className="bg-red-600">
        <div className="container px-5 py-0.5 mx-auto">
        </div>
      </section>


    </section >
  );
}