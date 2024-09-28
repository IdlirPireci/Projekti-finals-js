// function AddTask()
// {
//     //1. var newTask = {id:5, title...}
//     var newTask = {"id":5, "status": pending, "Difficulty": easy }
//     //2. Get all table data from localStr ->var tableData = [{"id":1, "name":"test", "status":"pending", "diffuculty":"hard"},...]
//     localStorage.getItem(var tableData);
//     //3. Append new row into json array
    
//     //4. localStorage.setItem("newData", tableData); & localStorage.removeItem("tableData")
// }


// var mode = "ready";

// function EditTask(){
//     //1. set mode variable to edit -> 
//     if(mode === "ready")
//     {
//         mode = "edit";
//         // make table row editable        
//     }
//     else
//     {
//         mode = "ready";
//         // create an object for the row data
//         var rowData = {
//             titulli = 
//             pershkrimi = 
//             diffuclti =
//         };
//         //call SaveChanges function
//         SaveChanges(rowData)
//     }
// }

// function DeleteTask(var rowId)
// {
//     //1. Get all table data from localStr ->var tableData = [{"id":1, "name":"test", "status":"pending", "diffuculty":"hard"},...]
//     //2. Find the json object for the specific row using id attribute -> var objectToUpdate = {"id":1, "name":"test", "status":"pending", "diffuculty":"hard"}
//     //3. Remove an object from json array
// }


// function SaveChanges(RowData rowData){
//     //rowData structure = {"id":1, "name":"test", "status":"done", "diffuculty":"hard"}

//     //1. Get all table data from localStr ->var tableData = [{"id":1, "name":"test", "status":"pending", "diffuculty":"hard"},...]
//     //2. Find the json object for the specific row using id attribute -> var objectToUpdate = {"id":1, "name":"test", "status":"pending", "diffuculty":"hard"}
//     //3. Update/change the data of the row by changing the json object attribute value -> var updatedObject = {"id":1, "name":"test", "status":"done", "diffuculty":"hard"}
//     //4. Replace the rowData of tableData with the updatedObject
//     //5. localStorage.setItem("updatedData", tableData); & localStorage.removeItem("tableData")
// }



function AddTask()
{
    //1. var newTask = {id:5, name...}
    //2. Get all table data from localStr ->var tableData = [{"id":1, "name":"test", "status":"pending", "diffuculty":"hard"},...]
    //3. Append new row into json array
    //4. localStorage.setItem("newData", tableData); & localStorage.removeItem("tableData")
}


var mode = "ready";

function EditTask(){
    //1. set mode variable to edit -> 
    if(mode === "ready")
    {
        mode = "edit";
        // make table row editable        
    }
    else
    {
        mode = "ready";
        // create an object for the row data
        var rowData = {
            titulli = 
            pershkrimi = 
            diffuclti =
        
        //call SaveChanges function
        SaveChanges(rowData)
    }
}

function DeleteTask(var rowId)
{
    //1. Get all table data from localStr ->var tableData = [{"id":1, "name":"test", "status":"pending", "diffuculty":"hard"},...]
    //2. Find the json object for the specific row using id attribute -> var objectToUpdate = {"id":1, "name":"test", "status":"pending", "diffuculty":"hard"}
    //3. Remove an object from json array
}


function SaveChanges(RowData rowData){
    //rowData structure = {"id":1, "name":"test", "status":"done", "diffuculty":"hard"}

    //1. Get all table data from localStr ->var tableData = [{"id":1, "name":"test", "status":"pending", "diffuculty":"hard"},...]
    //2. Find the json object for the specific row using id attribute -> var objectToUpdate = {"id":1, "name":"test", "status":"pending", "diffuculty":"hard"}
    //3. Update/change the data of the row by changing the json object attribute value -> var updatedObject = {"id":1, "name":"test", "status":"done", "diffuculty":"hard"}
    //4. Replace the rowData of tableData with the updatedObject
    //5. localStorage.setItem("updatedData", tableData); & localStorage.removeItem("tableData")
}
function AddTask() {
  // 1. Create a new task object with an ID and other properties
  var newTask = {
      id: 5, // Example ID, this should be unique and usually generated dynamically
      name: "New Task", // Example name, replace with actual input value
      status: "pending", // Example status, replace with actual input value
      difficulty: "medium" // Example difficulty, replace with actual input value
  };
  
  // 2. Get all table data from localStorage
  var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  
  // 3. Append new task object into json array
  tableData.push(newTask);
  
  // 4. Store the updated tableData array back in localStorage and remove old data
  localStorage.setItem("tableData", JSON.stringify(tableData));
}

var mode = "ready";

function EditTask() {
  // 1. Set mode variable to edit
  if (mode === "ready") {
      mode = "edit";
      // Make table row editable (implementation depends on your HTML and logic)
  } else {
      mode = "ready";
      // Create an object for the row data (replace these with actual input values)
      var rowData = {
          id: 1, // Replace with actual ID
          name: "Edited Task", // Replace with actual name
          status: "done", // Replace with actual status
          difficulty: "easy" // Replace with actual difficulty
      };
      // Call SaveChanges function
      SaveChanges(rowData);
  }
}

function DeleteTask(rowId) {
  // 1. Get all table data from localStorage
  var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  
  // 2. Find the json object for the specific row using id attribute
  // 3. Remove the object from json array
  tableData = tableData.filter(task => task.id !== rowId);
  
  // 4. Update localStorage with the modified tableData
  localStorage.setItem("tableData", JSON.stringify(tableData));
}

function SaveChanges(rowData) {
  // rowData structure = {"id":1, "name":"test", "status":"done", "difficulty":"hard"}

  // 1. Get all table data from localStorage
  var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  
  // 2. Find the json object for the specific row using id attribute
  var objectToUpdate = tableData.find(task => task.id === rowData.id);
  
  // 3. Update/change the data of the row by changing the json object attribute value
  if (objectToUpdate) {
      Object.assign(objectToUpdate, rowData);
  }
  
  // 4. Replace the rowData of tableData with the updatedObject
  // Note: This is already handled by Object.assign
  
  // 5. Store the updated tableData array back in localStorage and remove old data
  localStorage.setItem("tableData", JSON.stringify(tableData));
}}
