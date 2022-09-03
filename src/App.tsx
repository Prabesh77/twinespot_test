import Panel from "./components/Panel"
import Roof from "./components/Roof"
import ZoomImage from "./components/ZoomImage"
import { roof_image } from "./assets/roof_base64"
import {
  BsFillInfoCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"

function App() {

  const panels = []
  for (var i = 0; i < 10; i++) {
    panels.push(i) //Example, pushing 10 integers in an array just to render 10 panels for now
  }

  return (
    <div className="App p-12 w-[1000px] h-screen mx-auto  overflow-hidden">
      <Roof id="board-1" className={`bg-red-400 w-[800px] flex relative`}>
        <ZoomImage image={roof_image} />
      
{/* Vertical Panels */}
        {panels?.map((panel) => (
          <Panel
            key={panel}
            id={`card-${panel}`}
            className={`w-8 h-16 bg-gray-800 text-white absolute -top-8 -right-16 cursor-grab `}
            type="vertical"
          ></Panel>
        ))}

{/* Horizontal Panels */}
        {panels?.map((panel) => (
          <Panel
            key={panel}
            id={`card-${panel}`}
            className={`w-16 h-8 bg-gray-800 text-white absolute  -right-20 cursor-grab mt-10`}
            type="horizontal"
          ></Panel>
        ))}
        <div className=" bg-blue-600 py-1 px-2 text-white text-xs absolute right-0 -top-8 flex items-center space-x-4">
          <p>Drag panel and adjust it in the roof. </p>
          <BsFillArrowRightCircleFill className="text-xl" />
        </div>
      </Roof>
      <div className="flex items-center space-x-2 mt-2">
        <BsFillInfoCircleFill />
        <p>Scroll mouse to zoom in/out || Click and drag to move the image.</p>
      </div>
    </div>
  )
}

export default App
