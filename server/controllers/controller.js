module.exports = {
    getCars: (req, res) => {
        let db = req.app.get('db');
        db.get_cars()
            .then(cars => res.status(200).send(cars))
    },
    filterCars: (req, res) => {
        let db = req.app.get('db');
        let colors = req.query.color.split(",");
        let driveType = req.query.driveType.split(",");
        db.cars.find({color: colors, drive_type: driveType}).then(cars => res.status(200).send(cars));
    }
    // getCars: (req, res) => {
    //     let db = req.app.get('db');
    //     let colors = ['Blue', 'Silver']
    //     db.cars.find({ color: colors, make: ['Mazda', 'BMW'], transmission_type: ['AT', 'MT'], body_style: ['Coupe', 'Convertible'] }, { fields: ['make', 'color', 'transmission_type', 'model', 'model_year', 'body_style'] }).then(cars => res.status(200).send(cars));
    // }
}


