import React from "react";

export default function Sum({ nums = [1, 5, 7, 8, 9] }) {
  return (
    <div>
      <span>The sum is: {nums.reduce((x, y) => x + y)}</span>
    </div>
  );
}
