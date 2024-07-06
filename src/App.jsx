
function App() {

  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/3 w-full bg-background-pattern bg-cover bg-center bg-no-repeat">
      </div>
      <div className="h-2/3 w-full bg-LightPink">
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-100 w-1/3 p-10 rounded-lg shadow-lg">
          <header className="flex gap-4 text-5xl">
            <img src="images/icon-star.svg"/>
            <h1 className="font-bold">FAQs</h1>
          </header>

        </div>
      </div>
    </div>
  )
}

export default App
