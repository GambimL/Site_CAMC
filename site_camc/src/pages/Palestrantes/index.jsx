import { Layout } from "../../components/Layout";
import { Palest } from "../../components/palestrantes";
import { Link } from "../../components/Link";


export function Palestrantes() {

    return(
        <>
            <Layout>
                <div className="grid grid-cols-6 py-20">
                    <div className="col-start-2 col-span-4">
                        <Palest />
                    </div>
                </div>
                <div className="grid grid-cols-6 py-20">
                    <div className="col-start-2 col-span-4">
                        <Palest />
                    </div>
                </div>
                <div className="grid grid-cols-6 py-20">
                    <div className="col-start-2 col-span-4">
                        <Palest />
                    </div>
                </div>
                
            </Layout>
        </>   
        
    )

}