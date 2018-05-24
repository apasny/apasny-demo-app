const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port, () => console.log(`Listening port ${port}`))

