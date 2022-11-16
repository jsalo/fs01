
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
    <strong>{props.part}</strong>, {props.exercises} hours.
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
      <Part part={props.part[3]} exercises={props.exercises[3]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total {props.hours} hours.
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  let part = [];
  let exercises = [];
  part[1] = 'Fundamentals of React'
  exercises[1] = 10
  part[2] = 'Using props to pass data'
  exercises[2] = 7
  part[3] = 'State of component'
  exercises[3] = 14
  return (
    <>
    <Header course={course} />
    <Content part={part} exercises={exercises} />
    <Total hours={exercises[1]+exercises[2]+exercises[3]} />
    </>
  )
}

export default App;
