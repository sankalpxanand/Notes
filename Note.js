console.log('Welcome to Magic Notes');
showNotes();

// If an user adds a value, add it to the localStorage

let addBtn = document.getElementById('addBtn'); // var 'addBtn' is used to get access to the HTML Element with ID 'addBtn'

/* 
    '.addEventListner' is applied on a variable to access it for a function, a function like 'click' 
    Syntax:
    var_name.addEventListne("function_name",function()
    {

    });
*/

addBtn.addEventListener("click", function() 

{
    let addTxt = document.getElementById("addTxt"); // var 'addTxt' is used to get access to the HTML Element with ID 'addTxt'
    let notes = localStorage.getItem("notes"); // 'notes' is variable which GET ITEMS stored in LOCAL STORAGE from the class 'notes' so that we can display it under YOUR NOTES
    if (notes == null)
    {
        notesObj = [];
    } // If notes are NULL 'notesObj' is an array will be shown as NULL
    else
    {
        notesObj = JSON.parse(notes);
    } // If notes are NOT NULL then then the array 'notesObj' will be show us in the OBJECT format of 'notes' by using 'JSON.parse(notes)'

    // Basicaly if there are any notes it'd be stored inside the array 'notesObj' in the form of OBJECT
    notesObj.push(addTxt.value); // The value of 'addTxt' (i.e. the text writen as a note) will be pushed to 'notesObj' (i.e. 'notesObj = addTxt's value) 
    localStorage.setItem("notes", JSON.stringify(notesObj)); 
    /*Now when you'll type "localStorage" inside the console it'll give note(key) : notesObj in STRING format(value).
    JSON.stringfy(array_name) will convert the OBJECT formatted array into STRING formatted array. 
    We convert the OBJECT fomatted array into STRING formatted array beacuse in console only STRING foramtted array can be read
    */
    addTxt.value = ""; // With this after we click on 'ADD NOTE' the text inside the box will be NULL/EMPTY 
    //console.log(notesObj); // As soon as you write the note in the box and hit click on the 'ADD NOTE' console will show the note
    showNotes();
});

// Note showing function from localStorage

function showNotes()
{
    let notes = localStorage.getItem("notes"); // 'notes' is variable which GET ITEMS stored in LOCAL STORAGE from the class 'notes' so that we can display it under YOUR NOTES
    if (notes == null)
    {
        notesObj = [];
    } // If notes are NULL 'notesObj' is an array will be shown as NULL
    else
    {
        notesObj = JSON.parse(notes);
    } // If notes are NOT NULL then then the array 'notesObj' will be show us in the OBJECT format of 'notes' by using 'JSON.parse(notes)'

    // Basicaly if there are any notes it'd be stored inside the array 'notesObj' in the form of OBJECT

    let html = "" ; //The reason for this line i.e to let 'html' = "" is to define it as STRING otherwise it will remain as UNDEFINED
    //console.log(typeof(html));

    /*
    forEach is loop just like 'for' loop.
    In this loop the compilier goes to every element and do the work for every element as commanded and then exit the loop after the elements finish.
    Syntax:
    array_name.forEach(function(element,index)
    {

    });
    element & index are just variable but as the name suggest the working is same
    element refers to the value of that array 
    index refers to the index-number of that array element
    */

    notesObj.forEach(function (note,index) 
    {
        /*
            'html=html+' is used beacuse after storing one note in 'html' the 'html' variable has an increment and stores the next note.
            If only 'html=' has been used then there will be no incrementation. 
            Thus after storing the first value when we store the second value the second value/note would have taken place of the first note.
            And only the most recent note will be shown ONLY with index number + 1.
        */
        html = html+   `
                            <div id="notes" class="row noteBody" style="margin-left: 20px;">
                            <div class="noteAdd">
                                <div class="noteCard">
                                    <h5>Note ${index +1}</h5> 
                                    <p>
                                        ${note}
                                    </p>
                                    <button  class="noteBtn" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                                </div>
                            </div>
                        `
                // `` is used to put value in the variable like these
                //${indix+1} -> refers to 'index of that array + 1' i.e. index_number+1
                //${note} -> refers to the value of the array i.e. the notes added in the array 'notesObj' by inputed by the user in the 'addTxt' box

                /*
                id="${index}" onclick="deleteNote(this.id)" -> 
                The ID of this element will be its on very index by 'id="${index}"'
                The function 'deleteNote' used for 'onclick' has the argument as "this.id" which will get the ID of that very HTML element and the ID of that element is its index.
                */

                //console.log(element);
                //console.log(index);
    });

    let notesElm = document.getElementById('notes'); // var 'notesElm' is used to get access to the HTML Element with ID 'notes' 
    let notess = document.getElementById('addTxt');
    if(notesObj.length!=0)
    {
        notesElm.innerHTML=html;
        /*
        .innerHTML adds the writen context to the HTML element thus gets printed on the webpage
        Syntax :
        var_name(which is assigned to the value of that HTML element in that HTML element in which the update will happen).innerHTML = some variable like above we used 'html'
        var_name => notesElm
        the HTML element => notes
        update happen in the HTML element is => notes  
        */
    }
    else
    {
        notesElm.innerHTML = `ɴᴏ ɴᴏᴛᴇs ᴀʀᴇ ᴀᴅᴅᴇᴅ, ᴛᴏ ᴀᴅᴅ ᴀ ɴᴏᴛᴇ ᴡʀɪᴛᴇ ɪɴ ᴛʜᴇ ᴀʙᴏᴠᴇ sᴇᴄᴛɪᴏɴ ᴀɴᴅ ᴄʟɪᴄᴋ ᴏɴ "ᴀᴅᴅ ɴᴏᴛᴇ" ʙᴜᴛᴛᴏɴ.`;
        /*
        .innerHTML adds the writen context to the HTML element thus gets printed on the webpage
        Syntax :
        var_name(which is assigned to the value of that HTML element in that HTML element in which the update will happen).innerHTML = some text in `` 
        var_name => notesElm
        the HTML element => notes
        update happen in the HTML element is => notes
        */
    }
}

function deleteNote(index)
/* 
    The argument that is 'index' we get from the above HTML element of class = noteBtn. 
*/
{
    //console.log("I am deleting a note",index );

    let notes = localStorage.getItem("notes"); // 'notes' is variable which GET ITEMS stored in LOCAL STORAGE from the class 'notes' so that we can display it under YOUR NOTES
    if (notes == null)
    {
        notesObj = [];
    } // If notes are NULL 'notesObj' is an array will be shown as NULL
    else
    {
        notesObj = JSON.parse(notes);
    } // If notes are NOT NULL then then the array 'notesObj' will be show us in the OBJECT format of 'notes' by using 'JSON.parse(notes)'

    // Basicaly if there are any notes it'd be stored inside the array 'notesObj' in the form of OBJECT

    notesObj.splice(index,1);
    console.log(index);
    /*
        .splice is a function applied in array which 'removes' or 'replaces' an element from an array on which it is applied.
        It requires starting index as the first argument (in this case the element which will be removed is refered by its index that means if we want to remove 3rd element, index would be (3-1) 2)
        It requires how many elements you want to remove as the second argument
    */
    localStorage.setItem("notes", JSON.stringify(notesObj)); 
    /*Now when you'll type "localStorage" inside the console it'll give note(key) : notesObj in STRING format(value).
    JSON.stringfy(array_name) will convert the OBJECT formatted array into STRING formatted array. 
    We convert the OBJECT fomatted array into STRING formatted array beacuse in console only STRING foramtted array can be read
    */
   showNotes();
}