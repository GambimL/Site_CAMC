import { Layout } from "../../components/Layout";
import { Speaker } from "../../components/Speaker";

export function Speakers() {

    return (
        <>
            <Layout>
                <div className="grid grid-cols-6 py-20">
                    <div className="col-start-2 col-span-4 rounded-md">
                        <Speaker />
                    </div>
                </div>
                <div className="grid grid-cols-6 py-20">
                    <div className="col-start-2 col-span-4">
                        <Speaker />
                    </div>
                </div>
                <div className="grid grid-cols-6 py-20">
                    <div className="col-start-2 col-span-4">
                        <Speaker />
                    </div>
                </div>

            </Layout>
        </>

    )

}