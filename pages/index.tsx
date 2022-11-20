import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jenelle Hayes - Multidisciplinary Designer</title>
        <meta
          name="description"
          content="Available to take on new projects early January 2023."
        />
      </Head>
      <main className="bg-primary text-white min-h-screen px-4 py-10 grid place-content-center">
        <div className="grid md:grid-cols-2 md:gap-14 container font-thin">
          <div>
            <div className="mb-4">
              <h1 className="mb-0">
                <b>Jenelle Hayes</b> — Multidisciplinary Designer
              </h1>
              <span>she/her</span>
            </div>
            <p>
              Available to take on new projects early January 2023. If you are
              interested in working together, please{" "}
              <a
                href="mailto:contact@jenellehayes.com"
                className="font-medium italic"
              >
                get in touch
              </a>
              .
            </p>
            <div>
              <h2>Projects I Do</h2>
              <p>
                Create <strong>visual identities</strong> and{" "}
                <strong>brand standards</strong>, Build digital and{" "}
                <strong>web designs</strong> made with the user experience and
                best practices in mind. <strong>Print</strong> too! Experience with {" "} 
                <strong>editorial</strong> layouts,{" "} <strong>adverts</strong>,{" "} 
                <strong>signage</strong>, government and legal textbooks, and a{" "} 
                <strong>cookbook</strong>.
              </p>
            </div>
          </div>
          <div>
            <h2>Work &amp; Projects</h2>
            <p>
              Nerder, Rundle College, Blakes, Miller Thomson, Calgary
              Counselling Centre, and the Government of Alberta.
            </p>
            <h2>About</h2>
            <p>
              Born in <strong>Canada</strong>, I craft out of my homeland with passion and care. Spending time outdoors - exploring nature, attending the orchestra, and visiting an art gallery or a museum are things I enjoy doing. I care about the environment and am trying to limit my impact on it. My education has me formally trained in new media production and design, as well as print communications.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
