import { Layout } from "./components/Layout";
import { Filter } from "./components/Filter";

function App() {
  return (
    <Layout>
      <section className="max-w-6xl px-4">
        <Filter />
      </section>
    </Layout>
  );
}

export default App;
