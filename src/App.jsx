import React from "react";
import Header from "./components/header/Header";
import WheatherBoard from "./components/wheather/WheatherBoard";

const App = () => {
  return (
    // className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center"
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WheatherBoard />
        </section>
      </main>
    </div>
  );
};

export default App;
