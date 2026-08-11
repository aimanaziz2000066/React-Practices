//Styled Component

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

import styled from "styled-components";
function App(){
  const Heading =styled.h2`
  color:red;
  border:1px solid green;
  border-radius:5px;
  margin:20px;
  padding:10px;
  `
  return(
    <>
    <h1>Styled Component With React.js</h1>
    <Heading>Hello</Heading>
    </>
  )
}
export default App;