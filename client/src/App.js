import { useState } from 'react';
import './App.css';
import Template from './components/Template';
import MemeCreate from './components/MemeCreate';

function App() {
  const [text1, setText1]=useState('');
  const [text2, setText2]=useState('');
  const [image, setImage]=useState('https://images.unsplash.com/photo-1556888335-23631cd2801a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymxhbmt8ZW58MHx8MHx8&w=1000&q=80');
  return (
    <div className="App">
      <div className='splitScreen'>
          <div className='left'>
              <input 
                  type="text"
                  placeholder="Enter upper text"
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
              />
              <input 
                  type="text"
                  placeholder="Enter bottom text"
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
              />
              <h2>Your Meme</h2>
              <MemeCreate 
                  text1={text1}
                  text2={text2}
                  image={image} 
              />
          </div>
          <div className='right'>
              <h2>Template</h2>
              <Template 
                  image={image} 
                  setImage={setImage}
                />
          </div>
      </div>  
    </div>
  );
}

export default App;
