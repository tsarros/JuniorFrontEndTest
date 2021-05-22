import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import PostList from './componets/PostList';

function App(){
    const[searchTerm,setSearchTerm] = useState('')
    return(
        <div className="App">
            <input 
            type="text" 
            placeholder="Search weather"
             onChange={(event)=> {setSearchTerm(event.target.value);
            }} />

            <PostList/>

        </div>

    )

}
export default App;
