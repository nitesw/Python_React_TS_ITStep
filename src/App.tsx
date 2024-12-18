import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/common/layout";
import HomePage from "./components/common/homepage/homepage.tsx";
import ContactPage from "./components/common/contactpage/contactpage.tsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout /> }>
              <Route index element={<HomePage />}/>
              <Route path="/contact" element={<ContactPage />}/>
          </Route>
      </Routes>
  )
}

export default App
