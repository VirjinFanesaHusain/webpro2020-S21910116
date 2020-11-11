import './App.css';
import Card from "./components/Card";
import Counter from "./components/Counter";
import {person} from "./utils/person";

function App() {
  return (
    // <>
    //   {person.map((item)) => {
    //       return (
    //         <Card
    //         name={item.name}
    //         institution={item.institution}
    //         />
    //       );
        })}
        <Counter title="Counter Component" />
    </>
  );
};

export default App;