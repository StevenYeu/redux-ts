import * as React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

// import Form from './Form';
// import List from './List';
// const App = () => (
//   <div className="row mt-5">
//     <div className="col-md-4 offset-md-1">
//       <h2>Articles</h2>
//       <List />
//     </div>
//     <div className="col-md-4 offset-md-1">
//       <h2>Add a new article</h2>
//       <Form />
//     </div>
//   </div>
// );
export default App;
