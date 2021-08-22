import React from "react";
import { Header } from "./Header";

const PAGE_TITLE = "Namaste Webpack!"

export default function App() {
  return (
    <>
      <Header title={PAGE_TITLE} />
      <Header />
    </>
  )
};