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

      //stream for extended tweets
      stream.on('tweet', tweet => {

          if(tweet.retweeted || tweet.retweeted_status || tweet.in_reply_to_status_id || tweet.in_reply_to_user_id || tweet.delete) {
            // skip retweets and replies
            return;
          } 
          
          else if (tweet.extended_tweet){

          //Show what the user posted originally to the console
          console.log(`\n${tweet.user.name} posted: ${tweet.extended_tweet.full_text}`);
          
          //Store the words of the tweet into an array
          //and rids the text of special characters except 
          //commas, periods, and exclmation marks
          var twtText = (tweet.extended_tweet.full_text);
          textArray = twtText.replace(/[^\w\d\s.,&!']/g, '');
          textArray = textArray.replace(/[0-9]/g, '');
          console.log("\n" + textArray);
          textArray = textArray.split(" ");


          //loop through array to remove links so
          //the bot only tweets the text
          for (i = 0; i < textArray.length; i++){
            if(textArray[i].includes('http') === true || textArray[i].includes('&amp') === true) {
                textArray.splice(i, 1);
            }
          }

          //sort the array into alphabetical order
          //regardless of case 
          textArray = textArray.sort(function(a,b){
            return a.toLowerCase().localeCompare(b.toLowerCase());
          });

          //loop through array again and remove duplicate values
          for (i = 0; i <textArray.length; i++){
            if (textArray[i] == textArray[i+1]){
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
            //This is where we listen for tweets that are not extended:
            //=========================================================
            
            //Show what the user posted originally to the console
          console.log(`\n${tweet.user.name} posted: ${tweet.text}`);
          
          //Store the words of the tweet into an array
          var twtText = (tweet.text);
          textArray = twtText.replace(/[^\w\d\s.,&!']/g, '');
          textArray = textArray.replace(/[0-9]/g, '');
          console.log("\n" + textArray);
          textArray = textArray.split(" ");


          //loop through array to remove links so
          //the bot only tweets the text
          for (i = 0; i < textArray.length; i++){
            if(textArray[i].includes('http') === true || textArray[i].includes('&amp') === true) {
                textArray.splice(i, 1);
            }
          }

          //sort the array into alphabetical order
          //regardless of case 
          textArray = textArray.sort(function(a,b){
            return a.toLowerCase().localeCompare(b.toLowerCase());
          });

          //loop through array again and remove duplicate values
          for (i = 0; i <textArray.length; i++){
            if (textArray[i] == textArray[i+1]){
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

        




