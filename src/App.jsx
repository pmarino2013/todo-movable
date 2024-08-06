import { useState } from "react";
import { List, arrayMove, arrayRemove } from "react-movable";
import CardApp from "./components/CardApp";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setItems([...items, { id: crypto.randomUUID, text: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="container mx-auto my-5">
      <form
        onSubmit={addTask}
        className=" max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Tarea
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="textTarea"
            type="text"
            placeholder="Nueva tarea"
            autoComplete="off"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
      </form>
      {items.length > 0 ? (
        <List
          removableByMove
          values={items}
          onChange={({ oldIndex, newIndex }) =>
            setItems(
              newIndex === -1
                ? arrayRemove(items, oldIndex)
                : arrayMove(items, oldIndex, newIndex)
            )
          }
          renderList={({ children, props }) => (
            <ul className="px-2" {...props}>
              {children}
            </ul>
          )}
          renderItem={({
            value,
            props,
            isDragged,
            isSelected,
            isOutOfBounds,
          }) => (
            <div
              {...props}
              key={props.key}
              className={`pt-3 max-w-sm mx-auto rounded-lg shadow-md overflow-hidden`}
            >
              <div
                className={`px-6 py-4 ${
                  isDragged || isSelected
                    ? isOutOfBounds
                      ? "bg-red-400"
                      : "bg-slate-100"
                    : "bg-white"
                }`}
              >
                <p className="text-gray-700 text-base">{value.text}</p>
              </div>
            </div>
          )}
        />
      ) : (
        <div className="max-w-sm mx-auto px-2 flex justify-center">
          <span className="font-bold text-gray-700 ">
            No hay tareas pendientes
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
