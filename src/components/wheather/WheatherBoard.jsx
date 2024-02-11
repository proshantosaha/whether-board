import AddToFavorite from "./AddToFavorite";
import WhearherCondition from "./WhearherCondition";
import WheatherHeadline from "./WheatherHeadline";
import { useWeather } from "../../hooks";
import { useContext } from "react";
// import { weatherContext } from "../../context";

const WheatherBoard = () => {
  const { weatherData, loading } = useWeather();

  // const { wheatherData, loading } = useContext(wheatherContext);
  console.log(weatherData);
  return (
    <div>
      <main>
        {/* <!-- Begin Wheather --> */}
        <section className="">
          <div className="container">
            <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                {/* Add to favorite */}

                {loading?.state ? (
                  <p>loading...</p>
                ) : (
                  <>
                    {" "}
                    <AddToFavorite />
                    <WheatherHeadline />
                    <WhearherCondition />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Wheather --> */}
      </main>
    </div>
  );
};

export default WheatherBoard;
