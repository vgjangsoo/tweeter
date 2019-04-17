/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.


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
  userName.text(tweetData.user.name);
  userID.text(tweetData.user.handle);
  articles.text(tweetData.content.text);
  days.text(tweetData.created_at);

  $("#tweets-container").append(newTweet);

  return newTweet;
};

function renderTweets(tweets) {
  // loops through tweets
  for (let i = 0; i < tweets.length; i++) {
    var $tweet = createTweetElement(tweets[i]);
    // append tweet
    $("#tweets-container").prepend($tweet);
  }
};

//fetching tweets with AJAX
function loadTweets() {
  $.getJSON("/tweets", function(data) {
    //make sure tweet database doesn't show again and again. make container empty().
    $("#tweets-container").empty();
    renderTweets(data);
    $("[name=text]").val("");
  })
};

//make the document ready.
$(document).ready(function() {

  loadTweets();
  $(".submit-tweet").on("submit", function() {
    event.preventDefault();

    let $text = $(this).serialize();
    let inputLength = $("[name=text]").val().length;
    // Add validation.
    if (inputLength === 0 || inputLength > 140) {
      alert("Cannot post! because you did not submit anything or your tweet is too long");
    } else {
      // AJAX POST request.
      $.post("/tweets", $text, function(){
        loadTweets();

      });
    }
  })
});