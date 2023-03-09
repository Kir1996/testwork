import Search from "./Search";
import Services from "./Services";
import Img from "./Img";
import Settings from "./Settings";


const Mainheader = () => {
 
  return (
    <div className="Mainheader">
      <Search />
      <Services />
      <Img />
      <Settings/>
    </div>
  );
};

export default Mainheader;
