import { Layout } from "../../components/Layout";
import { Link } from "../../components/Link";

export const Schedule = () => {

  return (
    <Layout>
        <div className="flex flex-col h-screen top-0 left-0">
        <div className="flex-1 py-2 mx-2 " >
          <div className="flex justify-center">
            <Link titles={["07/11", "08/11", "09/11"]} />
          </div>
        </div>

        {/* <main className="flex space-x-4">
            <Link titles={["07/11", "08/11", "09/11"]} />
        </main> */}
    </div >
      </Layout >

  )
}