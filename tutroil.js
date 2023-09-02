function data() {
    var plan = document.getElementById('plan').value;
    var event = document.getElementById('event').value;
    var when = document.getElementById('when').value;
        
}
function add() {
   const plan = document.getElementById('plan').value;
    const event = document.getElementById('event').value;
    const  when = document.getElementById('when').value; 
         let write = "<div class='task'><p id=\"p\">" + plan + "</p><p>" + event + "</p><p>" + when + "</p><button  onclick='bt2()'>Completed</button></div>";
 document.getElementById('main').innerHTML += "<div class='task'><p id=\"p\">" + plan + "</p><p>" + event + "</p><p>" + when + "</p><button  onclick='bt2()'>Completed</button></div>";
 document.getElementById("h4").onclick = function() {

       
       add();
    document.getElementById("plan").style.display = "none";
    document.getElementById("event").style.display = "none";
    document.getElementById("when").style.display = "none";
    document.getElementById('add').innerText = "Back";
    document.getElementById("add").onclick = function() {
        document.querySelector(".task").style.display = "none";
        document.getElementById("plan").style.display = "block";
    document.getElementById("event").style.display = "block";
    document.getElementById("when").style.display = "block";
    document.getElementById("add").innerText = "add";
      document.getElementById("add").onclick = function() {
          add();
      }
        
    
    }
 }
}

function bt2() {
   
document.querySelector(".task").remove();
}
