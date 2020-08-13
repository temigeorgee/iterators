
// PART 1
var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

function printEmails(){
    users.forEach(function(users, email){
        console.log(users.email)
    })
}
console.log(printEmails())

function printHobbies(){
    users.reduce((acc,current) =>{
      return acc = acc.concat(current.hobbies);
    },[]).forEach(hobby => console.log(hobby));
  }
  console.log(printHobbies())

function findHometownByState(state){
    return users.find(function(homeTowns){
        return homeTowns.hometown.state == state;
    })
}
console.log(findHometownByState('CA'))


function allLanguages(){
  return users.reduce((total,amount)=>{
  amount.favoriteLanguages.forEach(language=>{
  if(total.indexOf(language) === -1){
  total.push(language);
  }
  });
  return total;
  },[])}
  console.log(allLanguages())

  function hasFavoriteEditor(Editor){
    return users.some(function(users){
    return users.favoriteEditor == Editor
      })
    }
   console.log(hasFavoriteEditor('VS Code'));

  
    function findByUsername(username){
      return users.find(function(users){
          return users.username == username;
      })
  }
 console.log(findByUsername('david'));


  // PART 2
  function vowelCount(str){
    let vowels = ['a','e','i','o','u'];
    return str.split('').reduce(function(obj,val,index){
    if (vowels.indexOf(val)>-1){
    obj[val] = (obj[val] || 0) + 1;
    }
    return obj;
    },{});
    }
   console.log(vowelCount('incredible'));
   console.log(vowelCount('awesome'));


    function removeVowels(str){
      str = str.toLowerCase();
      let vowels = ['a',"e","i","o","u"];
      let result = [];
      for(let i = 0; i<str.length; i++){
        if(["a","e","i","o","u"].indexOf(str[i]) < 0){
          result.push(str[i]);
        }
      }     
      return result;
    }
    console.log(removeVowels('amazing'));
    console.log(removeVowels('fun'));
    console.log(removeVowels('silly'));