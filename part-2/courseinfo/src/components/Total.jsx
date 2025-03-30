const Total = (props) => {
  let total = props.total.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <strong>Total of {total} exercises</strong>
  )
}

export default Total