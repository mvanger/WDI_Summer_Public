//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

// array to check matches
var clicks = []

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  $('#small').click(smallGame)
  $('#medium').click(mediumGame)
  $('#large').click(largeGame)
  $('.card').live('click', cardClick)
});

function smallGame() {
  letters = _.shuffle(lettersSmall)
  console.log("clicky")
  startGame();
}

function mediumGame() {
  letters = _.shuffle(lettersMedium)
  startGame();
}

function largeGame(){
  letters = _.shuffle(lettersLarge)
  startGame();
}

// Initializes the game and creates the board
function startGame() {
  $('.card').remove()
  $.each(letters, function(index, value) {
    $('#game').append('<p class="card">')
    $('#game').children().last().attr('id', index)
    // $('#game').children().last().text(value)
  })
}

// Flips a card and checks for a match
function cardClick() {
  console.log('clicked')
  hovering(this)
  if ($(this).text() !== letters[this.id]) {
    $(this).text(letters[this.id])
  }
  if (clicks.length === 1 && clicks[0] === clicks[1]) {
    console.log('match')
    $(this).addClass('found')
    clicks = []
  } else if (clicks.length === 1) {
    console.log('no match')
    setTimeout(function(){$('.card').removeClass('hover')}, 2000)
    clicks = []
  } else {
    clicks.unshift(letters[this.id])
  }
  // if (clicks.length % 2 === 0) {}
  if ($('.found').length === letters.length) {
    alert('Victory')
    $('#content').addClass('won')
  }
  console.log(clicks)
}

//Add hoverclass to cards.
function hovering(element) {
  $(element).addClass('hover')
}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}