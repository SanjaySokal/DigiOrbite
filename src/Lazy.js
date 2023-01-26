import img from "./images/lazy.gif";

function App() {
  return (
    <>
      <div className="lazy">
        <img src={img} alt="Loading..." title="Loading..." />
      </div>
    </>
  );
}

export default App;
