import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import {
  CryptoCurrencies,
  CryptoDetails,
  Home,
  Navbar,
  News,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Navbar />
        </nav>

        <main className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>

          <footer className="footer">
            <Footer />
          </footer>
        </main>
      </div>
    </Router>
  );
};
export default App;
