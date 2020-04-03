const fs = require('fs');
const userList = { userName : "React" };
fs.writeFile('message.txt', JSON.stringify(userList), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  //Generates a message.txt file and adds {"userName":"React"}