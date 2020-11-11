
var counting = 0;
function toLink(x){
    alert('Copy the following link to access more info: '+x);
}
function counter(){
    const cott = document.querySelector("#ctbutton");
    
    var finishpoint = 29
    if (counting===finishpoint){
        cott.innerHTML = "You win!"
    } else {
        if (counting!=finishpoint){
            counting++;
            cott.innerHTML = counting
            if (counting % 10===0 && counting === 10){
                alert("You've reached ten")
            } else if (counting % 10===0) {
                alert("You've reached another 10")
            }
        }
    }
}
function thankyou() {
    alert ('Thank you for signing up for our website!')
}
function copyToClipboard() {
    var copyText = document.querySelector("#path");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#count').onclick = counter;
});
document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('#signup').onsubmit = function (){
        const name = document.querySelector('#name').value;
        //When including a variable in a string like the code below, use backticks (`) instead of the quotation marks.
        alert (`Hello ${name}!`)
    }
    
});
document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#copyButton').onclick = copyToClipboard;
})
document.addEventListener('DOMContentLoaded', function (){
    const colorDisplay = document.querySelector('#ctbutton');
    
    document.querySelectorAll('.countdisplaychange').forEach(function(button) {
        button.onclick = function(){
            document.querySelector('#ctbutton').style.color = button.dataset.color;
        }
    });
        colorDisplay.style.color = 'data-colo';
    
})