let abc = fetch("https://swapi.co/api/people")
  .then(data => data.json())
  .then(object => {
    console.log("I'm in the async callback");
    console.log(object);
  return object;})
  .then(object => {
      let container = document.getElementById("list")
      object.results.forEach( function (result){
        let a = document.createElement("a")

        let char = document.createElement("li");
        // let char = document.createElement("a");
        char.addEventListener('click', function (event) {alert(`you clicked on ${result.name}! why?!?!?!`)})
        // char.innerText = result.name;
         a.innerText = result.name
        a.href = "https://www.w3schools.com/jsref/met_document_addeventlistener.asp";
        // a.appendChild(char);
        char.appendChild(a);
        container.appendChild(char);
      })
  }
)

let a = document.createElement("a")
a.innerText = "this is a lINK"
a.href = "https://www.w3schools.com/jsref/met_document_addeventlistener.asp";
document.body.appendChild(a)



console.log("I'm in the sync flowww")
