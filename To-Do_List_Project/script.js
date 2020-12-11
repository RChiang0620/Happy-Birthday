

function addItem() {
  var newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("input").value;
  newItem.onclick = removeItem;
  document.getElementById("list").appendChild(newItem);
  if (newItem == "null") {
    alert('Please enter something before pressing the "+" button!')
  }
}

function removeItem() {
  document.getElementById("list").removeChild(this);
}

function description() {
  alert("Welcome to The RO-Do List! The Ro-Do List is the first JavaScript project created by web developer Mr. Ryan Chiang. It was first published on 15th December, 2020, as his mother's birthday present. The name 'RO-DO' is created by adding the word 'R' , representing Mr. Chiang, while putting it in the first alphabet of the name. As it is a To-Do List, the rest of the name will be '(-)o-DO List'. As well as, it is pronounced as 'Roo-Doo'.  Press OK to continue.")
  alert("To use The RO-DO List, just simply type your item in the input box, and then press the '+' button to add your item. To delete an item, just click on the item you want to delete, and it will be deleted. To delete everything, just reload the page. Enjoy!")
}

window.onload = function() {
  alert("Welcome to The RO-Do List! The Ro-Do List is the first JavaScript project created by web developer Mr. Ryan Chiang. It was first published on 15th December, 2020, as his mother's birthday present. The name 'RO-DO' is created by adding the word 'R' , representing Mr. Chiang, while putting it in the first alphabet of the name. As it is a To-Do List, the rest of the name will be '(-)o-DO List'. As well as, it is pronounced as 'Roo-Doo'.  Press OK to continue.")
  alert("To use The RO-DO List, just simply type your item in the input box, and then press the '+' button to add your item. To delete an item, just click on the item you want to delete, and it will be deleted. To delete everything, just reload the page. Enjoy!")
}