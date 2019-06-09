/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

 function onDataReceived(text){
   if(`${text}\n`){
    if(text === "quit\n" || text === "exit\n"){
      quit();
    }
    
    else if(text.indexOf("hello") === 0){
      hello(`${text.trim()}!`)
    }
    
    else if(text.indexOf("help") === 0){
      help()
    }
    
    else{
      unknownCommand(text)
    }
   }
 }

// function onDataReceived(text){
//   if(text === "quit\n" || text === "exit\n"){
//     quit();
//   }else if ( `${text}\n` && !text.startsWith("help")){
//     if(`${text}\n` && text.indexOf(" ") === -1){
//       hello(`${text.trim()}!`)
//     }else{
//     hello(`${text.trim()} !`);
//     }

//   }else if(`${text}\n` && text.indexOf("help") === 0){
//     help()
//   }else{
//     unknownCommand(text);
//   }
// }

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

//the list that will be shown to the user when help is typed
function help() {
  console.log(
    "hello 'To say hi to me :D'\n" + "exit/quit 'to leave this epic CLI'"
  );
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(txt) {
  console.log(txt);
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("WILLYUM");
