//Need to add resetGame function, cheatMode function, startGame function but it's working otherwise

//here we start the number of moves at 0 and we keep track of the moves from here foreward.
var numMoves = 0;
//here we check to see if card 1 = card 2 and then we return true or false depending on the check result.
function isMatch(c1, c2) {
	if(c1 == c2) {
		//console.log('cards are same');
		return true;
	} else {
		//console.log('cards are different');
		return false;
	}
}

$(function() {
	//here we have our cards click listener, then we toggle the selected class depending on the # of clicks.
  $('.cards').click(function() {
		if($('.selected').length == 2) {
			$('.selected').removeClass('selected');
		}
	$(this).addClass('selected');
		if($('.selected').length == 2) {
			numMoves = numMoves + 1;
	//here we define card1 as a var based of the user's 1st selection & then apply that to the class.
		var card1 = $('.selected:eq(0)').attr('class');
	//here we define card2 as a var based of the user's 2nd selection & then apply that to the class.
		var card2 = $('.selected:eq(1)').attr('class');
	//here we say that if there is a match, let's add the matched class & remove the selected class - therefore
	//we be done w/ card1 & card2 and we start up card1 & card2 on the remaining 2 cards for the user.
		if(isMatch(card1, card2)) {
			$('.selected').addClass('matched').removeClass('selected');
		}
	}
	//here if we get 4 matched, we alert the user the game is over, it took # moves and the user is done w/
	//the game.
	if($('.matched').length == 4) {
		alert('Game over! That took you ' + numMoves + ' moves.');
		$('.matched').removeClass('matched')
	}
	});
});
