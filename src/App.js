// Import data

// Import components
import './App.css';
import Searchbar from './Searchbar'
import Directory from './Directory'
import Gallery from './Gallery'
import Sidebar from './Sidebar'


function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar />
        <Directory/>
        <Gallery />       
        <Sidebar/>
      </div>
    </div>
  );
}


export default App;
