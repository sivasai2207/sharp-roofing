// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: 'AIzaSyD94KpX0X4VF3pwfsuXUN8Wrox2G0rhEIM',
  authDomain: 'refferalprogramseventhdev.firebaseapp.com',
  databaseURL: 'https://refferalprogramseventhdev.firebaseio.com',
  projectId: 'refferalprogramseventhdev',
  storageBucket: 'refferalprogramseventhdev.appspot.com',
  messagingSenderId: '169035565979',
  appId: '1:169035565979:web:24c437d35176c5fa24af3e',
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit 
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, phone, email, subject, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //Clear form
  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email,subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    subject: subject,
    message: message,
  });
}
