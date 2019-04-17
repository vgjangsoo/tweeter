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
    // empty textarea after the tweet is rendered.
    $("[name=text]").val("");
    // reset the counter to 140.
    $(".counter").text(140);
  })
};

//make the document ready.
$(document).ready(function() {

  // nav-bar: compose button to hide and show/focus compose section.
  $(".nav-button").on("click", function() {
    $(".new-tweet").fadeToggle();
    $("#textfocus").focus();
  });

  // function loadTweets which loads old tweets
  loadTweets();

  // the user submits tweet
  $(".submit-tweet").on("submit", function() {
    event.preventDefault();

    let $text = $(this).serialize();
    let inputLength = $("[name=text]").val().length;

    // Add validation.
    if (inputLength === 0 || inputLength > 140) {
      // error-alert to show!
      $(".error-alert").show();

    } else {

      // AJAX POST request.
      $.post("/tweets", $text, function(){
        //if error msg is shown hide it.
        $(".error-alert").hide();
        loadTweets();

      });
    }
  })
});