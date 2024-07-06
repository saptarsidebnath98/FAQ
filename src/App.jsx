import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  return (
    <div className="h-screen w-screen relative font-workSans">
      <div className="h-1/3 w-full bg-background-pattern bg-cover bg-center bg-no-repeat">
      </div>
      <div className="h-2/3 w-full bg-LightPink">
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-100 w-10/12 md:w-1/3 h-auto p-5 md:p-10 rounded-lg shadow-lg">
          <Header/>
          <Main/>
        </div>
      </div>
    </div>
  )
}

export default App
