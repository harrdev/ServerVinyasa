const Asana = require('../app/models/asana')
const mongoose = require('mongoose')
const mongooseBaseName = 'asana'
mongoose.connect(`mongodb://127.0.0.1:27017/${mongooseBaseName}-development`)

const asanas = [
    new Asana({
        englishName: 'Boat',
        sanskritName: 'Navasana',
        description: 'test description',
        imageUrl: 'https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1',
        difficulty: 'advanced'
}),
    new Asana({
        englishName: 'Test',
        sanskritName: 'Test pose',
        description: 'test description',
        imageUrl: 'https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1',
        difficulty: 'beginner'
}),
    
]

let done = 0
for (let i = 0; i < asanas.length; i++) {
    asanas[i].save(function(err, result) {
        console.log("Looping through and saving", asanas[i], err)
        done++
        if (done === asanas.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}