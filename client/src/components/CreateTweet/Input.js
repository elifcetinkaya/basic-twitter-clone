import React from "react";

export default function Input({ setState }) {
  return <input onChange={(e) => setState(e.target.value)} />;
}
