import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import DiscScreen from "./components/discComponents/DiscScreen";
import ProfScreen from "./components/profComponents/ProfScreen";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="DiscScreen" element={<DiscScreen />} />
          <Route path="ProfScreen" element={<ProfScreen />} />

        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}


export default App;
