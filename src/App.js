import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Layout from "./Layout";
import Map from "./views/Map";

function App() {
  return (
    <div className="App">
      <Layout>
        <Map />
      </Layout>
    </div>
  );
}

export default App;
