function diceroll1(){
	var randomNumber = Math.floor(Math.random() * 6 + 1);
		if(randomNumber === 1){
			document.querySelector('.img1').setAttribute('src','images/dice1.png'); 
		}
		else if(randomNumber === 2){
			document.querySelector('.img1').setAttribute('src','images/dice2.png'); 
		}
		else if(randomNumber === 3){
			document.querySelector('.img1').setAttribute('src','images/dice3.png'); 
		}
		else if(randomNumber === 4){
			document.querySelector('.img1').setAttribute('src','images/dice4.png'); 
		}
		else if(randomNumber === 5){
			document.querySelector('.img2').setAttribute('src','images/dice5.png'); 
		}
		return randomNumber;
}

function diceroll2(){
	var randomNumber2 = Math.floor(Math.random() * 6 + 1);
	if(randomNumber2 === 1){
		document.querySelector('.img2').setAttribute('src','images/dice1.png'); 
	}
	else if(randomNumber2 === 2){
		document.querySelector('.img2').setAttribute('src','images/dice2.png'); 
	}	
	else if(randomNumber2 === 3){
		document.querySelector('.img2').setAttribute('src','images/dice3.png'); 
	}
	else if(randomNumber2 === 4){
		document.querySelector('.img2').setAttribute('src','images/dice4.png'); 
	}
	else if(randomNumber2 === 5){
		document.querySelector('.img2').setAttribute('src','images/dice5.png'); 
	}
	return randomNumber2;
}

function decider(y, z){
	if(z > y){
		document.querySelector('h1').textContent = 'Player 2 Wins 🚩';
	}
	else{
		document.querySelector('h1').textContent = 'Player 1 Wins 🚩';
	}
}

decider(diceroll1(),diceroll2());

