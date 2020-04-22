const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('This is a work in progress. Come back soon! By the way, a node.js application is running :).');
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
