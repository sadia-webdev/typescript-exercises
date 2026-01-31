import ProductCard from "./ProductCard";
import Welcome from "./Welcome";
function App() {
  return (
    <>
      <h1>hello typescript</h1>
      <Welcome username='Sadiya' />
      <ProductCard name='Laptop' price={500} />
    </>
  );
}

export default App;
