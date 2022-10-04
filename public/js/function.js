const strictEquals = (numberOne, numberTwo) => {
  if (Number.isNaN(numberOne) && Number.isNaN(numberTwo)) {
    return false;
  } else if (Object.is(numberOne, numberTwo)) {
    return true;
  } else if (
    (Object.is(numberOne, 0) && Object.is(numberTwo, -0)) ||
    (Object.is(numberTwo, 0) && Object.is(numberOne, -0))
  ) {
    return true;
  } else {
    return false;
  }
};

export default strictEquals;
