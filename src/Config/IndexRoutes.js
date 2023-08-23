import Landing_Page from "../components/LandingPage/Landing_Page";
import Logreg from "../components/LoginPage/Logreg";

export const IndexRoutes = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Landing_Page />} />
        <Route exact path="/Login" element={<Logreg />} />
      </Routes>
    );
  };