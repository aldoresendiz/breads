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

// NEW
breads.get('/new', (req, res) => {
    res.render('new');
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
          })    
    } else {
        res.send('404')
    }
  })
  
  //CREATE
  breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    };
    console.log(req.body);
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body);
    res.redirect('/breads');
    res.send(Bread);
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
