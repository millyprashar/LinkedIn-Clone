import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch
        (login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          profileURL: userAuth.photoURL,
        })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
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
