tbody = document.createElement('tbody')
table = document.querySelector('.table')
let initialContacts = getContacts() || []


function getContacts() {
  return JSON.parse(localStorage.getItem('contacts'))
}

// function setContacts(contacts) {
//   localStorage.setItem('contacts', JSON.stringify(contacts))
// }

// setContacts(initialContacts)
let contacts = getContacts()

function createTable(){
  for (let index = 0; index < contacts.length; index++) {
    let row = document.createElement('tr')
    // creer le button de supression
    let buttonCell = document.createElement('td')
    let deleteButton = document.createElement('button')
    let buttonText = document.createTextNode('En cours')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.appendChild(buttonText)
    
    for (
      let element = 0;
      element < Object.keys(contacts[0]).length;
      element++
    ){

       if(element == 1 || element == 3){
          continue
       }
     
      // ajouter les td
      const cell = document.createElement('td')
      
      const cellText = document.createTextNode(
        Object.values(contacts[index])[element]
      )
      
      deleteButton.setAttribute('contactPhone', contacts[index].telephone)
      deleteButton.setAttribute('contactPhone', contacts[index].telephone)
      buttonCell.appendChild(deleteButton)
      cell.appendChild(cellText)
      row.appendChild(cell)
      row.appendChild(buttonCell)
      row.setAttribute('id', contacts[index].telephone)

      // console.log( Object.keys(contacts[0]));
    }
    tbody.appendChild(row)
  }
 table.appendChild(tbody)

}

createTable()

let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  }) 
