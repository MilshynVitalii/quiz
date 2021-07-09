import React from 'react';
import {Switch, Route, Link} from "react-router-dom";

import QuestionBlock from './components/QuestionBlock';
import Result from './components/Result';

function App() {
  const [questionsLength, setQuestionsLength] = React.useState(0);
  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/milshynvitalii/quiz/questions')
      .then(data => data.json())
      .then(questions => setQuestionsLength(questions.length))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route path='/' exact>
          <h1 className="title">Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You Have</h1>
          <Link to="/question/1" className="start">Start</Link>
        </Route>
        <Route path='/question/:id'>
          <QuestionBlock questionsLength={questionsLength}/>
        </Route>
        <Route path='/result' component={Result}/>
      </Switch>
    </div>
  );
}

export default App;
