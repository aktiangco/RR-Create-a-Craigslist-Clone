// Import data
import {postings} from'./postings'
// Import components
import './App.css';
import Searchbar from './components/Searchbar'
import Directory from './components/Directory'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar/>
        <Directory/>
        <Gallery postings={postings}/>       
        <Sidebar/>
      </div>
    </div>
  );
}


export default App;
