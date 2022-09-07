let houses = require(`./db.json`);
let globalID = 4;



module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body;
        let newHouse = {
            address,
            price: +price,
            imageURL,
            id: globalID
        }
        houses.push(newHouse)
        globalID++;
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {type} = req.body;
       let index = houses.findIndex(elem => elem.id === +req.params.id)
       if(type === `minus` && houses[index].price > 0){
        houses[index].price -= 1;
        res.status(200).send(houses)
    
       } else if(type === `plus`){
        houses[index].price += 1;
        res.status(200).send(houses)
       } else {
        res.status(400).send(`You're losing money here, STOP!`)
       }
        },
        deleteHouse: (req, res) => {
            let index = houses.findIndex(elem => elem.id === +req.params.id)
            houses.splice(index, 1)
            res.status(200).send(houses)
        }

    }
