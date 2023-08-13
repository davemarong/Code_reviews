const splitStringToArray = (data, objectKey) => {
  return data.map((item) => {
    return { ...item, [objectKey]: item[objectKey]?.split(",") };
  });
};
const turnArrayValuesToInt = (data, objectKey) => {
  return data.map((item) => {
    return {
      ...item,
      [objectKey]: item[objectKey]?.map((value) => Number(value)),
    };
  });
};
module.exports = { splitStringToArray, turnArrayValuesToInt };
