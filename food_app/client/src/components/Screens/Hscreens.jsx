import React from "react";
import pizzas from "../../piz";
import PPizza from "../PPizza";

const Hscreens = () => {
  return (
    <div className="row">
      {pizzas.map((pizza) => {
        return (
          <div key={pizza.name} className="col-md-4">
            <PPizza pizza={pizza} />
          </div>
        );
      })}
    </div>
  );
};

export default Hscreens;
