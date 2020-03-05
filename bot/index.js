var Twit = require('twit')
var T = new Twit({
    consumer_key:         'f4gH7moFR1brwAgoTRZ5jupUF',
    consumer_secret:      'bMw1Gae3FGVVjOyxk1TX4Y2R1gJ1ckdlaUVDGc70zpdL0e71y5',
    access_token:         '1228370535727366147-aq6lGMbKeLm9KyPZAPNuE5NTbFUyjy',
    access_token_secret:  'jccQbVQXevppP1ovdOZxVzxwFDab46Nf2iR7Bv9RtGN0G',
})
T.post('statuses/update', { status: 'youre smoking cap' }, function(err, data, response) {
  console.log(data)
})
// var stream = T.stream('25073877');
// stream.on('tweet', function (tweet) {
//     if (users.indexOf(tweet.user.id_str) > -1) {
//         console.log(tweet.user.name + ": " + tweet.text);
//         T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
//             console.log(data)
//         })
//     }
// })
// function followed(event) {
//   var name = event.source.name;
//   var screenName = event.source.screen_name;
//   console.log('I was followed by: ' + name + ' ' + screenName);
// }x