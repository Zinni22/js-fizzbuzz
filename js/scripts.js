/*
1. prendo elemento ul
2. creo un ciclo per creare numeri da 1 a 100
3. creo i li e li metto all'interno di ul
4. con una condizione faccio in modo che:
 - i multipli di 3 abbiano la scritta Fizz
 - i multipli di 5 abbiano la scritta Buzz
 - i multipli di 3 e 5 abbiano la scritta FizzBuzz
*/


const list = document.getElementById("list");
 
for (let index = 1; index <= 100; index++) {
    
    //creo l'elemento li
    const mioLi = document.createElement('li');
    console.log('questo è il nuovo li', mioLi);

    //metto i li all'interno di html con il contenuto del ciclo
    mioLi.innerHTML = `${index}`;

    //do ai li una classe
    mioLi.className = `box ${index}`;

    //li colloco all'interno del mio menu ul
    list.append(mioLi);

    
    if( index % 3 == 0 && index % 5 == 0 ){
        mioLi.innerHTML = 'FizzBuzz';
    }
    else if( index % 3 == 0){
        mioLi.innerHTML = 'Fizz';
    }
    else if( index % 5 == 0){
        mioLi.innerHTML = 'Buzz';
    }


}

