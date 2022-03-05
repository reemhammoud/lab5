
function getSize(){
    var x = document.getElementById("size").value
    if(x==1){
        return "Small Size";
    }
    else if(x==2){
        return "Medium Size"
    }
    else if(x==3){
        return "Large Size"
    }
    else{
        return "X-Large Size"
    }
    
}


function getMeet() {  
    
    var markedCheckbox = document.getElementsByName('pl');
    var list=[];
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked){ 
        list.push(checkbox.value + ' ');   
        }
    }  
    return list;
  }  

  function getVeg() {  
    
    var markedCheckbox = document.getElementsByName('p2');  
    var list=[];
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked){ 
        list.push(checkbox.value + ' ');  
        }
    }  
    return list;
  } 

  function getCheese(){
    var choice = document.getElementsByName('Cheese'); 
    for(i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            var cheeseVal = choice[i].value;
            if (cheeseVal === "Extra Cheese") {
              return 3;
            } else if (cheeseVal === "No Cheese") {
             return 2;
            } else if (cheeseVal === "Regular") {
              return 1;
            }
            
    }
  }
}


function ChangePizzaSize(){
    var val = document.getElementById("size").value
    if(val==1){
        document.getElementById("image").style.width="100px";
    }
    else if(val==2){
        document.getElementById("image").style.width="150px";
        document.getElementById("pizzasize").innerHTML="medium 10$";
    }
    else if(val==3){
        document.getElementById("image").style.width="200px";
        document.getElementById("pizzasize").innerHTML="Large 14$";
    }
    else{
        document.getElementById("image").style.width="250px";
        document.getElementById("pizzasize").innerHTML="X-Large 16$";
    }
}

function calculateTotal(){
    var val = document.getElementById("size").value
    if(val==1){
        if(getCheese()!=3){
            return 6+ getMeet().length*2+getVeg().length;
        }
        else{
            return 6+ getMeet().length*2+getVeg().length+3;
        }
    }
    else if(val==2){
        if(getCheese()!=3){
            return 10+ getMeet().length*2+getVeg().length;
        }
        else{
            return 10+ getMeet().length*2+getVeg().length+3;
        }
    }
    else if(val==3){
        if(getCheese()!=3){
            return 14+ getMeet().length*2+getVeg().length;
        }
        else{
            return 14+ getMeet().length*2+getVeg().length+3;
        }
    }
    else{
        if(getCheese()!=3){
            return 16+ getMeet().length*2+getVeg().length;
        }
        else{
            return 16+ getMeet().length*2+getVeg().length+3;
        }
    }
}

function fillSummary(){
    var x="";
    x+=document.getElementById("Firstname").value;
    x+=" "
    x+=document.getElementById("LastName").value;
    x+=", "
    x+=document.getElementById("E-mail").value;
    x+=", "
    x+=document.getElementById("PhoneNumber").value;
    x+=", "
    x+=document.getElementById("address").value;
    document.getElementById("dlvrTo").innerHTML=x;

    var list=[];
    list=list.concat(getSize());
    list = list.concat(getMeet());
    list = list.concat(getVeg());
    
    var cont = document.getElementById("orderList");
    var ul=document.createElement("ul");
    var li = document.createElement("li");
    for(i=0;i<list.length;i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(list[i]));
        ul.appendChild(li);
    }
    cont.appendChild(ul);
    
    document.getElementById("total").innerHTML="Total: "+calculateTotal()+" $";
}


function gotoPage(id){
    if(id=="Address"){
        document.getElementById("page1").style.display="none";
        document.getElementById(id).style.display="block";
        document.getElementById("OrderSummary").style.display="none";
        document.body.style.backgroundColor="#e93a57";
        
    }
    else if(id=="OrderSummary"){
        document.getElementById("Address").style.display="none";
        document.getElementById(id).style.display="block";
        document.body.style.backgroundColor="#3fc38e";
    }
    else if(id=="page1"){
        document.getElementById("Address").style.display="none";
        document.getElementById(id).style.display="block";
        document.getElementById("OrderSummary").style.display="none";
    }
}
function CheckInfo() {
    var x = document.forms["Location"]["Firstname"].value;
    var y = document.forms["Location"]["LastName"].value;
    var z = document.forms["Location"]["E-mail"].value;
    var a = document.forms["Location"]["PhoneNumber"].value;
    var b = document.forms["Location"]["Address"].value;
    var c = document.forms["Location"]["City"].value;
  if (x == "" || y=="" || z=="" || a=="" || b=="" || c=="") {
    alert("Fill all fields please!");
    gotoPage("Address");
    return false;
  }
}