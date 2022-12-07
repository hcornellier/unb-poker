module.exports = class user {
    constructor(username, password, salt){
        this.username = username;
        this.password = password;
        this.salt = salt;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getSalt(){
        return this.salt
    }
}