import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () =>{
  return (
    <div className="ketchen" style={{display:"grid"}}>
      <Oven />
      <Sink />
      <h1>Kitchen</h1>
    </div>

  )
}

export default Kitchen