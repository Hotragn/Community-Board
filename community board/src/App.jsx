// import { useState, useEffect } from 'react';
// import './App.css';
// import Board from './components/Board';

// const App = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Check if user has previously set a preference
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });

//   useEffect(() => {
//     // Update the data-theme attribute on the document when darkMode changes
//     document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
//     // Save the user's preference
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className="App">
//       <div className="theme-toggle-container">
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {darkMode ? (
//             <i className="fas fa-sun"></i>
//           ) : (
//             <i className="fas fa-moon"></i>
//           )}
//         </button>
//       </div>
//       <header>
//         <h1>Anime Community Board</h1>
//         <h2>Discover upcoming events and resources for anime fans</h2>
//       </header>
//       <Board />
//     </div>
//   )
// }

// export default App;
import { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app-container">
      <div className="theme-toggle-container">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
      </div>
      <header>
        <h1>Anime Community Board</h1>
        <h2>Discover upcoming events and resources for anime fans</h2>
      </header>
      <Board />
    </div>
  )
}

export default App;
