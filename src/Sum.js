import React from "react";

export default function Sum({ nums }) {
  return (
    <div>
      <span>The sum is: {nums.reduce((x, y) => x + y)}</span>
    </div>
  );
}
