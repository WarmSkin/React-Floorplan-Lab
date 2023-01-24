import Bath from "./Bath"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"

const FloorPlan = () => {
  return (
    <>
      <Bedroom bedNum = {1} />
      <Bath size="Full" bathNum={1}/>
      <LivingRoom />
      <Kitchen />
      <Bedroom bedNum = {2} />
      <Bath size="Full" bathNum={2}/>
      <Bedroom bedNum = {3} />
    </>
  )
}

export default FloorPlan