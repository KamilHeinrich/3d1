import logo from './logo.svg';
import './App.css';

function App() {
    const data= [
        {forename: "John", surname: "Doe"}
        {forename: "Jane", surname: "Kowalski"}
    ];
  return (
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Imię</th>
                <th>Nazwisko</th>
            </tr>
        </thead>
        <tbody>
        {data.map(({forename, surname}, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{forename}</td>
                <td>{surname}</td>
            </tr>
        ))}
        </tbody>

    </table>

  );
}

export default App;
