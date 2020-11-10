import './App.css';
import Card from "./components/Card";
import {person} from "./utils/person";

function App() {
  return (
    <>
      {person.map((item)) => {
          return (
            <Card
            name={item.name}
            institution={item.institution}
            />
          );
        })}
    </>
  );
};

export default App;