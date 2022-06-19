let fs = require('fs');

fs.writeFile('app-q.js','console.log("Criado pelo Node")',function(erro){
                                                          if(erro){ throw "Erro!"}

                                                          console.log("Tudo certo na criação!")
});

let app = require("./app-q");

console.log(app);