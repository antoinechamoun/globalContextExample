import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./globalContext/context";

const Home = () => {
  const { openSidebar, openModal } = useContext(AppContext);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
