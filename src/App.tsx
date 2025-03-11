import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
      </form>

      <button className="btn btn-primary">Salvar</button>
    </div>
  );
}

export default App;