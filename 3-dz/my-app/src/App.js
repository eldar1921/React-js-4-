import logo from './logo.svg';
import './App.css';
import MainPage from "./page/mainPage/MainPage";
// import PortfollioPage from "./page/portfollioPage/PortfollioPage";
import UserPage from "./page/userPage/UserPage";
import ContactsPage from "./page/contactsPage/ContactsPage"
import OnePage from "./components/onePage/OnePage";
import TwoPage from "./components/twoPage/TwoPage";

function App() {
    const arr = ["Dastan", "Ali", "Amir"]
    const arr2 = ["Ali", "eldar", "Dastan"]

  return (
    <div className="container">
        <MainPage/>
        {/*--------*/}
        {/*<PortfollioPage/>*/}
        <UserPage/>
        {/*<ContactsPage number={1}/>*/}
        <OnePage one={arr}/>
        <TwoPage two={arr2}/>
    </div>
  );
}

export default App;
