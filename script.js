//WERSJA ROZSZERZONA

function drawTree(h) {
	for  ( var i = 0 ; i < h ; i++ ) {
  		var star = '';
   		
   		for ( var j = 0 ; j <= h - i ; j++ ) {
    		star += ' ';
    	}

		for ( var k = 0 ; k < i * 2 - 1 ; k++ ) {
			star +='*';
		}

    	console.log(star);
	}
}
	
drawTree(prompt('Wpisz wysokość choinki'));


//PONIŻEJ PODSTAWOWA WERSJA
/*
function drawTree(h) {
	
	for ( var i = 0 ; i < h ; i++ ) {
		var star = '';
	
		for (var j = 0 ; j <= i ; j++ ) {
			star += '*';
		}
		console.log(star);
	}

}
	
drawTree(prompt('Wpisz wysokość choinki'));*/