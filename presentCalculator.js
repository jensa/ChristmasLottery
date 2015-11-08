var persons = [];
var idCount = 0;

// http://stackoverflow.com/questions/19875633/how-to-pick-unique-pairs-from-a-single-list
function handleEnterKey(key){
  if(key.charCode==13 || key.keyCode ==13){
    addPerson();
  }
}
function addPerson(){
  var lista = document.getElementById("lista");
  var nameBox = document.getElementById("name");
  var name = nameBox.value;
  if(!name || name === "")
    return;
  persons.push(name);
  var listElement = document.createElement("li")
  listElement.value = name;
  listElement.appendChild(document.createTextNode(name));
  listElement.setAttribute("class", "clickableLi");
  listElement.onclick = function(){
    lista.removeChild(listElement);
    removeElement(persons, name);
  }
  lista.appendChild(listElement);
  nameBox.value = "";
  nameBox.focus();
}


function calculate(){

  document.getElementById("resultat").innerHTML = "";

  var matches = [];
  var other = persons.slice(0);
  other = shuffle(other);
  for(var i = 0;i< other.length-1;i++){
    matches[i] = {
      first: other[i],
      second:other[i+1]
    };
  }
  matches[other.length-1] = {
    first:other[other.length-1],
    second:other[0]};

  for (i = 0; i < matches.length; ++i) {
    document.getElementById("resultat").innerHTML += "<li> "+matches[i].first + " ska ge till "+matches[i].second+"</li>";
  }


}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function removeElement(array, element){
  for(var i = array.length - 1; i >= 0; i--) {
    if(array[i] === element) {
      array.splice(i, 1);
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
