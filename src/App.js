import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
function App() {
   const [todoList, setTodoList] = useStates([]);
   const [textInput, setTextInput] = useStates('');
   const onTextInputChange = (e) => {
     setTextInput(e.target.value);
   };

  return (
    <>
      <h3>List of work to do</h3>
      <TextField
        name="add-todo"
        placeholder="Add work to do"
        elemAfterInput={
          <Button appearance="primary" isDisabled={true}>
            Add
          </Button>
        }
        value={textInput}
        onChange = {onTextInputChange}
      ></TextField>
      <TodoList></TodoList>
    </>
  );
}

export default App;
