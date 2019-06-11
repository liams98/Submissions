var fs = require('fs')
var data = fs.readFileSync("Database.json");
var tasks = JSON.parse(data)
console.log(tasks)
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

function onDataReceived(text) {
  if (`${text}\n`) {
    if (text === "quit\n" || text === "exit\n") {
      quit();
    } else if (text.startsWith("hello")) {
      hello(`${text.trim()}!`);
    } else if (text.startsWith("help")) {
      help();
    } else if (text.startsWith("list")) {
      list();
    } else if (text.startsWith("add")) {
      add(text)
    } else if (text.startsWith("remove")) {
      remove(text);
    } else if (text.startsWith("edit")) {
      edit(text);
    } else if(text.startsWith("check")){
        check(text)
    }else if(text.startsWith("uncheck")){
      unCheck(text)
    }
     else {
      unknownCommand(text);
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
  var x = `----------------------------------------
   To say hi to me 'hello'
   To say hi in an epic way use : 'hello  YOUR STATEMENT'

   To leave this epic CLI use : 'exit/quit'

   To list the Task use : "list"

   To add tasks use : "add TASK"

   To edit the last sentence use : "edit Text"
   To edit a specific task use : "edit TASK_NUMBER TEXT"

   To check a task use : check TASK_NUMBER
   To uncheck a task use : uncheck TASK_NUMBER

   To remove last task use: 'remove' 
   To remove a specific task use :'remove NUMBER'
   -----------------------------------------`;
  console.log(x);
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(txt) {
  console.log(txt);
}

// var tasks = [{task:'eat',done:'false'},{task:'sleep',done:'false'},{task:'wake up',done:'false'}]

function list() {
  for (i = 0; i < tasks.length; i++) {
    if(tasks[i].done == true){
    console.log(`${i + 1}-[✓]${tasks[i].tasks}`);
    }else{
      console.log(`${i + 1}-[ ]${tasks[i].task}`);
    }
  }
}
//✓
function add(n_task) {
  if (n_task.substring(4) !== "") {
    tasks.push({task:n_task.substring(4).trim(),done:"false"});
    list()
  } else {
    console.log("please add a task while using 'add'");
  }
}


function remove(c_task) {
  let sub_string = c_task.substring(6);

  if (sub_string === sub_string) {
    if (checkNum(sub_string)) {
      tasks.splice(sub_string.trim() - 1, 1);
      list();
      return c_task;
    }
  } else {
    console.log(
      "to remove last task use: 'remove' \n to remove a specific task use :'remove NUMBER'"
    );
  }
}

function checkNum(task_num) {
  if (task_num <= tasks.length) {
    return task_num;
  } else {
    console.log("This Task number doesn't exist");
  }
}


function edit(text_detail) {
  num_task = text_detail.substring(4,6).trim();
  edit_task = text_detail.substring(7);
  if(text_detail=='edit\n'){
    console.log('error')
  }
  else if (num_task <=tasks.length-1) {
    tasks[num_task - 1] = edit_task.trim();
  }else{
    console.log(tasks.splice(tasks.length - 1,1, text_detail.substring(4).trim()))
  }
}

function check(n){
  let input = n.trim().split(" ")
  console.log(tasks.length)
  if(input[1] - 1 < tasks.length){
    tasks[input[1] -1 ].done = true;
    list()
  }else{
    console.log("choose a task number after CHECK")
  }
}

function unCheck(n){
  let input = n.trim().split(" ")
  console.log(tasks.length)
  if(input[1] - 1 < tasks.length){
    tasks[input[1] -1 ].done = false;
    list()
  }else{
    console.log("choose a task number after CHECK")
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  fs.writeFileSync("Database.json",JSON.stringify(tasks),function(err){
    if(err) throw err
    console.log("saved")
  })
  process.exit();
}

// The following line starts the application
startApp("WILLYUM");
