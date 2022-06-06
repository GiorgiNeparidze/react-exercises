import React, { useRef } from "react";
import { useEffect } from "react";

export default function Cardetails({ initialData }) {
  const model = useRef();
  const color = useRef();
  const year = useRef();

  useEffect(() => {
    model.current.value = initialData.model;
    color.current.value = initialData.color;
    year.current.value = initialData.year;
  }, [initialData]);

  return (
    <div>
      <form>
        <input ref={model} name="model" />
        <input ref={color} name="color" />
        <input ref={year} type="number" name="year" />
      </form>
    </div>
  );
}
