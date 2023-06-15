interface numOne {
  count: number;
}

const Viewer = (count: numOne) => {
  return (
    <div>
      <div>현재 카운트: </div>
      <h1>{count.count}</h1>
    </div>
  )
}

export default Viewer;