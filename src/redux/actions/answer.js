export const setAnswer = (id, score) => ({
  type: 'SET_ANSWER',
  payload: { id, score },
});

export const addTotal = () => ({
  type: 'ADD_TOTAL'
});