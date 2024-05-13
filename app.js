// let users = [];


// function addUser(username) {
    
//     let existingUser = users.find(user => user.username === username);
//     if (!existingUser) {
        
//         users.push({ username: username, followers: [] });
//     }

// function addFollower(username, followerUsername) {
    
//     let user = users.find(user => user.username === username);
//     if (user) {
        
//         let isAlreadyFollowing = user.followers.includes(followerUsername);
//         if (!isAlreadyFollowing) {
            
//             user.followers.push(followerUsername);
//         }
//     }
// }
// }
// addUser('Alice');
// addUser('Bob');
// addUser('Charlie')


// addFollower('Alice', 'Bob');


// addFollower('Alice', 'Charlie');


// console.log(users.find(user => user.username === 'Alice').followers); // Output: ['Bob', 'Charlie']


//2
class following{
    constructor(user){
        this.user=user
        this.follower=[]
    }
    addUser(follower){
        if(this.follower.includes(follower))
        console.log("exist")
    
    else{this.follower.push(follower)
    }
}

}
const Jane = new following("Jane")
Jane.addUser("Faith")
console.log(Jane)




function checkVowels(word){
    let words=char.toLowercase()
    for (let i=0;i<word.length;i++){
        if(word===vowels[i]){
            console.log(`${word[i]}is a vowel`)
        }
        else{
            console.log(`${word[i]}is consonat`)
        }
    }
}
checkVowels('banana')
let vowels=["a","e","i","o","u"]