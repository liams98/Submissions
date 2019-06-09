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

    else if(text.startsWith("list")){
      list()
    }

    else if(text.startsWith("add")){
      add(text);
    }
    
    else{
      unknownCommand(text)
    }
   }
 }


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


var tasks = ["kill people", "buy something", "heyooo"]

function list(){
  for(i = 0 ; i < tasks.length; i++){
    console.log(`${i + 1}-[ ]${tasks[i]}`)
  }
}


function add (n_task){
  if(n_task.substring(4) !== ""){
    tasks.push(n_task.substring(4).trim());
  }else{
    console.log("please add a task while using 'add'");
  }
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
