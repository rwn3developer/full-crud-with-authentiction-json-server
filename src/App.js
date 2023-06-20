import { BrowserRouter,Routes,Route } from "react-router-dom";
import Form from "./component/Form";
import Edit from "./component/Edit";
import Login from "./component/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/form" element={<Form />}></Route>

          <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
    

}

export default App;
