import '../../styles/styles.css'
import { Layout } from "../../components/Layout";
import { Course } from "../../components/Course";

export function Home() {
  return (
    <>
      <Layout>
        <div className="bg-fixed bg-no-repeat h-screen bg-background-initial flex flex-col bg-cover"
        >
          <div className="grid gap-10 content-center h-screen">

            <img src='https://static.wixstatic.com/media/48eda6_71c4d245ff094ec7aeaeaca82b827744~mv2.png/v1/crop/x_0,y_420,w_1080,h_320/fill/w_799,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20(3).png' className=" justify-center justify-self-center"></img>

            <div className="h-20 flex justify-center gap-24 items-center">
              <p className="jusify-center">Tecnologias Emergentes nas<span> Grandes Áreas da Física Médica</span></p>
              <p>7, 8 e 9<span>de Nov.</span></p>
            </div>

          </div>
        </div>
      </Layout>
      <div className="grid pt-5 md:p-8 space-y-4 h-screen justify-center items-center gap-10">
        <h1 className="dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center">
          IX jornada de física médica
        </h1>
        <div className='grid grid-cols-2 gap-6'>

          <Course description="Determinação da unidade monitora em planejamento radioterápico" speaker="Carolina M. Isabela L. e Matheus F." />

          <Course description="O que fazer após a graduação? Empreender!" speaker="Irradiation - Empresa Júnior de Física Médica" />

          <Course description="Radioterapia Hands On: Planejamento de casos ao vivo no sistema Varian Eclipse™" speaker="William Trinca" />

          <Course description="Inteligência Artificial em linguagem Python com aplicação em imagens médicas" speaker="Bruno Yukio Takara" />

        </div>
      </div>
    </>
  )
}
