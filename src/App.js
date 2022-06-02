import React from "react";
import Cardetails from "./CarDetails";

const initialData = {
  model: "BMW",
  color: "Black",
  year: "2022",
};

export function App() {
  return (
    <div>
      <Cardetails initialData={initialData} />
    </div>
  );
}
