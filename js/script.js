let nameInput = document.getElementById('bookmarkName');
let urlInput = document.getElementById('bookmarkUrl');
let bookmarkList = document.getElementById('bookmarkList')

//create
let dataPro;

if (localStorage.webData !== null){
    dataPro = JSON.parse(localStorage.webData)
    displayData()
}else{
    dataPro = [];
}

function create(){
 newPro = {
    name:nameInput.value,
    url:urlInput.value,
 };

 var name = nameInput.value;
 var url = urlInput.value;

 if (!name || !url) {
    alert('Please fill in all fields');
    return;
}
if (!url.match(/^https?:\/\/.+\..+/)) {
    alert('Please enter a valid URL (include http:// or https://)');
    return;
}

 dataPro.push(newPro);

 localStorage.setItem('webData' , JSON.stringify(dataPro))
 console.log(dataPro)

 clear()
 displayData()
 
}

//clear inputs
function clear(){
    bookmarkName.value='';
    bookmarkUrl.value='';
}

//display input

function displayData(){
 let table =''
 for(let i = 0 ; i < dataPro.length;i++){
    table += ` 
<tr>
  <td>${i}</td>
  <td>${dataPro[i].name}</td>
 <td>
<button onclick="visitBookmark('${dataPro[i].url}')" class="btn btn-success p-2 btn-md"> Visit </button>
</td>
<td>
<button onclick="deleteItem( ${ i } )" class="btn btn-danger p-2 btn-md">Delete</button>
</td>
</tr>
`
 }
 document.getElementById('bookmarkList').innerHTML= table   
}


// delete function
 function deleteItem(index) {
    dataPro.splice( index , 1)
    localStorage.setItem('webData' , JSON.stringify(dataPro))
    displayData()
 }

 //visit

 function visitBookmark(url) {
    window.open(url, '_blank');
}
