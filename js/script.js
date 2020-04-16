/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
//Global variables declared to be used as arguments in both functions
const itemList = document.querySelectorAll('.student-item')
const itemsPerPage = 10;

      /* Show page function declared. This function is used to display only
        10 User profiles at a time.  */
const showPage = (list, page) => {
        /* startIndex and endIndex declared. Calculation is used to generate start
        and end point of for loop so only a certain number of proiles are visable
        to a user  */
  const startIndex = (page * itemsPerPage)-itemsPerPage;
  const endIndex = page * (itemsPerPage) -1 ;
      //for loop loops over ItemList variable
  for(let a = 0; a < list.length; a += 1){
    if( a >= startIndex && a <= endIndex){
      list[a].style.display = 'block';
    } else{
      list[a].style.display = 'none';
    }
  }
}

        /* appendPageLinks function declared. This function adds div to the conatiner div,
        nests a ul element within that div. Then creates a series of li elements. The
        length of the li elements is dependent on how many items are in the list the
        function is called on that is then divided by the maxium numbers of items allowed itemsPerPage
        page. The li items are then assigned an a element. The a elements are asigned '#' as
        a href vaule and the textContent is set to a starting value of 1 and icreases by 1
        for each new li element. The first li element i asigned a class of active. An
        Event listener is the added to all the a elements. Each time the a element is clicked
        it removes the active class from all a elements using a for loop and then assigns
        the a element that was clicked an active className;  */
const appendPageLinks = (list) => {
        //.page div called, newDiv and ul element created
  const pageDiv = document.querySelector('.page');
  const newDiv = document.createElement('div');
  newDiv.className = 'pagination';
  const ul = document.createElement('ul');

        //numberOfPages variable declared. Use to calculate how many pages need to be generated.
  let listLength = list.length;
  let numberOfPages = Math.ceil( listLength / itemsPerPage )

        //newDiv and  ul appended to .page div
  pageDiv.appendChild(newDiv);
  newDiv.appendChild(ul);

        //for loop used to create and apend new li and a elements to NewDiv
  for( let i = 0; i < numberOfPages; i += 1){

  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const calledPage = i+1;

  link.href = "#";
  link.textContent = `${calledPage}`;

  ul.appendChild(listItem);
  listItem.appendChild(link);


  }
        //first li element in newDiv is called, stored in active link variable. Class name on first li ic hanged to active.
  const activeLink = document.querySelector('li a:first-child');
  activeLink.className = 'active';

        //showPage function called
  showPage(itemList, 1)
        // new varibale declared calling all 'a' elements
  const aLinks = document.querySelectorAll('a');
        /* click event is added to all 'a' elements. 'active' name class is removed from
        all 'a' elemebnts. 'active class is added to 'a element that has been clicked */
  ul.addEventListener('click', (event) => {
    for( let c = 0; c < aLinks.length; c += 1){
      aLinks[c].className = '';
    }
    event.target.className = 'active';
        //showPage function called displaying active links
    showPage(itemList, event.target.textContent)
  });

}
        //appendPageLinks function called
appendPageLinks(itemList)
