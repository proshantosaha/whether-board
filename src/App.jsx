import React from "react";
import Header from "./components/header/Header";
import WheatherBoard from "./components/wheather/WheatherBoard";
import { WeatherProvider } from "./provider";

const App = () => {
  return (
    // className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center"
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WheatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default App;
