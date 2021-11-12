import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Uploader from "./components/uploader/uploader.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Uploader />
      <Footer />
    </div>
  );
}

export default App;
