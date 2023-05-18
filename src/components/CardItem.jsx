import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import LoadingIcon from "../assets/loading.json";
import { Link } from "react-router-dom";

const CardItem = () => {
  const [games, setGames] = useState();
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    const fetchGameData = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
      );

      const data = await response.data;
      console.log(data);

      setGames(data);
      setNextPage(data.next);
    };

    fetchGameData();
  }, []);

  console.log("nextPage", nextPage);

  if (!games) {
    return (
      <div className="flex justify-center items-center min-h-[100vh]">
        <Lottie animationData={LoadingIcon} />
      </div>
    );
  } else {
    return (
      <div className="mx-auto grid w-full items-center space-y-4 px-4 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 sm:px-6">
        {games &&
          games.results.map((game) => (
            <div
              key={game.id}
              className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px]"
            >
              <img
                src={game.background_image}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                {game?.genres?.forEach((genre) => (
                  <>
                    {console.log(genre.name)}
                    <div key={genre.id} className="badge">
                      {genre.name}
                    </div>
                    ;
                  </>
                ))}
                <h1 className="text-lg font-semibold text-white">
                  {game.name}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          ))}
        <div className="btn-group flex justify-center mt-8 mb-8">
          <button className="btn">«</button>
          <button className="btn">Page 22</button>
          <Link to={nextPage}>
            <button className="btn">»</button>
          </Link>
        </div>
      </div>
    );
  }
};
export default CardItem;
