import { useState, FormEvent } from "react";

function UseState() {
        // const [val , setVal] = useState<string>(" MOY MOY")
        type Person = {
          name: string;
          age: number | null;
        };
        const [user, setUser] = useState<Person>();
        const submitHandler = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(user);
          setUser({
            name: " ",
            age: null,
          });
        };
  return (
    <div>
          <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Enter age"
          value={user?.age || ""}
          onChange={(e) => {
            e.preventDefault();
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }));
          }}
        />
        <input
          type="text"
          placeholder="Enter Name"
          value={user?.name || ""}
          onChange={(e) => {
            e.preventDefault();
            setUser((prev) => ({ ...prev!, name: e.target.value }));
          }}
        />

        <button>Create User</button>
      </form>
    </div>
  )
}

export default UseState