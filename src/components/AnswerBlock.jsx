import React from 'react';
import PropTypes from 'prop-types';

AnswerBlock.defaultProps = {
  answers: []
};

AnswerBlock.propTypes = {
  answers: PropTypes.array,
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}

function AnswerBlock({answers, id, onClick}) {
  return (<>
    <div className="wrap">
      {
        answers.map(({score, text}, i) => <div
          key={score}
          className={`answer ${id === i && `answer-${i}`}`}
          onClick={() => onClick(i, score)}
        >{text}</div>)
      }
    </div>
    </>
  )
}

export default AnswerBlock;
