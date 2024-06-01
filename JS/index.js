var bookmarkName_var = document.getElementById("bookmarkName");
var urlName_var = document.getElementById("urlName");

// define arr to store data inside it 
var bookmark_arr = []
// bookmark_arr = JSON.parse(localStorage.getItem("local"))
// display()
// empty cartoona to store ui design to display
function add_bookmark(){
   if ((validateInput() == true) && (isValidUrl() == true)){
    var bookmark_obj = {
        mark_name: bookmarkName_var.value,
        url_name: urlName_var.value
    }
    bookmark_arr.push(bookmark_obj)
    clear()
    console.log(bookmark_arr);
    display()
   }
}


// function to display
function display() {
    var cartoona = ""
    // push design to display it to user
    for (var i = 0; i < bookmark_arr.length; i++) {
        cartoona += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${bookmark_arr[i].mark_name}</td>
                        <td>
                       <button class="btn btn-success"> <a style="text-decoration: none; color: inherit;" target="_blank" href="${bookmark_arr[i].url_name}"><i class="fa-solid fa-eye"></i> visit</a>  </button> 
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="delete_bookmark(${i})"><i class="fa-solid fa-trash-can "></i> Delete</button>
                        </td>
                    </tr>
    `
    }
    // inside html element to complete displaying data
    document.getElementById("table_data").innerHTML = cartoona
}

/// don't forget clear function
function clear(){
    bookmarkName_var.value = null;
    urlName_var.value = null;
}

//! DELETE elements
function delete_bookmark(index) {
    bookmark_arr.splice(index, 1);
    display()
}
// validation
// input
function validateInput(){
    var text = bookmarkName_var.value;
    var regex = /^[A-Z][a-z]{3,8}$/
    if(regex.test(text) == true){
        bookmarkName.classList.add("is-valid");
        bookmarkName.classList.remove("is-invalid");
        return true;
    }else{
        bookmarkName.classList.add("is-invalid");
        bookmarkName.classList.remove("is-valid");
        return false;
    }
}
// url
function isValidUrl(){
    var url = urlName_var.value;
    var pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' 
      );
      if(pattern.test(url) == true){
        urlName.classList.add("is-valid");
        urlName.classList.remove("is-invalid");
        return true;
      }else{
        urlName.classList.add("is-invalid");
        urlName.classList.remove("is-valid");
        return false;
    }
}

// //? Storage --- incomplete, don't run it
// localStorage.setItem ("Local", JSON.stringify(bookmark_arr))