const firebaseConfig = {
    apiKey: "AIzaSyCx1IHmYeAFFEalKBewQcnUyylIMMP_r9Y",
    authDomain: "registered-user-151bc.firebaseapp.com",
    databaseURL: "https://registered-user-151bc-default-rtdb.firebaseio.com",
    projectId: "registered-user-151bc",
    storageBucket: "registered-user-151bc.firebasestorage.app",
    messagingSenderId: "891937716656",
    appId: "1:891937716656:web:175f86efd4cb3bd6ccfe75"
};

// Correctly initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm"); // Use a single reference for all data

// Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    console.log(name)
    console.log(emailid)
    console.log(msgContent)

    saveMessages(name, emailid, msgContent);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};