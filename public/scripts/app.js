/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// create a function that creates tweet elements
function createTweetElement (tweetData) {

  // set variables to everything in html
  let newTweet = $("<article>").addClass("tweet");
  let header = $("<header>").addClass("tweet-header");
  let img = $("<img>").addClass("userImg");
  let userName = $("<span>").addClass("userName");
  let userID = $("<span>").addClass("userID");
  let articles = $("<article>").addClass("articles");
  let footer = $("<footer>").addClass("tweet-footer");
  let days = $("<span>").addClass("days");
  let div = $("<div>").addClass("icons");
  let flag = $("<i>").addClass("fas fa-flag");
  let retweet = $("<i>").addClass("fas fa-retweet");
  let heart = $("<i>").addClass("fas fa-heart");

  // append the same way in html
  div.append(flag);
  div.append(retweet);
  div.append(heart);
  footer.append(days);
  footer.append(div);
  header.append(img);
  header.append(userName);
  header.append(userID);
  newTweet.append(header);
  newTweet.append(articles);
  newTweet.append(footer);

  // data from tweetData
  img.attr("src", tweetData.user.avatars.small);
  userName.html(tweetData.user.name);
  userID.html(tweetData.user.handle);
  articles.html(tweetData.content.text);
  days.html(tweetData.created_at);

  $("#tweets-container").append(newTweet);

  return newTweet;
}

function renderTweets(tweets) {
  // loops through tweets
  for (let i = 0; i < data.length; i++) {
    var $tweet = createTweetElement(data[i]);
    // append tweet
    $('#tweets-container').append($tweet);
  }
};


$(document).ready(function() {
  renderTweets(data)
});