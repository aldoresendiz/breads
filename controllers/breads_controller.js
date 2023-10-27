const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) =>
{
    res.render('Index', 
        {
            breads: Bread
        }
    )
    //res.send(Bread[req.params.arrayIndex]);
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
          })    
    } else {
        res.send('404');
    }
    
  })
  
  
// SHOW
// breads.get('/:arrayIndex', (req, res) => {
//     res.send(`
//         <html>
//             <head>
//                 <title>My bread!</title>
//             </head>
//             <body>
//                 <p>Yes - I have ${Bread[req.params.arrayIndex].name}</p>
//                 <img src="${Bread[req.params.arrayIndex].image}" style="width:200;height:200;">
//                 <p>Try the recipe <a href="${Bread[req.params.arrayIndex].recipe}">here!</a></p>
//                 <p><a href=".">Back to Menu</a></p>
//             </body>
//         </html>`
//     );
//    // res.send("Yes - I have " +  Bread[req.params.arrayIndex].name)
// })

module.exports = breads;
