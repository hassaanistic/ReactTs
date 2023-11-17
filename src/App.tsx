// import Box from "./components/Box";
// import BoxG from "./components/BoxG";
// import UseState from "./components/UseState";

import BoxContext from "./components/BoxContext";

import { ThemeProvider } from "../context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      {/* <Box heading="Hemlo" func1={() => {}}> */}
      {/* // we can pass any element in children --->We have to pass like Js object using { } */}
      {/* {<button>Hello</button>} */}
      {/* </Box> */}

      {/* <BoxG labell="search" value={val} setter={setVal} /> */}

      {/* <UseState /> */}

      <BoxContext/>
    </ThemeProvider>
  );
}

export default App;
