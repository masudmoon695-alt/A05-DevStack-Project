import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/TechType";
import Footer from "./components/Footer";

const techFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());

  return (
    <>
      <ToastContainer />
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies techPromise={techPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;