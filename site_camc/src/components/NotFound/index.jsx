import Error from "../../assets/error.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export function NotFound() {

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="grid lg:grid-row gap-10 place-items-center">
          <img src={Error} alt="error image" className="w-64" />
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold">
            Página não encontrada!
          </h1>
          <Link to="home">
            <Button text="Página Inicial" />
          </Link>
        </div>
      </div>
    </>
  );
}