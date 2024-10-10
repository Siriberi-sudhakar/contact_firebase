const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyB8iA4xZWwNM2mEXaJJHQI8hor2D36u8uY",
    authDomain: "contactform-b8172.firebaseapp.com",
    databaseURL: "https://contactform-b8172-default-rtdb.firebaseio.com",
    projectId: "contactform-b8172",
    storageBucket: "contactform-b8172.appspot.com",
    messagingSenderId: "101221794681",
    appId: "1:101221794681:web:cd434eb75ae035eb31a5a8",
    measurementId: "G-XLG92CV3DH"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var phno = getElementVal("phno");
  saveMessages(name, emailid, msgContent, phno);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent, phno) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    phno: phno,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
