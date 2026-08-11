function Student(props) {
  return (
    <>
      <h2>Student Component</h2>

      <button onClick={props.message}>
        Click Me
      </button>
    </>
  );
}

export default Student;