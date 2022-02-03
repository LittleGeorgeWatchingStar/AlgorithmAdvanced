import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/Login";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";

class App extends Component {
  handleLoggedIn = username => {
    console.log("Getting the user: " + username);
    const user = { name: "Mosh" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      // <CartContext.Provider value={{ cart: [] }}>
      //   <UserContext.Provider
      //     value={{
      //       currentUser: this.state.currentUser,
      //       onLoggedIn: this.handleLoggedIn
      //     }}
      //   >
      //     <div>
      //       <MoviePage />
      //       <Login />
      //     </div>
      //   </UserContext.Provider>
      // </CartContext.Provider>
      // <Movie />
      // <Counter />
      <Users />
    );
  }
}

export default App;
