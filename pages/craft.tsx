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
      <section className="text-black body-font bg-[#3041D3]">
        <div className="m-auto py-12 md:py-0 content-center">
          <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="py-4 pl-4 md:py-8 md:pl-8 lg:py-32 lg:pl-16 lg:pr-16 mx-auto text-left ">
              <div className="my-8 mx-8 md:mx-4 lg:mx-0 lg:my-auto flex flex-col">
                <h4 className="mb-2 font-bold uppercase text-white lg:text-xs md:text-xxs">
                  Essay
                </h4>
                <h1 className="mb-8 md:mb-0 text-5xl font-bold tracking-tight leading-6 text-[#C9BA32] lg:text-8xl md:text-1xl ">
                  <span>Resilience, discomfort, & advocacy</span>
                </h1>
                <h3 className="mb-0 pt-4 md:mb-0 text-md font-light text-white lg:text-3xl ">
                  How healthcare environments and practioners have impacted my
                  design craft
                </h3>
                <span className="mb-10 pt-4 md:mb-10 text-md font-light text-white lg:text-l ">
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
                In the unadorned reality of a hospital room, each beep of a
                monitor was a stark reminder of life's precariousness. Here,
                amidst the day-to-day of pediatric oncology and palliative care,
                my understanding of design, my life’s work, shifted
                fundamentally. It became clear that the method’s true value lies
                in its blend of intuitive understanding, the tangible rawness of
                experience, and the clarity that observation can bring. This
                combination is what makes design not just a job, but a deeply
                human pursuit that's validated by real stories and data, and
                driven by the resilience we all share.
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
                Walking through the hospital's hallways, where every room held
                stories of both joy and struggle, shaped my professional
                principles. I realized that the resilience, the willingness to
                face discomfort, and the commitment to advocate for those we
                serve are as crucial in the craft of design as they are in the
                practice of healthcare. These aren't just abstract concepts;
                they're the concrete foundations that inform every decision I
                make, pushing me to create experiences that endure and
                meaningfully serve people's needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-white">
        <div className="container px-5 py-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left xl:w-3/4 lg:w-3/4 text-black lg:text-5xl text-3xl font-light py-6">
                Designers with the{" "}
                <span className="text-[#3041D3] font-bold">
                  grit to push through challenges
                </span>{" "}
                and the{" "}
                <span className="text-[#3041D3] font-bold">
                  perseverance to refine and improve our work continually
                </span>{" "}
                are the ones who will make the biggest impact.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                In observing the resilience of those in the hospital, it wasn't
                just the physical sturdiness of the building that struck me—it
                was the quiet, determined resolve of families, like mine, facing
                each day. This resilience is something I embrace, in life and in
                my work. Designers with the grit to push through challenges and
                the perseverance to refine and improve our work continually are
                the ones who will make the biggest impact. Our designs should
                offer more than just longevity; they should provide reassurance
                and a steady hand in the ever-changing flow of life.
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
                Advocacy is about ensuring our designs{" "}
                <span className="text-[#C9BA32] font-bold">
                  truly serve and represent the people
                </span>{" "}
                who use our products and services.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4  lg:text-l md:text-md">
                Advocacy in palliative care is about more than just offering
                support—it's about actively defending each person's right to
                dignity and joy, especially in the toughest times. In the design
                field, we have much to learn from palliative care practitioners.
                In the quiet moments between what hope was, and what it had to
                become, our providers stood up for us when we couldn’t find our
                footing. Designers need to listen to feedback, no matter how raw
                or tough, and we then use it to champion essential changes. This
                process goes beyond making things look good; it's about ensuring
                our designs truly serve and stand for the people who use our
                products and services, enhancing their own craft, time, and
                lives in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-white">
        <div className="container px-5 py-12 pb-24 mx-auto">
          <div className="text-left">
            <div className="text-left">
              <p className="text-left xl:w-3/4 lg:w-3/4 text-black lg:text-5xl text-3xl font-light py-6">
                <span className="text-[#3041D3] font-bold">
                  Learn to live in the ‘in-between’
                </span>
                —in design, this means not simply papering over the difficult
                parts but using them as a starting point for progression.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md">
                Discomfort was a given in the hospital, a companion to every
                child and family member there. But instead of turning away from
                it, we learned to sit with it, to find the lessons within it, to
                live in the ‘in-between’. In design, this means not simply
                papering over the difficult parts but using them as a starting
                point for progression. Our designs don't just aim to ease the
                journey; they aim to be a part of it, acknowledging the rough
                patches. Designers have an obligation to reduce discomfort and
                distraction; shining a light on those moments to forge paths to
                new solutions.
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
                These are the principles I carry with me, ensuring that{" "}
                <span className="text-[#C9BA32] font-bold">
                  every design choice I make
                </span>{" "}
                is an honest reflection of our collective humanity.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 lg:text-l md:text-md">
                The principles, and lessons in craft, I've embraced—resilience,
                a readiness to sit with discomfort, and a commitment to
                advocacy—stem from my time as my baby’s caregiver in our
                children’s hospital and are now integral to my design ethos.
                They drive us to craft products and services that provide more
                than functionality; they offer meaning and support in a
                sometimes indifferent world. These are the principles I carry
                with me, infusing my work with the lessons learned from days and
                nights spent by my baby’s side, ensuring that every design
                choice I make is an honest reflection of our collective
                humanity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <p className=" bg-[#3041D3] text-left xl:w-3/4 lg:w-3/4 text-[#3041D3] lg:text-5xl text-3xl font-bold py-6">
                I realized that the{" "}
                <span className="text-[#C9BA32]">
                  resilience, the willingness to face discomfort, and the
                  commitment to advocate for those we serve
                </span>
                are as crucial in the craft of design as they are in the
                practice of healthcare.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md py-12">
                Walking through the hospital's hallways, where every room held
                stories of both joy and struggle, shaped my professional
                principles. I realized that the resilience, the willingness to
                face discomfort, and the commitment to advocate for those we
                serve are as crucial in the craft of design as they are in the
                practice of healthcare. These aren't just abstract concepts;
                they're the concrete foundations that inform every decision I
                make, pushing me to create experiences that endure and
                meaningfully serve people's needs.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md py-12">
                In observing the resilience of those in the hospital, it wasn't
                just the physical sturdiness of the building that struck me—it
                was the quiet, determined resolve of families, like mine, facing
                each day. This resilience is something I embrace, in life and in
                my work. Designers with the grit to push through challenges and
                the perseverance to refine and improve our work continually are
                the ones who will make the biggest impact. Our designs should
                offer more than just longevity; they should provide reassurance
                and a steady hand in the ever-changing flow of life.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md py-12">
                Advocacy in palliative care is about more than just offering
                support—it's about actively defending each person's right to
                dignity and joy, especially in the toughest times. In the design
                field, we have much to learn from palliative care practitioners.
                In the quiet moments between what hope was, and what it had to
                become, our providers stood up for us when we couldn’t find our
                footing. Designers need to listen to feedback, no matter how raw
                or tough, and we then use it to champion essential changes. This
                process goes beyond making things look good; it's about ensuring
                our designs truly serve and stand for the user, enhancing their
                own craft, time, and lives in meaningful ways.
              </p>
              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md py-12">
                Discomfort was a given in the hospital, a companion to every
                child and family member there. But instead of turning away from
                it, we learned to sit with it, to find the lessons within it, to
                live in the ‘in-between’. In design, this means not simply
                papering over the difficult parts but using them as a starting
                point for progression. Our designs don't just aim to ease the
                journey; they aim to be a part of it, acknowledging the rough
                patches. Designers have an obligation to reduce discomfort and
                distraction; shining a light on those moments to forge paths to
                new solutions.
              </p>

              <p className="text-left leading-relaxed xl:w-3/4 lg:w-3/4 text-black lg:text-l md:text-md py-12">
                The principles, and lessons in craft, I've embraced—resilience,
                a readiness to sit with discomfort, and a commitment to
                advocacy—stem from my time as my baby’s caregiver in our
                children’s hospital and are now integral to my design ethos.
                They drive us to craft products and services that provide more
                than functionality; they offer meaning and support in a
                sometimes indifferent world. These are the principles I carry
                with me, infusing my work with the lessons learned from days and
                nights spent by my baby’s side, ensuring that every design
                choice I make is an honest reflection of our collective
                humanity.
              </p> */
}
