import React, { useMemo } from "react";

const list = [
  { name: "john", id: 1, age: 20 },
  { name: "jim", id: 2, age: 45 },
  { name: "nikolas", id: 3, age: 17 },
  { name: "davide", id: 4, age: 18 },
  { name: "anna", id: 5, age: 17 },
  { name: "maria", id: 6, age: 19 },
];

export default function FilteredList() {
  const renderWithMemo = useMemo(
    () =>
      list.map((person, index) =>
        person.age >= 18 ? (
          <ul key={index}>
            <li>Name: {person.name}</li>
            <li>Id: {person.id}</li>
            <li>Age: {person.age}</li>
          </ul>
        ) : null
      ),
    []
  );

  return <div>{renderWithMemo}</div>;
}
