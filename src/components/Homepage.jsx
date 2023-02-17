import { useDispatch } from "react-redux";
import { getSongData } from "../redux/actions";

const Homepage = () => {
  const dispatch = useDispatch();
  //   dispatch(getSongData());
  return (
    <div className="sidebar-fix">
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
