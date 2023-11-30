const express = require('express');
const cors =require('cors');
const path = require('path');
const fs = require('fs/promises');



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const jsonFilePath = path.join(__dirname, 'data', 'jsondata.json');



let jsonData =[];

async function readData() {
    try {
        const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
        jsonData = JSON.parse(fileContent);
        console.log('Data loaded successfully.');
    }
catch(error) {
    console.log('Error reading JSON data:', error);
}
}

readData();


app.get('/data',(req,res)=> {
    res.json(jsonData);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})