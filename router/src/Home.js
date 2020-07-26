import React from "react";
import Users from "./users/Users";
import PersonList from "./Components/PersonLis";
import PersonInput from "./Components/PersonInput";

function Home() {
  return (
    <div className="App">
      Home page
      <Users title="user list" />
      <PersonList />
      <PersonInput />
    </div>
  );
}

export default Home;
