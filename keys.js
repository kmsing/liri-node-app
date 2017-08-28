var spotify = require('spotify');
var Twitter = require('twitter');

console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: 'TEN7aWlq5ViB2hMIJF6uSXPbb',
  consumer_secret: 'UQAQ2TJSHEMAW4Rl89EHNVqaXNuc3HWlAcPw0rrNNL1AGi6pIT',
  access_token_key: '899452962178838529',
  access_token_secret: '2TyDuCSpjgviEU71UM1RpfJtZuIO48tlJZ5ulA1AIkJH5',


}

exports.spotifyKeys = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',


}

exports.OMDBKeys = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',


}

// App-only authentication	https://api.twitter.com/oauth2/token
// Request token URL	https://api.twitter.com/oauth/request_token
// Authorize URL	https://api.twitter.com/oauth/authorize
// Access token URL	https://api.twitter.com/oauth/access_token