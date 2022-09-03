interface PropsType {
  id: string
  className: string
  children: React.ReactNode
}


const Roof = (props: PropsType) => {
 
  return (
    <div
      id={props.id}
      className={props.className}
    >
      {props.children}
    </div>
  )
}

export default Roof
