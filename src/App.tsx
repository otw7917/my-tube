import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className='flex flex-col justify-center'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
