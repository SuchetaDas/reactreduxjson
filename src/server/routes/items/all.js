const data = require('./../../../data.json');

module.exports = (req,res) =>{
    const items = data.items;

    //res.status(200).json({ items });
    res.send(JSON.stringify({ items }));
}; 