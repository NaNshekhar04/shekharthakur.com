import Image from "next/image"
import Shekhar from '../app/assets/shekhar--img.jpg'

export default function Home() {
  return (
    <main className="grid-wrapper">
      <div className="card1 gap-7">
        <Image className="ml-5 mt-2.4 rounded-tl-[30px] rounded-br-[30px]"
          src={Shekhar} alt={"hello"}
          width={200}
          height={200}
        />
        <div className="myInfo text-left">
          <p className="text-[#A8ACC1]">ENGINEER, SAAS ENTHUSIAST, CRICKETER</p>
          <h1 className="text-[#fff] font-semibold text-[36px] whitespace-normal mb-2">Shekhar Thakur.</h1>
          <p className="text-[#9f9f9f]">I&apos;m a Full Stack Engineer by Profession and Cricketer by passion based in Mumbai.</p>
        </div>
        <div className="arrow">
          <div className="center-con">
            <div className="round">
              <div id="cta">
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
              </div>
            </div>
          </div>
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
