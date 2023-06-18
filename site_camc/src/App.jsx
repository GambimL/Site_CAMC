import fotofundo from './assets/fotofundo.png'
import { Header } from "./components/Header/Header"

export function App() {

  return (
    <div className="h-screen w-screen 
    bg-cover bg-center 
    scale-100 aspect-video sm:bg-cover" 
    style={{backgroundImage: `url('https://static.wixstatic.com/media/48eda6_164fe6637efc458a9da5aa35089087a9~mv2.png/v1/fill/w_1348,h_979,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/48eda6_164fe6637efc458a9da5aa35089087a9~mv2.png')`}}>
      <Header />
    </div>
  )
}