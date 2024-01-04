function talk() {


    let user = document.getElementById('userBox').value;
    console.log(user);



    switch(user){

        case "hi":document.getElementById('chatLog').innerHTML="Hello ";
        break;

        case "who are you":document.getElementById('chatLog').innerHTML="Myself BOT";
        break;

        case "how are you":document.getElementById('chatLog').innerHTML="Good :) how about you";
        break;

        case "what can i do for you":document.getElementById('chatLog').innerHTML="Anythng as you wish";
        break;

        case "ok":document.getElementById('chatLog').innerHTML="Thank You So Much";
        break;

        case "bye":document.getElementById('chatLog').innerHTML="Okay! Will meet soon..";
        break;

        case "date":document.getElementById('chatLog').innerHTML="MAY 2023";
        break;
        
        default:
            document.getElementById('chatLog').innerHTML="Sorry I didnt understand";


    }
    

}