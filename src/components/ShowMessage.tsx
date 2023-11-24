import { FC } from "react";

interface info {
  name?: string;
  id: number;
  age: number;
  isStudent?: boolean;
}
const ShowMessage: FC<info> = (props) => {
  return (
    <div>
      {props.name ? <h1>Name: {props.name}</h1> : <h1>Name is empty</h1>}
      <h2>ID: {props.id}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  );
};

export default ShowMessage;
