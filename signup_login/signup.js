function validateForm() {
    let name = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["EMail"];
    let password = document.forms["RegForm"]["Password"];
    let confirmPassword = document.forms["RegForm"]["Confirm"];

    // Form validation checks
    if (name.value === "") {
        alert("Please enter your name");
        return false;
    }
    if (email.value === "") {
        alert("Please enter your email");
        return false;
    }
    if (password.value === "") {
        alert("Please enter your password");
        return false;
    }
    if (confirmPassword.value === "") {
        alert("Please enter your confirm password");
        return false;
    }
    if (password.value !== confirmPassword.value) {
        alert("Password and Confirm Password should be the same");
        return false;
    }

    if (register()) {
        alert("Registration successful");
        window.location.href = "login.html"; // Redirect to login page
        return true;
    } else {
        return false;
    }
}

// Fetching the list of users from localStorage, if any
let users = JSON.parse(localStorage.getItem("userList")) || [];

function register() {
    let name = document.forms["RegForm"]["Name"].value;
    let email = document.forms["RegForm"]["EMail"].value;
    let password = document.forms["RegForm"]["Password"].value;

    // Create a new user object
    let newUser = {
        id: Number(new Date()), // Unique ID based on the current timestamp
        name: name,
        email: email,
        password: password
    };

    // Check if the user already exists by email
    let userExists = users.some((user) => user.email === newUser.email);

    if (userExists) {
        alert("User already exists with this email");
        return false;
    }

    // Add the new user to the users list
    users.push(newUser);

    // Save the updated users list to localStorage
    let usersString = JSON.stringify(users);
    localStorage.setItem("userList", usersString);

    return true;
}
























// // console.log("hey!!!!");
// // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/; -> try to use this for the password validation.

// // const { idText } = require("typescript");

// function validateForm() {
//     let name = document.forms["RegForm"]["Name"];
//     let email = document.forms["RegForm"]["EMail"];
//     let password = document.forms["RegForm"]["Password"];
//     let confirmPassword = document.forms["RegForm"]["Confirm"];

//     if(name.value === ""){
//         alert("Please enter your name");
//         return false;
//     }
//     if(email.value === ""){
//         alert("Please enter your email");
//         return false;
//     }
//     if(password.value === ""){
//         alert("Please enter your password");
//         return false;
//     }
//     if(confirmPassword.value === ""){
//         alert("Please enter your confirm password");
//         return false;
//     }
//     if(password.value === confirmPassword.value){
//         if(register()){
//             alert("Registration successful");
//             return true;
//         }else{
//             return false
//         }
//     }else{
//         alert("Password and Confirm Password should be same");
//         return false;
//     }
// }

// let users = JSON.parse(localStorage.getItem("userList")) ? JSON.parse(localStorage.getItem("userList")) : [];

// function register(){
//     let name = document.forms["RegForm"]["Name"].value;
//     let email = document.forms["RegForm"]["EMail"].value;
//     let password = document.forms["RegForm"]["Password"].value;
//     let confirmPassword = document.forms["RegForm"]["Confirm"].value;

//     let NewUser = {
//         id:Number(new Date()),
//         name: name,
//         email: email,
//         password: password,
//         confirmPassword:confirmPassword
//     }
//     console.log(NewUser);
    
    
//     let userExists = users.some((user) => user.email === NewUser.email);
//     let idExists = users.some((user) => user.id === NewUser.id);

//     if(userExists && idExists){
//         alert("User already Exits");
//         return false;
//     }
//     else{
//         users.push(NewUser);
//     }

//     let usersString = JSON.stringify(users);
//     localStorage.setItem("userList", usersString);

//     return true;

//     // name.value = "";
//     // email.value = "";
//     // password.value = "";
//     // confirmPassword.value = "";
// }