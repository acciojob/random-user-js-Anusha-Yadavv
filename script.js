//your code here
// Initial user data (empty)
let userData = {};

// Function to fetch a random user from the API
async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data.results[0];
}

// Function to update user details on the page
function updateUserDetails(user) {
  document.getElementById('userImage').src = user.picture.large;
  document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
}

// Function to display additional info based on the clicked button
function showInfo(attribute) {
  const infoSection = document.getElementById('additionalInfo');
  
  // Clear previous content
  infoSection.innerHTML = `<h3>Additional Info</h3>`;

  // Display the relevant info based on the clicked button
  switch (attribute) {
    case 'age':
      infoSection.innerHTML += `<p>Age: ${userData.dob.age}</p>`;
      break;
    case 'email':
      infoSection.innerHTML += `<p>Email: ${userData.email}</p>`;
      break;
    case 'phone':
      infoSection.innerHTML += `<p>Phone: ${userData.phone}</p>`;
      break;
    default:
      break;
  }
}

// Function to handle the "Get New User" button click
async function getUser() {
  // Fetch a new random user
  const newUser = await fetchRandomUser();
  
  // Update the global userData variable
  userData = newUser;
  
  // Update the user details on the page
  updateUserDetails(newUser);
  
  // Clear the additional info section
  document.getElementById('additionalInfo').innerHTML = `<h3>Additional Info</h3>`;
}

// Initial page load: fetch a random user and update details
getUser();

