const socket = io('http://localhost:8000');

const nameCont = document.getElementById('name');
var user_name = '';

const message_container = document.querySelector('.message-box');
const sendBtn = document.getElementById('sendBtn');

const joinRoom = () => {
  user_name = nameCont.value;
  if(user_name === ''){
    alert('Please enter your name');
  }
  else{
    document.querySelector('.get-entry').style.display = "none";
    document.querySelector('.app').style.display = "block";
  }
}
