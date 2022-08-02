import Header from "./components/Header"
import { Outlet } from "react-router-dom"
function App() {

  // const [darkMode, setDarkMode] = React.useState(false)

  return (

    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}

export default App;
