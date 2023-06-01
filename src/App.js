import './App.css';
import {HashLink as Router, Routes, Route} from 'react-router-hash-link';
import {publicRoutes} from './routes';



function App() {
  return (
   <Router>
      <div className='App'>
      
     <Routes>
     {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Page />
                                }
                            />
                        );
                    })}
    
     </Routes>
      </div>
   </Router>
  );
}

export default App;
