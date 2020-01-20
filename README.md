# Welcome to alphabetBot!
This bot listens to a specified account takes the tweet of a user as they tweet it, rearranges the text of the tweet in alphabetical order, and posts the tweet. This bot ONLY deals with text and tweets posted from the original user, no retweets, replies or media content are displayed. Check out a fun example [here](https://twitter.com/AlphabetTrump) :)

# Requirements
- [Node.js](https://nodejs.org/en/) version 13.1.0
    - npm dependencies:
        - "dotenv" ^8.2.0
        - "twit" ^2.2.11
- A Twitter account that this bot will use for posting the alphabetized tweets
- [Twitter Developer Account](https://developer.twitter.com)
- A Twitter application created via your developer account
    - Unsure of the process of creating an application via twitter dev account? Check out this [YouTube Tutorial](https://www.youtube.com/watch?v=2o_qt9cXicM) on setting up a developer account and creating a new twitter app. It's easy!
- Access Tokens and Consumer Keys (found via Key and Access Tokens in you twitter app and clicking generate tokens)
    - Consumer Key
    - Consumer Secret
    - Access Token
    - Access Token Secret
    ### NOTE: KEEP THESE KEYS PRIVATE! EXPOSING YOUR TOKENS AND SECRETS CAN ALLOW ACCESS TO YOUR TWITTER ACCOUNT.
    For more information about security, read up on [Twitter's Developer Documentation on security best practices](https://developer.twitter.com/en/docs/basics/security-best-practices)

# Installation
**Step 1:** Clone this repository by opening up your terminal and navigating to the directory you want and issuing this command:
```
git clone https://github.com/Twack14/alphabetBot.git 
```
**Step 2:** Change to the newly created alphabetBot folder:
```
cd alphabetBot
```

**Step 3:** Install 'dotenv' and 'twit' dependencies:
```
npm install
```

**Step 4:** Inside of the alphabetBot folder, create a file called ".env" (without the quotes), and inside of that file you should have the following structure.
- Note: It's easiest to do this with a text editor program of some sort, I recommend [VS Code](https://code.visualstudio.com/download). Once downloaded, open the alphabetBot folder and add the .env file, and including the following:
```
TWITTER_CONSUMER_KEY=your_consumer_key
TWITTER_CONSUMER_SECRET=your_consumer_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
TWITTER_USER_ID='twitter_id_of_account_you_want_to_alphabetize'
```
Note: Follow this structure for the file exactly. You do not need to separate each line with a comma. For the tokens and keys, copy and paste the keys that were generated in your twitter app, there does not need to be a space before or after the equal sign, or quotes around the keys. The ```TWITTER_USER_ID``` variable however DOES need quotes. You can find a twitter user's id [using this website.](http://gettwitterid.com)

**Step 5:** Go back to your terminal, make sure you are back in the alphabetBot directory, and issue this command to start the bot:
```
npm start
```
If you have everything set up correctly, you will see:
```
Authentication successful. Running bot...
```
That means alphabetBot is running! Then you just wait for the user to tweet. As the user you specified earlier tweets, the terminal will populate with the original tweet the user posted, what the tweet will look like alphabetized, and a confirmation message that says ```Alphabet Bot Posted: <alphabetized tweet text here>```

### Note about Twitter General Guidelines and Rules
Before making use of any twitter bot, please read [Twitter's Rules and Policies](https://help.twitter.com/en/rules-and-policies#general-policies) about general guidelines concerning ethical Twitter use.

## Other Notes
Feel free to collaborate with me on this repository to improve this Twitter bot. Make use of GitHub's issues and pull request features if you seen anything you want to improve! 

# Thanks for using alphabetBot! :)
