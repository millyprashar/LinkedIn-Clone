import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {/* Header */}
      < Header />
      {/* App Body */}
      {!user ? (
        <Login />
      ) : (
<div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      )}
    </div>

  );
}

export default App;
