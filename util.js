var crypto = require('crypto');
var jsonFile = './users.json';
var fs = require('fs');
const User = require('./user');

function generateSalt(){
    return crypto.randomBytes(24).toString('base64');
}

function hashEncodePassword(password, salt){
    p = password + salt;
    var output = crypto.createHash('sha256').update(p).digest('base64')

    return output;
}

function validatePassword(password, salt, hash){
    var encoded = hashEncodePassword(password, salt);
    console.log("Encoded: " + encoded);
    console.log("Saved:   " + hash);
    return hash === encoded;
}

function getUserData() {
    var json = fs.readFile(jsonFile, (err, data) => {
        if (err) {
            console.error(err + ' ' + data);
            return;
        }
        console.log('Users retrieved');
    });
    var users = JSON.parse(json);
    return users;
    // let response = await fetch(jsonFile);
    // let users = await response.json();
    // console.log(users);
}

function saveUserData(users){
    var json = JSON.stringify(users)
    fs.writeFile(jsonFile, json, (err => {
        if (err){
            console.error(err);
            return;
        }
        console.log("File created");
    }))
}

function lookForUser(userList, usrname){
    for (i = 0; i < userList.length; i++){
        if (userList[i].getUsername() === usrname) {
            return userList[i];
        }
    }
    return null;
}

// function addUser(userList, user){
// }

exports.validatePassword = validatePassword;
exports.hashEncodePassword = hashEncodePassword;
exports.generateSalt = generateSalt;

exports.getUserData = getUserData;
exports.saveUserData = saveUserData;

exports.lookForUser = lookForUser;
// exports.addUser = addUser;