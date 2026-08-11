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
// import { useRef } from "react";
// function App() {
//   const inputRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(inputRef.current.value);
//   };
//   return (
//     <>
//       <h1>Uncontrolled Component</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           ref={inputRef}
//           placeholder="Enter your name"
//         />
//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }
// export default App;   

//Pass function as Props:-
// import Student from "./Student";
// function App() {
//   const showMessage = () => {
//     alert("Hello from App Component!");
//   };
//   return (
//     <>
//       <h1>Pass Function as Props</h1>

//       <Student message={showMessage} />
//     </>
//   );
// }
// export default App;  

//useFormStatus Hook:-   
// import { useFormStatus } from "react-dom";

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? "Submitting..." : "Submit"}
//     </button>
//   );
// }

// function App() {
//   const handleSubmit = async (formData) => {
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     console.log(formData.get("name"));
//   };
//   return (
//     <>
//       <h1>useFormStatus Hook</h1>
//       <form action={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//         />

//         <SubmitButton />
//       </form>
//     </>
//   );
// }
// export default App;

// useTransition Hook in React js:-    
// import { useState, useTransition } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [isPending, startTransition] = useTransition();
//   const handleClick = () => {
//     startTransition(() => {
//       setCount(count + 1);
//     });
//   };
//   return (
//     <>
//       <h1>useTransition Hook</h1>
//       <h2>Count: {count}</h2>
//       <button onClick={handleClick}>
//         Increase
//       </button>
//       {isPending && <p>Updating...</p>}
//     </>
//   );
// }
// export default App;

//React js Pure Component:-
// import React from "react";
// class Student extends React.PureComponent {
//   render() {
//     console.log("Student Component Render");
//     return (
//       <>
//         <h2>Student Name: {this.props.name}</h2>
//         <h2>Age:{this.props.age}</h2>
//       </>
//     );
//   }
// }
// function App() {
//   const name = "Aiman";
//   const age = 20;
  
//   return (
//     <>
//       <h1>Pure Component Example</h1>

//       <Student name={name} />
//       <Student age={age} />
//     </>
//   );
// }
// export default App;   

//Derived State in React    
// import { useState } from "react";
// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const fullName = firstName + " " + lastName;

//   return (
//     <>
//       <h1>Derived State Example</h1>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <h2>Full Name: {fullName}</h2>
//     </>
//   );
// }
// export default App;

//Lifting State Up:-
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <h1>Lifting State Up</h1>
//       <InputBox name={name} setName={setName} />

//       <DisplayName name={name} />
//     </>
//   );
// }
// function InputBox({ name, setName }) {
//   return (
//     <input
//       type="text"
//       value={name}
//       placeholder="Enter your name"
//       onChange={(e) => setName(e.target.value)}
//     />
//   );
// }
// function DisplayName({ name }) {
//   return (
//     <h2>
//       Your Name: {name}
//     </h2>
//   );
// }
// export default App;    

// Updating objects in state:-
// import { useState } from "react";

// function App() {
//   const [user, setUser] = useState({
//     name: "Aiman",
//     age: 20,
//     city: "Peshawar"
//   });

//   const updateUser = () => {
//     setUser({
//       ...user,
//       name: "Sara",
//       age: 21,
//       city: "Lahore"
//     });
//   };

//   return (
//     <>
//       <h1>Updating Objects in State</h1>

//       <h2>Name: {user.name}</h2>
//       <h2>Age: {user.age}</h2>
//       <h2>City: {user.city}</h2>

//       <button onClick={updateUser}>
//         Update User
//       </button>
//     </>
//   );
// }

// export default App;

// Updating array in state:-
// import { useState } from "react";

// function App() {
//   const [fruits, setFruits] = useState([
//     "Apple",
//     "Banana",
//     "Mango"
//   ]);

//   const addFruit = () => {
//     setFruits([...fruits, "Orange"]);
//   };

//   return (
//     <>
//       <h1>Updating Array in State</h1>

//       {fruits.map((fruit, index) => (
//         <p key={index}>{fruit}</p>
//       ))}

//       <button onClick={addFruit}>
//         Add Fruit
//       </button>
//     </>
//   );
// }

// export default App;

//useAction Hook:-
// import { useActionState } from "react";
// function App() {
//   const submitForm = async (previousState, formData) => {
//     const name = formData.get("name");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return `Hello ${name}!`;
//   };

//   const [message, formAction, isPending] = useActionState(
//     submitForm,
//     ""
//   );
//   return (
//     <>
//       <h1>useActionState Hook</h1>
//       <form action={formAction}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//         />
//         <button type="submit" disabled={isPending}>
//           {isPending ? "Submitting..." : "Submit"}
//         </button>
//       </form>

//       <h2>{message}</h2>
//     </>
//   );
// }
// export default App;    

//React JS Fragment:-
import React from "react";
function App() {
  return (
    <React.Fragment>
      <h1>React Fragment</h1>
      <p>Hello React</p>
      <button>Click Me</button>
    </React.Fragment>
  );
}
export default App;    