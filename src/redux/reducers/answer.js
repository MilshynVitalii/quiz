const initialState = {
    total: 0,
    answerID: null,
    score: 0
  };
  
  const filters = (state = initialState, action) => {
    if (action.type === 'SET_ANSWER') {
      return {
        ...state,
        score: action.payload.score,
        answerID: action.payload.id
      };
    }
    if (action.type === 'ADD_TOTAL') {
      return {
        ...state,
        total: state.total + state.score,
        answerID: null,
        score: 0
      };
    }
    return state;
  };
  
  export default filters;