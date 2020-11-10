import React, { useState } from "react";

import TodoList from "../TodoList";
import NewTodo from "../NewTodo";
import { Todo } from "../../todo.model";
import {connect} from "react-redux";

const TodoComponent: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {id: Math.random().toString(), text: text}
        ]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler}/>
            {/* A component that adds todos */}
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        </div>
    );
};

const mapStateToProps = () => {};
const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(TodoComponent);


