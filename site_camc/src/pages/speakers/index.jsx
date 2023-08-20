import { Layout } from "../../components/Layout";
import fotoavatar from "../../assets/fotominha1.png"
import { Speaker } from "../../components/Speaker";
import "../../styles/styles.css";

export function Speakers() {


    return (
        <Layout>
            <div className="h-screen w-full">
                <Speaker description="Bacharel em Física pela Universidade Federal do Rio Grande do Sul (UFRGS). 
                            Supervisor de Proteção Radiológica certificado pela CNEN em instalação na área de medicina nuclear. 
                            Especialista em Física Médica - Medicina Nuclear pelo Hospital de Clínicas de Porto Alegre (HCPA). 
                            Mestrando em Radioproteção e Dosimetria no Instituto de Radioproteção e Dosimetria (IRD/CNEN). 
                            Sócio Administrador da empresa Diferencial Física Médica. 
                            " lattes="Lattes: http://lattes.cnpq.br/5638604094028913" avatar={fotoavatar} />
                <Speaker description="Lucas Gambim é estudantes de Física Médica e possui.
                            experiencia com programação em linguagens como c++ python e React, 
                            foi estudante de informática e participa de uma pesquisa,
                            envoveldo simulações monte carlo e c++
                            porro maxime totam" lattes="Lattes: http://lattes.cnpq.br/5638604094028913" avatar={fotoavatar} />
                <Speaker description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Voluptas alias eos quaerat in non recusandae numquam maiores, 
                             porro maxime totam provident mollitia tempora accusamus earum assumenda placeat autem et deserunt.
                             accusamus earum assumenda placeat autem et deserunt
                             porro maxime totam" lattes="Lattes: http://lattes.cnpq.br/5638604094028913" avatar={fotoavatar} />
            </div>
        </Layout>
    )

}