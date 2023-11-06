import React, { useEffect } from "react";
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "./redux/actions/pokemons";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons())
  }, []);
  return (
    <div className="App">
      aprendiendo redux
    </div>
)}

export default App;
