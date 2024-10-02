import { useHome } from "./model";
import { HomeView } from "./view";

const Home = () => {
  const homeModel = useHome();

  return <HomeView {...homeModel} />;
};

export default Home;
