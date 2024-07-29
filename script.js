let gamenum=Math.floor(Math.random()*100)+1;
console.log("The number is",gamenum);


function guess(){
    let userNum = parseInt(document.getElementById('input').value);
    // let usernum =document.getElementById('input').value; 
    
    if(isNaN(userNum)){
        alert("Please enter a valid number");
    }
    else if(userNum === gamenum){
        let text="Congratulations, You entered Right number";
        document.getElementById('para').innerHTML=text;
    }
    else{
        alert("you entered wrong number. Guess again");
    }
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
}

function clearFields(){
    document.getElementById('para').innerHTML='';
}

document.getElementById('refreshgame').onclick=function(){
    location.reload();
};
