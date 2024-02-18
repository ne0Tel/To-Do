const fillArray = (chislo, item) =>{

  let newArray = [];

  for (let index = 0; index < chislo; index++) {
    newArray[index] = item
  }

  return newArray;
}

export default fillArray;