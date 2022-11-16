
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
    <strong>{props.part.name}</strong>, {props.part.exercises} hours.
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  let hours = 0;
  props.parts.forEach(part => {
    hours = hours + part.exercises;
  })
  return (
    <p>
      Total {hours} hours.
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of component',
    exercises: 14
  }]
  return (
    <>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    </>
  )
}

export default App;
