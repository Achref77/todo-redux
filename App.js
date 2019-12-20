import React from 'react';
import { connect } from 'react-redux';
import { changeHandler, addTodo, completeTodo, deletes, updatetask } from './components/action';
import js from './components/js.jpg';
import Modale from './components/modale';
import './App.css';

function App(props) {


  return (

    <div className="App">
      <div className="header">
        <h1 className="textDoUp">To-Do App</h1>
        <h5 className="textDoUp">Add New To-Do</h5>
        <input type='text' name='newInput' id="textTODO" placeholder="Title..." onChange={(e) => props.changeHandler(e.target.value)} />
        <button className="btn" onClick={props.addTodo}>Add</button>
      </div>
      <h2 className="textlist">Let's get some work done!</h2>

      {props.list.todos.map(((el, i) =>

        <li className="ListTodos">
          <Modale index={i} />
          <button className="btnlist" onClick={() => props.completeTodo(i)}>Complete</button>
          <button className="btnlist" onClick={() => props.deletes(i)}>Delete</button>
          <span style={{ textDecoration: el.isComplete ? 'line-through' : '' }}>{i}:{el.text}</span>
        </li>
      )
      )}
      <div className="bordrLogo">
        <img className="logotoDo" src={js} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    list: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (payload) => dispatch(changeHandler(payload)),
    addTodo: () => dispatch(addTodo()),
    completeTodo: (i) => dispatch(completeTodo(i)),
    deletes: (i) => dispatch(deletes(i)),
    updatetask: (i) => dispatch(updatetask(i))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
