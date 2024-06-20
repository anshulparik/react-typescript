import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    text: "some text",
  },
];

function Component() {
  // TS inferring type automatically
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  // For this we need to pass type generically
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center mb-1"
        onClick={() => setText("Hello World!")}
      >
        Click Me
      </button>
      <button className="btn btn-center" onClick={() => setNumber(1999)}>
        Click Me2
      </button>
      <button
        className="btn btn-center"
        onClick={() => setList(["We", "Are", "The", "Champions"])}
      >
        Click Me3
      </button>

      <h2>
        {text} {number}
      </h2>
    </div>
  );
}
export default Component;


/*
  NOTE: When typescript infers, it creates types based on original values that can create
  problem sometimes.
*/