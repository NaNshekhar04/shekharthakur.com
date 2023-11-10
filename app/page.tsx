import Image from "next/image"
import Shekhar from '../app/assets/shekhar--img.jpg'

export default function Home() {
  return (
    <main className="grid-wrapper">
      <div className="card1">
        <Image className="ml-5 mt-5"
          src={Shekhar} alt={"hello"}
          width={200}
          height={200}
        />
        <div className="myInfo">
            <p>Lorem ipsum dolor sit amet.</p>
            <h1>Shekhar Thakur</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.</p>
        </div>
        <div className="arrow">
          <p>Arrow</p>
        </div>

      </div>
      <div className="card2">Hello 2</div>
      <div className="card3">Hello 3</div>
      <div className="card4">Hello 4</div>
      <div className="card5">Hello 5</div>
      <div className="card6">Hello 6</div>
      <div className="card7">Hello 7</div>
      <div className="card8">Hello 8</div>
      <div className="card9">Hello 9</div>
    </main>
  )
}
