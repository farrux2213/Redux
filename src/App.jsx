import { Button, Card, Checkbox } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./redux/slices/todoSlice";
import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.todo);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div>
        <input ref={ref} type="text" />
        <Button
          onClick={() => {
            dispatch(
              addTodo({
                text: ref.current.value,
              })
            );
          }}
        >
          Add
        </Button>
      </div>
      {data.map(({ id, text, completed }) => (
        <Card key={id} className="w-[200px]">
          <Paragraph className={`${completed ? "line-through" : ""}`}>
            {text}
          </Paragraph>
          <Checkbox
            onClick={() => dispatch(toggleTodo({ id }))}
            checked={completed}
          />
          <Button danger onClick={() => dispatch(removeTodo({ id }))}>
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default App;
