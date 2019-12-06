var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);


T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)

function onAuthenticated(err, res) {
    if (err) {
        throw err;
    }

    console.log('Authentication successful. Running bot...\r\n')
}

  userId = process.env.TWITTER_USER_ID;

     var stream = T.stream('statuses/filter', {
        follow: userId,
      });

      //stream for tweets, and handle both 
      //classic and extended tweets
      stream.on('tweet', tweet => {

          if(tweet.retweeted || tweet.retweeted_status || tweet.in_reply_to_status_id || tweet.in_reply_to_user_id || tweet.delete) {
            // skip retweets and replies
            return;
          } 
          
          else if (tweet.extended_tweet){

          //Show what the user posted originally to the console
          console.log(`${tweet.user.name} posted: ${tweet.extended_tweet.full_text}`);
          
          //Store the words of the tweet into an array
          var twtText = (tweet.extended_tweet.full_text);
          textArray = twtText.split(" ");

          //sort the array into alphabetical order
          //regardless of case 
          textArray.sort(function(a,b){
              return a.toLowerCase().localeCompare(b.toLowerCase());
          });

          //loop through array to remove links so
          //the bot only tweets the text
          for (i = 0; i < textArray.length; i++){
              if(textArray[i].includes('https://') === true) {
                  textArray.splice(i, 1);
              }
          }

          //turn the newly sorted array back into a string
          var textArrayAsString = textArray.join(' ');
          console.log("\n" + "This tweet will read: " + textArrayAsString);

          //post the status
          T.post('statuses/update', {status: textArrayAsString}, function(err, data, response){

            if(err){
                console.log("Post Unsuccessful\n");
                console.log(err);
            }
            console.log("\nAlphabet Bot posted: " + textArrayAsString);
          })
        }

        else {
            //Show what the user posted originally to the console
          console.log(`${tweet.user.name} posted: ${tweet.text}`);
          
          //Store the words of the tweet into an array
          var twtText = (tweet.text);
          textArray = twtText.split(" ");

          //sort the array into alphabetical order
          //regardless of case 
          textArray.sort(function(a,b){
              return a.toLowerCase().localeCompare(b.toLowerCase());
          });

          //loop through array to remove links so
          //the bot only tweets the text
          for (i = 0; i < textArray.length; i++){
              if(textArray[i].includes('https://') === true) {
                  textArray.splice(i, 1);
              }
          }

          //turn the newly sorted array back into a string
          var textArrayAsString = textArray.join(' ');
          console.log("\n" + "This tweet will read: " + textArrayAsString);

          //post the status
          T.post('statuses/update', {status: textArrayAsString}, function(err, data, response){

            if(err){
                console.log("Post Unsuccessful\n");
                console.log(err);
            }
            console.log("\nAlphabet Bot posted: " + textArrayAsString);
          })
        }
        

        })

        




