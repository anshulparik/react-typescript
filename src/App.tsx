import Component from "./starter/02-props";

function App() {
  return (
    <main>
      {/* Props */}
      <Component name="Anshul" age={26} />
      <Component name="Pooja" age={24}>
        <h2>Hello World!</h2>
      </Component>
    </main>
  );
}

export default App;
