$(function(){
    $('.kuji').click(function(){
        var math = Math.floor(Math.random() * 5);

        if(math == 4){
            $('#answer').text('大吉！！');
        }else if(math == 3){
            $('#answer').text('中吉');
        }else if(math == 2){
            $('#answer').text('小吉');
        }else if(math == 1){
            $('#answer').text('凶(T ^ T)');
        }else{
            $('#answer').text('大凶∑(ﾟДﾟ)');
        }
    });

    $('#reset').click(function(){
        $('#answer').text('クリック!!!');
    });

});


function FizzBuzz() {
    for (let i = 1; i < 101 ; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }else if(i % 5 == 0){
            console.log('Buzz');
        }else if(i % 3 == 0){
            console.log('Fizz');
        }else{
            console.log(i);
        }
    }
};

FizzBuzz();