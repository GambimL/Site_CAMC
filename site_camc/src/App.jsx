import { Header } from "./components/Header/Header"
import styles from '../src/styles/global.scss';

export function App() {

  return (
    <>
      <Header />
      <div className="bg-fixed bg-no-repeat h-screen bg-background-initial flex flex-col bg-cover"
      >
        <div className="grid grid-row-2 gap-10 content-center h-screen">

          <img src='https://static.wixstatic.com/media/48eda6_71c4d245ff094ec7aeaeaca82b827744~mv2.png/v1/crop/x_0,y_420,w_1080,h_320/fill/w_799,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20(3).png' className=" justify-center justify-self-center"></img>

          <div className="h-20 flex justify-center gap-24 items-center">
            <p className="jusify-center  ">Tecnologias Emergentes nas<span> Grandes Áreas da Física Médica</span></p>
            <p>16, 17 e 18<span>de Nov.</span></p>
          </div>

        </div>
      </div >

    </>
  )
}
