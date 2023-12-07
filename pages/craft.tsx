import Head from "next/head";
import Header from "../src/Header";
import Footer from "../src/Footer";

export default function Contact() {
  return (
    <div className="bg-black  text-white">
      <Head>
        <title>Resilience, discomfort, & advocacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="text-black body-font bg-[#3041D3]">
        <div className="m-auto py-12 md:py-0 content-center">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="py-4 pl-4 md:py-8 md:pl-8 lg:py-32 lg:pl-16 lg:pr-16 mx-auto text-left ">
              <div className="my-8 mx-8 md:mx-4 lg:mx-0 lg:my-auto flex flex-col">
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
                <p className="mb-2 font-bold uppercase text-white lg:text-sm text-[12px]">
                  Essay
                </p>
                <h1 className="lg:mb-2 md:mb-0 text-5xl font-bold tracking-tight md:leading-6 text-[#C9BA32] lg:text-8xl md:text-8xl ">
                  <span>Resilience, discomfort, & advocacy</span>
                </h1>
                <h3 className="mb-0 pt-4 md:mb-0 text-2xl font-light text-white lg:text-3xl ">
                  How healthcare environments and practioners have impacted my
                  design craft
                </h3>
                <span className="mb-0 pt-4 md:mb-10 text-md font-light text-white lg:text-l ">
                  As designers, we have the unique privilege and responsibility
                  to shape experiences, not just with aesthetics or
                  functionality, but with a deep understanding of the human
                  condition, much like the thoughtfully curated sounds in a
                  hospital - subtle, yet profoundly impactful.
                </span>
              </div>
            </div>

            <div className="h-32 md:h-auto bg-cover bg-center flex-1 m-0 bg-[url('/images/nova.jpg')]" />
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-gray-200">
        <div className="container px-5 py-16 pb-12 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="leading-relaxed xl:w-3/4 lg:w-3/4 text-black font-italic lg:text-sm text-[14px]">
                <h4 className="font-bold pb-2 text-[#3041D3]">Preface</h4>I
                spent almost a year living in our children's hospital caring for
                my infant son while he went through cancer treatments. The
                following is a reflection of lessons I learned and how I apply
                similar thinking to my design craft. My hope is that this
                reflection helps you, with your craft, and invites more
                curiosity about how the practices of healthcare and design are
                interwoven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container px-5 py-16 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left xl:w-3/4 lg:w-3/4 text-black lg:text-5xl text-3xl font-light py-6">
                This is what makes{" "}
                <span className="text-[#3041D3] font-bold">
                  design not just a job, but a deeply human pursuit.
                </span>
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                In the quiet sanctuary of a hospital room, where my family
                navigated the complexities of pediatric oncology treatment, I
                discovered profound lessons about the craft of design from an
                unexpected place—the craft of healthcare. This demanding
                journey, intertwined with the compassionate world of pediatric
                palliative care, became a crucible for invaluable lessons in
                resilience, advocacy, and the embrace of discomfort — insights
                that have profoundly shaped my approach to design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-[#3041D3]">
        <div className="container px-5 py-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left xl:w-3/4 lg:w-3/4 lg:text-5xl text-3xl font-light py-6">
                Resilience, embracing discomfort, and the commitment to advocacy
                are as crucial in the{" "}
                <span className="text-[#C9BA32] font-bold">
                  craft of design as they are in the practice of healthcare.
                </span>
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-l md:text-md">
                <p className="text-left leading-relaxed text-light py-2 text-[#C9BA32] text-black lg:text-2xl md:text-xl">
                  {" "}
                  <span className="font-bold">Resilience:</span> Infusing Warmth
                  into Functionality{" "}
                </p>
                Amongst the clinical backdrop of the hospital, with its
                machinery rhythmically sustaining life, I found an opportunity
                to infuse a sense of warmth, humanity, and joy. By simply adding
                playful googly eyes to the intimidating machinery — a dialysis
                machine, an IV pump, and a vital signs monitor — I transformed
                them into more than functional objects; they became friendly
                presences in our room—moments of levity and playfulness for our
                family and our staff. This act was a lesson in resilience,
                reinforcing that design is not just about durability or
                functionality of a moment, but the true impact lies in the
                environments and systems we craft. With every service, product,
                brand, and moment we design, we have a choice—
                <span className="font-bold">
                  do we aim for the status quo or do we seek out opportunities
                  to elevate unexpected moments with joy, warmth, and humanity?
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-white">
        <div className="container px-5 py-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="h-32 md:h-auto bg-cover bg-center flex-1 m-0 bg-[url('/images/burst.jpg')]" />
                <span className="py-6">
                  <p className="text-left leading-relaxed py-12 xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                    <p className="text-left leading-relaxed text-light py-2 text-[#3041D3] text-black lg:text-2xl md:text-xl">
                      {" "}
                      <span className="font-bold">Advocacy:</span> Designing
                      with Empathy and Understanding{" "}
                    </p>
                    The pediatric palliative care team, in their unwavering
                    dedication, embodied a level of advocacy that went beyond
                    medical care. Their approach, centered on understanding and
                    empathizing with patients and families, resonated deeply
                    with me. It emphasized that true advocacy in design, and in
                    healthcare, is about more than meeting someone’s needs; it's
                    about connecting with their emotional and psychological
                    experiences. This realization reinforced my belief that
                    effective design should be empathetic, considering not just
                    the practical utility but also the emotional impact of our
                    design decisions on a person's life.
                  </p>

                  <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                    <p className="text-left leading-relaxed text-light py-2 text-[#3041D3] lg:text-2xl md:text-xl">
                      {" "}
                      <span className="font-bold">Embracing Discomfort:</span> A
                      Pathway to Meaningful Experiences{" "}
                    </p>
                    In the pediatric ICU, where resilience and empathy were
                    daily constants, I learned the value of embracing
                    discomfort. The architectural design choice to include day
                    beds for parents, born from listening to the experiences and
                    needs of nurses and families, highlighted the importance of
                    addressing discomfort directly. This approach to design —
                    understanding and addressing the challenges people face — is
                    about turning obstacles into opportunities for meaningful
                    and impactful solutions. It's about using discomfort not as
                    a barrier or excuse, but as a driving force for crafting
                    designs that genuinely resonate with and support someone’s
                    needs.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-[#3041D3]">
        <div className="container px-5 py-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left xl:w-3/4 lg:w-3/4 text-white lg:text-5xl text-3xl font-light py-6">
                <span className="text-[#C9BA32] font-bold">Design is a </span>
                deeply human pursuit that's validated by real people and data,
                and driven by the resilience we all share.
              </p>
              <span>
                <p className="text-left pb-6 leading-relaxed xl:w-3/4 lg:w-3/4 text-white lg:text-l md:text-md">
                  These insights from my time in our pediatric hospital have
                  become the guiding principles of my design philosophy. They
                  underscore the belief that design, at its best, serves
                  humanity, enhancing the quality of life for individuals and
                  contributing positively to the broader world. As I continue in
                  my career, these principles guide my craft and are what makes
                  the practice of design not just a job, but a deeply human
                  pursuit that's validated by real people and data, and driven
                  by the resilience we all share.
                </p>
                <p className="text-left font-bold leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-l md:text-md">
                  Find moments to add googly eyes.
                </p>
              </span>
            </div>
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
