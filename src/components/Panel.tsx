import { useState } from "react"
import Draggable from "react-draggable"

interface PropsType {
  id: string
  className: string
  type: 'horizontal' | 'vertical'
}

const Panel = (props:PropsType) => {

  return (
    <Draggable>
      <div
        {...props}
        id={props.id}
        className={`${props.className} grid ${props.type === 'vertical'? 'grid-cols-4': 'grid-cols-4'}`}
      >
        {/* Divs for panel UI */}
        <div className="border border-gray-300 "></div>
        <div className="border border-gray-300 "></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300 "></div>
        <div className="border border-gray-300 "></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
        <div className="border border-gray-300"></div>
      </div>
    </Draggable>
  )
}

export default Panel
