import React, {useState} from 'react';
import Spinner from './components/spinner';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const handleLoadData = () => {
    setIsLoading(true);
    
    setTimeout(function() {
      setIsLoading(false);
    },5000);

  }

  return (
    
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-9 ">
        A sample reactjs spinner component
      </h1>
      <button onClick={handleLoadData} disabled={isLoading} type="button" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Fetch Data
      </button>
      {isLoading && <Spinner isMessageNeeded={true} /> }
    </div>

  );
}

export default App;
