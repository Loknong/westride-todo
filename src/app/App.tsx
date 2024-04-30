import Layout1 from "@/layout/layout1";
import Layout2 from "@/layout/layout2";
import Router from "@/router"; // Import the Router component
import useLayoutStore from "@/store/layoutStore";

function App() {
  const layoutNumber = useLayoutStore((state) => state.layoutNumber);
  const setLayoutNumber = useLayoutStore((state) => state.setLayoutNumber);
  return (
    <div>
      <div className="w-screen h-7 bg-slate-500 flex flex-row justify-end items-center">
        <button
          onClick={() => setLayoutNumber(1)}
          className=" text-white font-bold py-2 px-4 rounded"
        >
          Layout 1
        </button>
        <button
          onClick={() => setLayoutNumber(2)}
          className=" text-white font-bold py-2 px-4 rounded"
        >
          Layout 2
        </button>
      </div>
      {layoutNumber === 1 && (
        <Layout1>
          <Router />
        </Layout1>
      )}
      {layoutNumber === 2 && (
        <Layout2>
          <Router />
        </Layout2>
      )}
    </div>
  );
}

export default App;
