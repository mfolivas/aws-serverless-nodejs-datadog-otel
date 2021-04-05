'use strict';

const awsXRay = require('aws-xray-sdk') 
awsXRay.captureAWS(require('aws-sdk'))

module.exports.hello = async (event) => {
  console.log('Started the invocation of hello')
  await sleep()
  const responseNumber = generateANumberFromOneToFifty()
  if (responseNumber > 40) {
    console.error('The response number is greater than forty', responseNumber)
    throw new Error('The response number is not valid', responseNumber)
  }
  console.log('Valid response number', responseNumber)

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

const sleep = (ms = generateNumber(1, 4000)) => {
  console.log('Sleeping for a total of', ms, 'milliseconds')
  return new Promise(resolve => setTimeout(resolve, ms))
}
