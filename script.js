function add() {
    var lastinput = 0, number = 0;
    // this variable will store input of user. 
    lastinput = form1.userinput.value;

    // this second variable will get last character of the input. so we can check it that it is what symbol
    // so we can replace the symbol. 
    number = lastinput.charAt(lastinput.length - 1);

    // this function will check last value of user input and then it will replace with already symbol.
    if (number == '+' || number == '-' || number == '/' || number == '*') {

        // this will store all the input except last symbol. like if input is 2345+123-, so it will
        // store 2345+123 in substring.
        form1.userinput.value = lastinput.substring(0, lastinput.length - 1);
        form1.userinput.value += '+';
    }
    else {
        form1.userinput.value += '+';
    }
}

function sub() {
    var lastinput = 0, number = 0;
    // this variable will store input of user. 
    lastinput = form1.userinput.value;

    // this second variable will get last character of the input. so we can check it that it is what symbol
    // so we can replace the symbol. 
    number = lastinput.charAt(lastinput.length - 1);

    // this function will check last value of user input and then it will replace with already symbol.
    if (number == '+' || number == '-' || number == '/' || number == '*') {

        // this will store all the input except last symbol. like if input is 2345+123-, so it will
        // store 2345+123 in substring.
        form1.userinput.value = lastinput.substring(0, lastinput.length - 1);
        form1.userinput.value += '-';
    }
    else {
        form1.userinput.value += '-';
    }
}

function mul() {
    var lastinput = 0, number = 0;
    // this variable will store input of user. 
    lastinput = form1.userinput.value;

    // this second variable will get last character of the input. so we can check it that it is what symbol
    // so we can replace the symbol. 
    number = lastinput.charAt(lastinput.length - 1);

    // this function will check last value of user input and then it will replace with already symbol.
    if (number == '+' || number == '-' || number == '/' || number == '*') {

        // this will store all the input except last symbol. like if input is 2345+123-, so it will
        // store 2345+123 in substring.
        form1.userinput.value = lastinput.substring(0, lastinput.length - 1);
        form1.userinput.value += '*';
    }
    else {
        form1.userinput.value += '*';
    }
}

function divi() {
    var lastinput = 0, number = 0;
    // this variable will store input of user. 
    lastinput = form1.userinput.value;

    // this second variable will get last character of the input. so we can check it that it is what symbol
    // so we can replace the symbol. 
    number = lastinput.charAt(lastinput.length - 1);

    // this function will check last value of user input and then it will replace with already symbol.
    if (number == '+' || number == '-' || number == '/' || number == '*') {

        // this will store all the input except last symbol. like if input is 2345+123-, so it will
        // store 2345+123 in substring.
        form1.userinput.value = lastinput.substring(0, lastinput.length - 1);
        form1.userinput.value += '/';
    }
    else {
        form1.userinput.value += '/';
    }
}