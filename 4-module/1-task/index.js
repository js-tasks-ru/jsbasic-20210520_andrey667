
function makeFriendsList(friends) {
  const ul =  document.createElement('ul');
  const friendsNew = friends.map(nameString => `${nameString.firstName} ${nameString.lastName}`);
  for (const item of friendsNew) {
		ul.innerHTML += `<li>${item}</li>`;
	}
  return ul;
}

