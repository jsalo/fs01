
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
    <strong>{props.part}</strong>, {props.exercises} hours.
    </p>
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
  var part = [];
  var exercises = [];
  part[1] = 'Fundamentals of React'
  exercises[1] = 10
  part[2] = 'Using props to pass data'
  exercises[2] = 7
  part[3] = 'State of component'
  exercises[3] = 14

  return (
    <>
    <Header course={course} />
    <Content part={part[1]} exercises={exercises[1]} />
    <Content part={part[2]} exercises={exercises[2]} />
    <Content part={part[3]} exercises={exercises[3]} />
    <Total hours={exercises[1]+exercises[2]+exercises[3]} />
    </>
  )
}

export default App;
