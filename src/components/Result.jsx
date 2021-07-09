import React from 'react'
import {useSelector} from 'react-redux';

function Result() {
  const total = useSelector(({total}) => total);
  const [res, setRes] = React.useState({});

  React.useEffect(() => {
    if(total) {
      const getScore = total <= 25 ? 25 : total <= 50 ? 50 : total <= 75 ? 75 : 100;
      fetch(`https://my-json-server.typicode.com/milshynvitalii/quiz/results/${getScore}`)
      .then(data => data.json())
      .then(result => setRes(result))
      .catch(e => console.log(e));
    }
  }, [total]);

  return (
    <div className="result">
      <h1 className="title">Your Result</h1>
      <h2 className="result-head">{res?.result}</h2>
      <div className="result-text">{res?.text}</div>
    </div>
  )
}

export default Result
