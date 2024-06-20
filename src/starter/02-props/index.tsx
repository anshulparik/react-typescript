// function Component({ name, age }: { name: string; age: number }): JSX.Element {
//   return (
//     <div>
//       <h2>React & Typescript</h2>
//       <h2>
//         Props: {name} {age}
//       </h2>
//     </div>
//   );
// }

// Alternatives to inline props type:
// type ComponentProps = { name: string; age: number; children?: React.ReactNode };

// Alternate way of defining type to children prop:
import { type PropsWithChildren } from "react";
type ComponentProps = PropsWithChildren<{ name: string; age: number }>;

function Component({ name, age, children }: ComponentProps): JSX.Element {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>
        Props: {name} {age}
      </h2>
      {children}
    </div>
  );
}
export default Component;

/*
  Note: We have props of children type i.e assigned with  { children: React.ReactNode }
  type ComponentProps = { name: string; age: number; children?: React.ReactNode }
  
  We have an alternate way of doing this also:
  import { type PropsWithChildren } from "react";
  type ComponentProps = PropsWithChildren<{ name: string; age: number }>;
*/
