import Clock from "./Clock";

function Count({deadline, id}) {

  return (
    <div>
      <div>Countdown Timer</div>
      <div>{deadline}</div>
      <Clock deadline={deadline} id = {id}/>
  </div>
  );

}

export default Count;
