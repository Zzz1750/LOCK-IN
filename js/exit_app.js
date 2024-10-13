var exit= document.getElementById('exit');
var transitor = document.getElementById('transitor');

function closeWindow() {
  transitor.style.display='block';
  transitor.style.opacity=0;
  setTimeout(exit_transitor,500);
  }
  document.getElementById('exit').addEventListener('click', closeWindow);

function exit_transitor(){
  transitor.style.opacity=1;
  setTimeout(exit_game,500);
}
function exit_game(){
  window.close();
}


  //if the window was opened by a script
  //window.onload = function() {
  //  if (!window.opener) {
  //   alert("This window was not opened by a script and cannot be closed programmatically.");
  //    document.getElementById('exitButton').disabled = true;
  //  }
  //}