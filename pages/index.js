import Head from "next/head"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import LargeCard from "../Components/LargeCard"
import MediumCard from "../Components/MediumCard"
import { SmallCards } from "../Components/SmallCards"

export default function Home() {
  const exploreData = [{ "img": "https://links.papareact.com/5j2", "location": "London", "distance": "45-minute drive" }, { "img": "https://links.papareact.com/1to", "location": "Manchester", "distance": "4.5-hour drive" }, { "img": "https://links.papareact.com/40m", "location": "Liverpool", "distance": "4.5-hour drive" }, { "img": "https://links.papareact.com/msp", "location": "York", "distance": "4-hour drive" }, { "img": "https://links.papareact.com/2k3", "location": "Cardiff", "distance": "45-minute drive" }, { "img": "https://links.papareact.com/ynx", "location": "Birkenhead", "distance": "4.5-hour drive" }, { "img": "https://links.papareact.com/kji", "location": "Newquay", "distance": "6-hour drive" }, { "img": "https://links.papareact.com/41m", "location": "Hove", "distance": "2-hour drive" }]

  const cardsData = [{ "img": "https://links.papareact.com/2io", "title": "Outdoor getaways" }, { "img": "https://links.papareact.com/q7j", "title": "Unique stays" }, { "img": "https://links.papareact.com/s03", "title": "Entire homes" }, { "img": "https://links.papareact.com/8ix", "title": "Pet allowed" }]
  return (
    <div>
      <Head><title>Airbnb</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBbOv-RLvK63LZkt-Fx9KJCNch_znVMePNQ&usqp=CAU" /></Head>

      <div className=" ">

        <Header />

        <Banner />

        {/* main section */}


        <main className="max-w-7xl mx-auto px-8">

          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>



            {/* Pull cards from server static rendering*/}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData.map(({ img, distance, location }) => (
                <h1>
                  <SmallCards
                    key={img}
                    img={img}
                    distance={distance}
                    location={location}
                  />
                </h1>
              ))}
            </div>


          </section>



          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

            <h2>
              <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
                {cardsData?.map(({ img, title }) => (
                  < MediumCard
                    key={img}
                    img={img}
                    title={title}
                  />
                ))}
              </div>
            </h2>
          </section>



          <section>
            <LargeCard img="https://links.papareact.com/4cj"
              title='The Greatest Outdoors'
              description='Wishlists curated by Airbnb'
              buttonText='Get Inspired'
            />
          </section>

        </main>


        <Footer />





      </div>

      <div>

      </div>
    </div >
  )
}


/* 
export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData
    }
  }
}; */


