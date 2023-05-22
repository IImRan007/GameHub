import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const [gameData, setGameData] = useState(null);

  let { gameId } = useParams();

  useEffect(() => {
    const fetchSingleGameData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${gameId}?key=${
            import.meta.env.VITE_API_KEY
          }`
        );

        const data = await response.data;
        console.log(data);
        setGameData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleGameData();
  }, [gameId]);

  return (
    <>
      {gameData && (
        <>
          <div className="mx-auto grid w-full items-center space-y-4 px-4 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 sm:px-6">
            <div className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px]">
              <LazyLoadImage
                effect="blur"
                src={gameData.background_image}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                  {gameData.name}
                </h1>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-[22px]">Description:</h2>
            <div className="overflow-x-auto">
              <table className="table w-full border-none">
                <tbody>
                  {gameData?.rating && (
                    <tr>
                      <td>Rating:</td>
                      <td>{gameData.rating && gameData?.rating}/5</td>
                    </tr>
                  )}
                  {gameData?.developers && (
                    <tr>
                      <td>Developers:</td>
                      <td>
                        {gameData.developers && gameData.developers[0].name}
                      </td>
                    </tr>
                  )}
                  {gameData.released && (
                    <tr>
                      <td>Release Date:</td>
                      <td>
                        {gameData.released &&
                          new Date(gameData.released).toLocaleDateString()}
                      </td>
                    </tr>
                  )}
                  {gameData.updated && (
                    <tr>
                      <td>Updated On:</td>
                      <td>
                        {gameData.updated &&
                          new Date(gameData.updated).toLocaleDateString()}
                      </td>
                    </tr>
                  )}
                  {gameData.website && (
                    <tr>
                      <td>Website:</td>
                      <td>
                        {gameData.website && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                            href={gameData.website}
                          >
                            Click Here
                          </a>
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <hr className="border-[#DC8E42] border-solid" />
            {gameData.description_raw && (
              <>
                <div className="mt-8 mb-8">
                  <p>{gameData?.description_raw.slice(0, 500)}...</p>
                </div>
                <hr className="border-[#DC8E42] border-solid" />
              </>
            )}
            {gameData.platforms && (
              <div className="mt-4">
                <h2 className="text-[22px]">Available On:</h2>
                <ul className="ml-4">
                  {gameData?.platforms?.map((platform) => (
                    <li className="list-disc" key={platform.platform.id}>
                      {platform.platform.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {gameData.reddit_name && (
              <div className="mt-4">
                <h2 className="text-[22px]">Follow on Reddit:</h2>
                <a target="_blank" rel="noreferrer" href={gameData.reddit_url}>
                  {gameData.reddit_name}
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default GameDetails;
