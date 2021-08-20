const socket = io('http://localhost:3000');

const nameCont = document.getElementById('name');
var user_name = '';

const message_container = document.querySelector('.message-box');
const sendBtn = document.getElementById('sendBtn');
const screen = document.getElementById('chat_window');

const joinRoom = () => {
  user_name = nameCont.value;
  if(user_name === ''){
    alert('Please enter your name');
  }
  else{
    document.querySelector('.get-entry').style.display = "none";
    document.querySelector('.app').style.display = "block";
    socket.emit('new-user-joined',user_name);
  }
}

const append = (message,position) => {
  let messageElement = document.createElement('h6');
  messageElement.innerText = message;
  messageElement.classList.add(position);
  if(position !== 'cenner') messageElement.classList.add('ms');
  screen.append(messageElement);
}

socket.on('recieve', data => {
  append(`${data.name} : ${data.message}`,'left');
});

socket.on('joining', user_name => {
  append(`${user_name} has joined the chat`,'cenner');
  console.log(user_name + 'connected');
});

sendBtn.addEventListener('click',() => {
  var msg = message_container.value;
  append(`You : ${msg}`,'right');
  socket.emit('send-message',msg);
  message_container.value = '';
});

sendBtn.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    var msg = message_container.value;
    append(`You : ${msg}`,'right');
    socket.emit('send-message',msg);
    message_container.value = '';
  }
});