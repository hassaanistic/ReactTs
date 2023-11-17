import { ReactNode } from "react";
type propsType = {
  heading: string;
  count?: number; //--> make it optional SO we can make it default
  func1: (a: string) => void;
  children: ReactNode; //--> For children
};
// const Box = ({heading : var1}) => {   // ---> this means we are using heading as var1 --> then we can use the word var1 instead heading
// const Box = ({ heading }: { heading: string }) => {
const Box = ({ heading, count = 3, func1, children }: propsType) => {
  func1("Hemlo Prop param");
  return (
    <>
      {/* <h1>{var1}</h1> */}
      <h1>{heading}</h1>

      {count && <h1>{count}</h1>}

      <p> {children}</p>
    </>
  );
};

export default Box;
