import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Aws from "./pages/Aws";
import FullStack from "./pages/FullStack";
import Paths from "./pages/Paths";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="paths" element={<Paths />} >
          <Route path="aws" element={ <Aws/> } />
          <Route index element={ <FullStack/> } />
          <Route path="fullstack" element={ <FullStack/> } />


        </Route>
        <Route path="" element={<Contact />} />
        <Route path="contact" element={ <PrivateRouter/> }></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
