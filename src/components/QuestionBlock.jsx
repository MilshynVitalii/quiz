import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import {setAnswer, addTotal} from '../redux/actions/answer';

import AswersBlock from './AnswerBlock';

QuestionBlock.propTypes = {
  questionsLength: PropTypes.number.isRequired
}

function QuestionBlock({questionsLength}) {
  const {id} = useParams();
  const [questionsData, setQuestionsData] = React.useState({});
  const dispatch = useDispatch();
  const {answerID, score, total} = useSelector((answer) => answer);

  React.useEffect(() => {
    fetch(`https://my-json-server.typicode.com/milshynvitalii/quiz/questions/${id}`)
      .then(data => data.json())
      .then(questions => setQuestionsData(questions))
      .catch(e => console.log(e));
  }, [id]);

  const onClick = (i, score) => {
    dispatch(setAnswer(i, Number(score)));
  }

  const onNext = () => {
    dispatch(addTotal());
  }

  const activeBnt = !!score;

  return (
    <div className="question-block">
      <h1 className="title">{questionsData.question}</h1>
      <div className="steps-count">{`(${id}/${questionsLength})`}</div>
      <AswersBlock answers={questionsData.answers} id={answerID} onClick={onClick}/>
      {
        id < questionsLength &&
        <Link
          to={`/question/${+id + 1}`}
          className={`link-button ${activeBnt ? '' : 'disabled'}`}
          onClick={onNext}
        >Next</Link>
      }
      {
        +id === +questionsLength &&
        <Link
          to="/result"
          className={`link-button link-button_result ${activeBnt ? '' : 'disabled'}`}
          onClick={onNext}
        >Watch the results</Link>
      }
    </div>
  )
}

export default QuestionBlock;
