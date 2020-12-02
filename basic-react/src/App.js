import React, { Component } from "react";
import Card from "./components/OldCard";
import "./App.css";
import axios from "axios";

// class App extends Component {
//     state = {
//         users: [],
//     };

//     componentDidMount() {
//         // fetch("https://jsonlaceholder.typicode.com/users")
//         //     .then((response) => response.json())
//         //     .then((json) => this.setState({ users: json }));
//         axios
//             .get("https://jsonlaceholder.typicode.com/users")  
//             .then((response) => this.seState({ users: response.data}));  
//     }

//     render() {
//         return (
//             <>
//             {this.state.users.map((item) => {
//                 return (
//                     <Card 
//                     name={item.name}
//                     username={item.username}
//                     email={item.email}
//                     phone={item.email}
//                     />
//                 );
//             })}
//             </>
//         );
//     }
// }

const App = () => {
    const [users, setUsers] = useState ([]);

    useEffect(() => {
        axios
        .get("https://jsonlaceholder.typicode.com/users")  
        .then((response) => setUsers(response.data));  
    }, []);

    return (
        <>
        {users.map((item) => {
            return (
                <Card 
                name={item.name}
                username={item.username}
                email={item.email}
                phone={item.phone}
                />
            );
        })}
        </>
    );
};

export default App;