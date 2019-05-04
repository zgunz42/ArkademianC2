function getProfile() {
  return {
    name: 'I Kadek Adi Gunawan',
    address: 'Jl. Kapen Agung No.12, Denpasar',
    hobbies: ['Origami', 'Catur'],
    is_married: false,
    schoo: {
      highSchool: 'SMAN 1 Pekutatan',
      university: ''
    },
    skills: [{
      name: 'UI / UX Design',
      years_of_experience: 1
    },{
      name: 'Mobile Dev',
      years_of_experience: 2
    }]
  }
}

function is_username_valid(username) {
    var lowercaseRe = /[a-z]/g;

	if(username.length == 8 && username.match(lowercaseRe).length == username.length) {
    	return true;
    }
    return false;
}

function is_password_valid(password) {
	var lowercaseRe = /[a-z]/g;
  	var uppercaseRe = /[A-Z]/g;
  	var numberRe = /[0-9]/g;
  	var specialRe = /[_@#$%]/g;

  if(password.length == 8
     && lowercaseRe.test(password)
     && uppercaseRe.test(password)
     && numberRe.test(password)
     && specialRe.test(password)) {
     return true;
  }

  return false;
}

function print_picture(size) {
  const star = ' * ';
  const line = ' = ';

  if(size % 2 == 0) return;

  console.log(' '.repeat(size / 2) + '--- panjang ---' + ' '.repeat(size / 2));

  for(var i = 0; i < size; i++) {
    if(Math.floor(size / 2) === i) {
      console.log(star.repeat(size));
    }else {
      console.log(star+line.repeat(size - 2)+star);
    }
  }
}

function sort_array(multilist) {
  var transformlist = multilist.slice(0);
  transformlist.sort(function(a, b) {
     if (a.length > b.length) return 1;
     else if (a.length < b.length) return -1;
     return 0;
  });

  for(var i = 0; i < multilist.length; i++) {
   var item = multilist[i];
   item.sort(function(a, b) {
   	if(a.charCodeAt(0)> b.charCodeAt(0)) return 1;
    else if(a.charCodeAt(0)< b.charCodeAt(0))return -1;
    return 0;
   });
  }
  console.log(transformlist);
  return transformlist;
}


function cetak(count) {
  var items = [];

  while(count > 0 ){
  	var item = generateRandomString();
    if(!items.includes(item)){
    	items.push(item);
      console.log(item);
    count--;
    }
  }
}

function generateRandomString(){
  const character = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var maxLength = 32;
  var randomString = '';

  for(var i = 0; i <= maxLength; i++) {
   	var indexGen = Math.floor(Math.random(character.length) * Math.floor(character.length));
    randomString += character[indexGen];
  }

  return randomString;
}

console.log(getProfile());

console.log(is_username_valid('zeronull'));
console.log(is_username_valid('useroke'));
console.log(is_password_valid('qazW_123'));

print_picture(7);

console.log(sort_array([['a','d','c','b','e'],['g','f','e']]
));

cetak(4);
