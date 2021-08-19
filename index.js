const nameCont = document.getElementById('name');
var user_name = '';


const joinRoom = () => {
  user_name = nameCont.value;
  if(user_name === ''){
    alert('Please enter your name');
  }
  else{
    document.querySelector('.get-entry').style.display = "none";
    console.log(user_name);
  }
}
