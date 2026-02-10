function parse(sender){
    event.preventDefault()
    const form = sender.parentNode;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const formData = new FormData(form);
    const textarea = document.getElementById("JSON");
    const json = {};
    
    

    for (let [key, value] of formData.entries()) {
        if(key == "tag" || key == "piattaforme"){
            json[key] = value.split(",").map(item => item.trim());
        } else {
            json[key] = value;
        }
    }

    json["crossPlay"] = false;
    for(let [key, value] of formData.entries()){
        if(key == "crossPlay"){
            json[key] = value === "on";
        }
    }


    delete json.JSON;
    textarea.value = JSON.stringify(json, null, 2); 
}
const fs = require('fs');

// Read the contents of the JSON file
const data = fs.readFileSync('videogiochi.json');
// Parse the JSON data into a JavaScript object
const jsonData = JSON.parse(videogiochi);

console.log("Before Adding data",JSON.stringify(jsonData, null, 4));

// Modify the JavaScript object by adding new data
jsonData.users.push({
    name: "James Den",
    email: "james.den@example.com"
});


// Convert the JavaScript object back into a JSON string
const jsonString = JSON.stringify(jsonData);

fs.writeFileSync('videogiochi.json', jsonString, 'utf-8', (err) => {
  if (err) throw err;
  console.log('Data added to file');
});

const update_data = fs.readFileSync('data.json');
const updated_jsonData = JSON.parse(update_data);
console.log("After Adding data",JSON.stringify(updated_jsonData, null, 4));
