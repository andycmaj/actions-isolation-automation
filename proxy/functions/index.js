const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
  const buildRef = event.queryStringParameters.ref || 'dev';

  await fetch(`https://api.github.com/repos/andycmaj/actions-isolation-automation/actions/workflows/2631041/dispatches`, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.TOKEN}`
    },
    body: JSON.stringify({
      ref: 'dev',
      inputs: {
        ref: buildRef
      }
    })
  })
}