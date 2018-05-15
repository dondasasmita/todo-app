var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);


function addItem(){
    // element of input type from index.html
    var input = document.getElementById('input');
    // input from user
    var item = input.value;
    ul;
    var textnode = document.createTextNode(item);

    if (item === '' ){
         // add a p tag assign a value of "Enter your todo";
        var alert = document.createElement('p');
        var alertValue = document.createTextNode('Enter a valid task');
        alert.appendChild(alertValue);
        document.querySelector('p').appendChild(alert);
        // make it appear and go away after a few seconds
        setTimeout(() => {
            alert.style.display = "none";
        }, 1000)
       
    } else {
        //create list item
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        
        // create label 
        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        //add the elements to the webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 1)

        input.value = '';
    }
}

function removeItem(){

   //declare list item as array of childrean of unordered list (parent)
    li = ul.children;
    //for loop to go through list item of each index 
    for(let i = 0 ; i < li.length; i++){
        //if the list at index and its child at the index of 0 are checked
        if (li[i] && li[i].children[0].checked) {
            //remove the list item
            ul.removeChild(li[i]);
        } 
    }
}

