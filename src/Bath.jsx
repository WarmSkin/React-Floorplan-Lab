const Bath = (props) =>{
  return (
    <div className="bath" id={`bath-${props.bathNum}`}>
      <h1>
        {props.size} Bath
      </h1>
    </div>
  )
}

export default Bath