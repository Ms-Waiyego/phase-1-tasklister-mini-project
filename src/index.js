document.addEventListener("DOMContentLoaded", () => {
  // your code here

const form = document.querySelector('form')
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  pasteTask(e.target["new-task-description"].value)
}
function pasteTask(task) {
  let p = document.createElement('p')
  p.textContent = task
  console.log(p)
 document.querySelector("#list").appendChild(p)

}
  console.log ("After DOM loaded")
});
console.log('Before DOM loads')