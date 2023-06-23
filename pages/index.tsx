import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jenelle Hayes — Multidisciplinary Designer</title>
        <meta
          name="description"
          content="Crafting well-thought visual identities and strategically designed websites. Available for new projects in late autumn 2023."
        />
      </Head>
      <main className="grid min-h-screen px-4 py-10 text-white bg-primary sm:px-10 place-content-center">
        <div className="grid max-w-5xl font-thin md:grid-cols-2 md:gap-14">
          <div>
            <div className="mb-4">
              <h1 className="mb-0">
                <b>Jenelle Hayes</b> — Multidisciplinary Designer
              </h1>
              <span>she/her</span>
            </div>
            <p>
              Available to take on new projects in late autumn 2023. If you are
              interested in working together, please{' '}
              <a
                href="mailto:hello@jenellehayes.ca"
                className="italic font-medium"
              >
                get in touch
              </a>
              .
            </p>
            <div>
              <h2>Projects I Do</h2>
              <p>
                Create <strong>visual identities</strong> and 
                <strong>brand standards</strong>. <strong>Digital</strong>{' '}
                designs, including responsive 
                <strong>websites</strong> made with{' '}
                <strong>accessibility</strong>, <strong>user experience</strong>{' '}
                and best practices in mind, such as <strong>SEO</strong> and
                <strong> information architecture</strong>. Fluent with all{' '}
                <strong>Adobe </strong>
                products, <strong>Figma</strong>, and I&apos;m currently
                learning <strong>Webflow</strong>. I&apos;ve developed{' '}
                <strong>social media strategies</strong>, template sets,
                <strong> wireframes</strong>, and <strong>mockups</strong>.
                 Print too! Experience with
                <strong> editorial</strong> layouts, <strong>adverts</strong>,{' '}
                <strong>signage</strong>,<strong> business cards</strong>,
                government and legal <strong>textbooks</strong>, and a 
                <strong>cookbook</strong>.
              </p>
            </div>
          </div>
          <div>
            <h2>Work &amp; Projects</h2>
            <p>
              Nerder, Miller Thomson LLP, Rundle College, Blake, Cassels &amp;
              Graydon LLP, Calgary Counselling Centre, and the Government of
              Alberta.
            </p>
            <h2>About</h2>
            <p>
              Crafting in my homeland of <strong>Canada</strong> &#45; on
              traditional and ancestral territories of Treaty 7 and the
              Blackfoot Confederacy: Kainai, Piikani and Siksika, the
              Tsuut&apos;ina Nation and Stoney Nakoda First Nation, where I
              honour the histories, languages, and cultures of First Nations,
              Metis, Inuit, and all First Peoples of Canada &#45; I make with
              passion and care. Outside of honing my skills, I enjoy exploring
              nature, attending the orchestra, and visiting an art gallery or a
              museum. I care about the environment and limit my impact on it.
              I&apos;m formally trained in new media production and design, as
              well as print communications.{' '}
              <a
                href="https://drive.google.com/file/d/1sivzGO4B_5gr6uK23qG3UfiwEuuPLp6r/view"
                className="italic font-medium"
              >
                {' '}
                <u>Portfolio</u> coming soon!{' '}
              </a>{' '}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
