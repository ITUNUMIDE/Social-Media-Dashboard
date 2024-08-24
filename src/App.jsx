import Home from "./pages/Home";
import Footer from "./static/Footer";
import Header from "./static/Header"

const App = () => {
  return (
    < div style ={{width: "80%", margin: "auto" }}>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App
