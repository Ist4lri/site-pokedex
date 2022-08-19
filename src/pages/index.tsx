import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <html>
    <section id="answer">
        <h2 id="name"></h2>
        <h3 id="type"></h3>
        <h4 id="weight"></h4>
        <h5 id="pokeId"></h5>
        <Image id="image" src="" width={200} height={200}/>
    </section>
    </html>
  )
}

export default Home