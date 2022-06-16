import Routes from "./routes/AllRoutes";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </>
  );
}

export default App;
