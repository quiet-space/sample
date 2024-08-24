// 레이아웃 영역

import Header from "./components/header";
import Menu from "./components/menu";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div class="app-container">
      <Header />
      <div class="middle-container">
        <Menu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
