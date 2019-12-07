const password = '111Aa@1';

function passChecker(n, password) {
    // Return the minimum number of characters to make the password strong
    var result = 0;
    var problems =  4;
    var numbers = "0123456789";
    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special_characters = "!@#$%^&*()-+";

    if (password.length < 6){
        result = 6 - password.length;
        return result;
    } else {
        var newArr = password.split('');
        console.log(newArr);
        
        function hasCharacter(argument) {
            return newArr.includes(argument);
        }
        for(var i = 0; i < numbers.length ; i++){
            //console.log(numbers[i])
            if(hasCharacter(numbers[i])){
                console.log('number ok: ', numbers[i]);
                problems--;
                break;
            }

        }
        for(var i = 0; i < lower_case.length ; i++){
            //console.log(numbers[i])
            if(hasCharacter(lower_case[i])){
                console.log('lower_case ok: ', lower_case[i]);
                problems--;
                break;
            }

        }
        for(var i = 0; i < upper_case.length ; i++){
            //console.log(numbers[i])
            if(hasCharacter(upper_case[i])){
                console.log('upper_case ok: ', upper_case[i]);
                problems--;
                break;
            }

        }
        for(var i = 0; i < special_characters.length ; i++){
            //console.log(numbers[i])
            if(hasCharacter(special_characters[i])){
                console.log('special_characters ok: ', special_characters[i]);
                problems--;
                break;
            }

        }
        return problems;

    }
}
console.log(passChecker(6, password));
