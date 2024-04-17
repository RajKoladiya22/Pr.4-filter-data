import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./header";
import { data, categories } from "./data";
import { FoodCard, FilterFoodCard } from "./foodcard";
import { useState } from "react";

function App() {
  const [final, setFinal] = useState("");
  const filterData = (a) => {
    setFinal(a);
  };

  return (
    <div className="container">
      <div className="row">
        <Head categories={categories} data={data} filterData={filterData} />
        <div className="col-md-12 d-flex flex-wrap justify-content-around">
          {final ? (
            <FilterFoodCard final={final} />
          ) : (
            <FoodCard data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
