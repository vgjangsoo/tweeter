/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.

const tweetData = {
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
}

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

  // var newTweet = $(".tweet").append(article);
  $("#tweets-container").append(newTweet);

  return newTweet;

}

$(document).ready(function() {
  var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
});