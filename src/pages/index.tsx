import type { NextPage } from 'next'
import Image from 'next/image'
import Presentation from 'components/pagePresentation'
import Request from 'components/request'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <Request/>
      <div id="answer">
        <h2 id="name"></h2>
        <h3 id="type"></h3>
        <h4 id="weight"></h4>
        <h5 id="pokeId"></h5>
        <Image id="image" alt="" src="" width={200} height={200}/>
      </div>
    </div>
  )
}

export default Home