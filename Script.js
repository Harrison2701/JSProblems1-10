/**
 * Created by h205p2 on 9/20/17.
 */
//write first method
function sleep_in(weekday,vacation) {
    var sleep = !weekday||vacation;
    return sleep;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var smile = a_smile && b_smile;
    var noSmile =!a_smile && !b_smile;
    var trouble =smile||noSmile;
    return trouble;

}

function string_times(string,x){
    var n = x;
    var sum="";
    while(n>0){
        sum+=string;
        n--;
    }
    return sum;
}

function front_times(string, x){
    var sum="";
    var word = [string];
    while(x>0){
        sum = sum + string[0]+string[1]+string[2];
        x--;
    }
    return sum;

}

function string_bits(string){
    var sum = "";
    var x = 0;
    var letters = [string];
    var y = string.length;
    while(x<y){
        sum = sum+string[x];
        x=x+2
    }
    return sum;

}

function caughtSpeeding(x,y){
    if(y==true){
        var b = 5;
    }else{
        var b = 0;
    }
    var z = 0;

    if(61<=x-b<=80){
        z=1;
    }
    if(x-b>=81){
       z=2;

    }
    return z;
}

function fizz_buzz(x){
    var a = ""

    if(x!=0){
        var a = x +"!";
    }
    if(x%3==0){
        var a = "Fizz";
    }
    if(x%5==0){
        var a = "Buzz";
    }
    if(x%3==0 && x%5==0){
        var a = "FizzBuzz";
    }

    return a;
}

function teaParty(x,y){
    var good = 0;
    if(x >= 5 && y >= 5){
        good = good+1;
    }
    if(x < 5 || y < 5){
        good = good -1;
    }
    if(x>=y*2){
        good = good + 1
    }
    if(y>=x*2){
        good = good + 1
    }

    return good;
}

function blackjack(x,y){
    var Jack = 21;
    var z = 0;
    var JackX = Jack - x;
    var JackY = Jack - y;
    if(x>21 && y>21){
        z=z+1-1
    }
    if(JackX < JackY){
        z = z + x
    }
    if(JackY < JackX){
        z = z + y
    }
    if(x>21){
        return y
    }
    if(y>21){
        return x
    }
    if(x == y){
        z = z + x;
    }
    return z
}

function loneSum(a,b,c){
    var sum = a + b + c;
    if(a==b || a==c){
        sum = sum - a;
    }
    if(b==a || b==c){
        sum = sum - b;
    }
    if(c==a || c==b){
        sum = sum - c;
    }
    return sum;
}



function tester() {

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output1").innerHTML = monkey_trouble(true, false);
    document.getElementById("output2").innerHTML = string_times('Hi',3);
    document.getElementById("output3").innerHTML = front_times('Chocolate',3);
    document.getElementById("output4").innerHTML = string_bits("Hello");
    document.getElementById("output5").innerHTML = caughtSpeeding(60,true);
    document.getElementById("output6").innerHTML = fizz_buzz(15);
    document.getElementById("output7").innerHTML = teaParty(3,8);
    document.getElementById("output8").innerHTML = blackjack(19,19);
    document.getElementById("output9").innerHTML = loneSum(20,20,21);
    //test third method, etc
}
