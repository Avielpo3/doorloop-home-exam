/**
 * Simple Algo to shuffle words.
 * @param words - an array of words
 */
export const shuffleWords = (orgArr: string[]) => {
  const newArr = [...orgArr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};
