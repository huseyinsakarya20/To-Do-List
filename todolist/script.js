let addToDoButton =document.getElementById('addSubmit');
let toDocontainer = document.getElementById('toDocontainer');
let inputText =document.getElementById('inputText')
let clearSubmit =document.getElementById('clearSubmit')

addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    toDocontainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = '';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick',function(){
        toDocontainer.removeChild(paragraph);
    });

    clearSubmit.addEventListener('click',function(){
        paragraph.remove();
    })
})