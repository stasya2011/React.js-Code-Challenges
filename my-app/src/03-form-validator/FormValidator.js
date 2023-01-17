import { useState, useEffect } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message === "User created!") {
      console.log(message);
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    } else {
    }
  }, [message]);

  const findErrors = () => {
    const errors = [];

    if (!email || !password || !passwordConfirm) {
      errors.push("All fields must be filled in");
    }

    if (!email.match(/@/) || email.match(/@/g).length > 1) {
      errors.push("An email must have exactly one @ signn");
    }

    if (password.length < 8) {
      errors.push("Passwords must be 8 characters or longer");
    }

    if (passwordConfirm !== password) {
      errors.push("Passwords must match");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = findErrors();
    setMessage(errors.length ? errors.join(". ") : "User created!");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        value={passwordConfirm}
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <h3 style={{ width: 300 }}> {message}</h3>
      <input type="submit" value="Submit" />
    </form>
  );
}
