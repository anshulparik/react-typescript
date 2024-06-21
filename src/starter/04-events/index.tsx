import { useState } from "react";

type Person = {
  name: string;

}

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // this class will have access of form fields with name
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);

    // to access the values from formdata
    const text = formData.get("text") as string;
    const person: Person = { name: text };

    // to access the values from Object method
    const data = Object.fromEntries(formData);
    const person1: Person = { name: data.text as string };
  }

  return (
    <section>
      <h2>Events</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          name="email"
          className="form-input mb-1"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;


/*
NOTE: If we pass inline functions to our event handlers, then TS automatically infers event types
  otherwise when we setup functions as a references then we need to pass them manually.
*/