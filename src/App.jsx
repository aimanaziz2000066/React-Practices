//Styled Component

import { Alert } from "bootstrap";

// import styled from "styled-components";

// const Heading = styled.h1`
//   color: purple;
//   text-align: center;
// `;
// function App(){
//   return(
//     <>
//     <Heading>Hello Styled Component!</Heading>
//     </>
//   )
// }
// export default App;

//Card example
// import styled from "styled-components";
// const Card = styled.div`
//   width: 300px;
//   padding: 25px;
//   margin: 50px auto;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//   text-align: center;
// `;
// const Title = styled.h2`
//   color: purple;
//   margin-bottom: 10px;
// `;

// const Text = styled.p`
//   color: gray;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   background-color: purple;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: darkviolet;
//   }
// `;

// function App() {
//   return (
//     <Card>
//       <Title>Styled Card</Title>
//       <Text>
//         This card is created using styled-components.
//       </Text>
//       <Button>Learn More</Button>
//     </Card>
//   );
// }
// export default App;

//Button Example
// import styled from "styled-components";
// const Button = styled.button`
//   background-color: purple;
//   color: white;
//   border: none;
//   padding: 12px 25px;
//   border-radius: 8px;
//   font-size: 18px;
//   cursor: pointer;
//   &:hover {
//     background-color: pink;
//     color: black;
//   }
// `;

// function App() {
//   return (
//     <>
//       <Button>Click Me</Button>
//     </>
//   );
// }
// export default App;

// import styled from "styled-components";
// function App(){
//   const Heading =styled.h2`
//   color:red;
//   border:1px solid green;
//   border-radius:5px;
//   margin:20px;
//   padding:10px;
//   `
//   return(
//     <>
//     <h1>Styled Component With React.js</h1>
//     <Heading>Hello</Heading>
//     </>
//   )
// }
// export default App;

//Bootstrap in React js:-
// function App() {
//   return (
//     <>
//       <h1>Add Bootstrap in React js</h1>
//       <button
//         className="btn btn-light border"
//         style={{
//           width: "auto",
//           padding: "5px 15px",
//           fontSize: "16px"
//         }}
//       >
//         Click
//       </button>
//       <div className="alert alert-primary mt-2" role="alert">
//         Hello, BT installed
//       </div>
//     </>
//   );
// }
// export default App;

//useRef Hook in React:-
// import { useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <h1>useRef Hook in React</h1>

//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Enter your name"
//       />
//       <button onClick={handleFocus}>
//         Focus Input
//       </button>
//     </>
//   );
// }
// export default App;
//Another Example:-
// import { useRef } from "react";
// function App() {
//   const count = useRef(0);

//   const increase = () => {
//     count.current = count.current + 1;
//     console.log(count.current);
//   };
//   return (
//     <>
//       <h1>useRef Example</h1>

//       <button onClick={increase}>
//         Increase
//       </button>
//     </>
//   );
// }
// export default App;

//React Uncontrolled Component:-
import { useRef } from "react";
function App() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };
  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter your name"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default App;   