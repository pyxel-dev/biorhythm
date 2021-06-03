import { NextPage } from "next";
import Form from "../components/Form";
import Result from "../components/Result";

const HomePage: NextPage = () => {
  return (
    <main>
      <h1 className="logo">
        <span>Bio</span>rhythm
      </h1>
      <Form />
      <Result />
    </main>
  );
};

export default HomePage;
