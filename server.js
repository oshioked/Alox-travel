const express = require('express');
const cors  = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('kelllllll')
})

app.get('/products/search/:key', (req, res)=>{
    console.log('recieved');
    console.log(req.params)
    res.status(200).json('all products with search key in name ' + req.params.key)
})

app.get('/products/:category', (req, res)=>{
    console.log('work')
    res.status(200).json(`all products in category ` + req.params.category)
})

app.post('/saveproduct/:id', (req, res)=>{
    
})

app.post('/signin', (req, res)=>{
    const {email, password} = req.body;
    if(email.toLowerCase() === 'danieloshos3@gmail.com'){
        res.status(200).json({
            name: 'Emmanuel Abuga',
            email: 'emmaprince@gmail.com'
        }) 
    }else{
        res.status(400).send('not found')
    }
    
})

app.post('/register', (req, res)=>{
    const {name, email, password} = req.body;
    if(name.toLowerCase() === 'daniel'){
        res.status(200).json({
            name: 'Emmanuel Abuga',
            email: 'emmaprince@gmail.com'
        }) 
    }else{
        res.status(400).send('not found')
    }
})


app.post('/payment', (req, res)=>{

})

app.listen(PORT, ()=>{
    console.log('server is running on port ' + PORT)
});
