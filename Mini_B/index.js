let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let bears = [
    { 'img': 'https://i.pinimg.com/originals/7b/5c/01/7b5c0121f8939ff5408f67a58b23881a.jpg' },
    { 'img': 'https://i.pinimg.com/originals/b4/75/d9/b475d99c986c288771630a7e0f546150.jpg' },
    { 'img': 'https://i.redd.it/61tfggj23hr31.jpg' },
    { 'img': 'https://obs.line-scdn.net/0h0Yc4PDlOb3ZeTUOUWP0QIWQbbBltIXx1Ons-dQIjMUIjdCwhMX8mGH0dMUAmLigoMH8jEH9NdEd1LygiYX4m/w644' }
];

router.route('/bears')
    // get all bears
    .get((req, res) => res.json(bears))
    // insert a new bear
    .post((req, res) => {
        var bear = {};
        bear.id = bears.length > 0 ? bears[bears.length - 1].id + 1 : 0;
        bear.name = req.body.name
        bear.weight = req.body.weight
        bear.img = req.body.img
        bears.push(bear);
        res.json({ message: 'created!' })
    })

router.route('/bears/:bear_id')
    .get((req, res) => {
        let id = req.params.bear_id
        let index = bears.findIndex(bear => (bear.id === +id))
        res.json(bears[index])                   // get a bear
    })
    .put((req, res) => {                               // Update a bear
        let id = req.params.bear_id
        let index = bears.findIndex(bear => (bear.id === +id))
        bears[index].name = req.body.name;
        bears[index].weight = req.body.weight;
        bears[index].img = req.body.img;
        res.json({ message: 'updated!' + req.params.bear_id });
    })
    .delete((req, res) => {                   // Delete a bear
        // delete     bears[req.params.bear_id]
        let id = req.params.bear_id
        let index = bears.findIndex(bear => bear.id === +id)
        bears.splice(index, 1)
        res.json({ message: 'deleted: ' + req.params.bear_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000, () => console.log("Server is running"));

