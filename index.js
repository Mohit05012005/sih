const tesser = require('tesseract.js');

let text;
tesser.recognize('./creditcardimg.jpeg','eng',{logger: e => console.log(e)})
.then((out)=>{
// console.log(out.data.text);
  text =  clearText(out.data.text);
  console.log(text);
 
})

function clearText(text){
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

