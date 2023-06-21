const os = require('os');
const user = os.userInfo();
console.log(user);
const userssystem = {
name: os.type(),
totalmemory: os.totalmem(),
release: os.release()
}
console.log(userssystem);