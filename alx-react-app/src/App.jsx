import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}

return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );

   return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );

export default App;