
import  { Dispatch , SetStateAction } from "react"

type inputValType = string | number;

const BoxG = <T extends inputValType>({
  labell,
  value,
  setter,
}: {
  labell: string;
  value: T;
  setter: Dispatch<SetStateAction<T>> ; // type T we dont know what we pass 
}) => {
  return (
    <form>
      <label>{labell}</label>
      <input type="text" value={value} onChange={(e)=> setter(e.target.value as T)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BoxG;
