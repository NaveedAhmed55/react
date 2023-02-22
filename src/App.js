import logo from './logo.svg';
import './App.css';
import SampleCard from './sampleCard';

function App() {
  const list = [
    {
      firstName: 'Naveed',
      lastName: 'Ahmed',
      misc: 'react js class',
    }
  ]
  // const username = 'someone3';
  return (
    <div className="App">
     {/* {list.map((listItem) => {
       return (
         <>
            <h1>{listItem.fullName}</h1>
            <h2>{listItem.lastName}</h2>
            <h3>{listItem.misc}</h3>
         </>
       )
     })
     } */}
     <SampleCard firstName = 'Naveed' lastName = 'Ahmed'/>
    </div>
  );
}
export default App;
