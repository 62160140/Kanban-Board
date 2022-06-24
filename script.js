const drag_item = document.querySelectorAll('.drag-item')
const drag_list = document.querySelectorAll('.drag-item-list')

let selectedItem;

//รายการ
drag_item.forEach((item => {
  item.addEventListener('dragstart',onDragStart);
}))

//หมวดหมู่
drag_list.forEach((item)=>{
  item.addEventListener('dragover',onDragOver) //ปิดการ refresh
  item.addEventListener('dragenter',onDragEnter)  //ปิดการ refresh
  item.addEventListener('drop',onDrop)
})

function onDrop(){
  this.append(selectedItem);
  selectedItem=null;
}


function onDragStart(){
  selectedItem=this; 
}

function onDragOver(e){
  e.preventDefault();
  
}
function onDragEnter(e){
  e.preventDefault();
  
}