'use strict';

module.exports.hello = async (event) => {
  const randomNumber = generateANumberFromOneToFifty()
  if (randomNumber > 40) {
    console.error('The number is greater than forty', randomNumber)
    throw new Error('There was error with the lambda')
  }
  console.log('Random error is less than 40', randomNumber)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }
}

const generateNumber = (min, max) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

const generateANumberFromOneToFifty = () => {
  return generateNumber(1, 50)
}
