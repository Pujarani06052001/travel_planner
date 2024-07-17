import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Data from "./components/FetchdataAll";

import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  return (
   <>
    <Navbar/>
    {/* <h1>Travel Platform</h1> */}
    <Data/>
    <Footer/>
   </>
  );
}
