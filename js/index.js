  var attributedQuotes = [{
      author: "Isaac Asimov",
      quote: "People who think they know everything are a great annoyance to those of us who do."
    }, {
      author: "Mark Twain",
      quote: "Get your facts first, then you can distort them as you please."
    }, {
      author: "Elbert Hubbard",
      quote: "Do not take life too seriously. You will never get out of it alive."
    }, {
      author: "Douglas Adams",
      quote: "I love deadlines. I like the whooshing sound they make as they fly by."
    }, {
      author: "James Thurber",
      quote: "Why do you have to be a nonconformist like everybody else?"
    }, {
      author: "Tallulah Bankhead",
      quote: "If I had to live my life again, I'd make the same mistakes, only sooner."
    }, {
      author: "Andre Maurois",
      quote: "We owe to the Middle Ages the two worst inventions of humanity, romantic love and gunpowder."
    }, {
      author: "Charles M. Schulz",
      quote: "I love mankind, it's people I can't stand."
    }, {
      author: "Josh Billings",
      quote: "Every man has his follies - and often they are the most interesting thing he has got."
    }, {
      author: "Voltaire",
      quote: "The superfluous, a very necessary thing."
    }, {
      author: "Mo Udall",
      quote: "Lord, give us the wisdom to utter words that are gentle and tender, for tomorrow we may have to eat them."
    }, {
      author: "",
      quote: "The pinnacle of the fulfillment I can ever experience for my spirit and soul is to hear from the Lord, when I see Him face to face, 'Well done my good and faithful servant'."
    },
    /*{author:"", quote:""},
    {author:"", quote:""},
    {author:"", quote:""},
    {author:"", quote:""},
    {author:"", quote:""},
    {author:"", quote:""},
    {author:"", quote:""},
    {author:"", quote:""}*/
  ];
  var newQuoteText;
  var newQuoteAuthor;
  var randomNumber;
  var quotesLength;

  function getQuote() {
    var quoteArea = $("#quoteArea");
    var quoteAuthor = $("#quoteAuthor");
    quotesLength = attributedQuotes.length;
    randomNumber = Math.floor(Math.random() * (quotesLength));
    for (var i = 0; i < quotesLength; i++) {
      newQuoteText = attributedQuotes[randomNumber].quote;
      newQuoteAuthor = attributedQuotes[randomNumber].author;
      $("#quoteContainer").fadeOut(500,
        function() {
          $("#quoteArea").html(newQuoteText),
            $("#quoteAuthor").html(newQuoteAuthor)
        });
      $("#quoteContainer").fadeIn(500);
      break;
    };
  };
  $(document).ready(function() {
    getQuote();
    $("#anotherOne").on("click", function() {
      getQuote();
    });

    $("#shareTweet").on("click", function() {
      window.open('https://twitter.com/intent/tweet?text=' + '"' + newQuoteText + '"' + ' By ' + newQuoteAuthor);
    });
  });