import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from "./components/UserProfile"
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
          <MainContent /> 
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
        <Footer />
        </div>
    </>
  )
}

export default App
