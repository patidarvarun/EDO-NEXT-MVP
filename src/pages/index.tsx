import Layout from "../components/Layout";
import Dashboard from "./dashboard";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="mt-7">
        <Dashboard/>
      </div>
    </Layout>
  );
};

export default Home;
