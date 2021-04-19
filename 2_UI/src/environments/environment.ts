export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'eu-west-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'eu-west-1:0b9e9536-4ee8-47fd-bd1b-12427a989573',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '1745285752309844',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'https://api.crv228.de/'

};
