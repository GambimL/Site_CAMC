import { Layout } from "../../components/Layout";
import fotoavatar from "../../assets/avatarExample.jpg"
import { Speaker } from "../../components/Speaker";
import { descriptionSpeakers } from "../../utils/Constants";
import "../../styles/styles.css";

export function Speakers() {


    return (
        <Layout>
            <div>
            {descriptionSpeakers.map((speaker, id) => {
              return(<Speaker description={speaker.description} lattes={speaker.lattes} avatar={speaker.avatar} nameSpeaker={speaker.nameSpeaker} />)
            })}
            </div>
        </Layout>
    )

}