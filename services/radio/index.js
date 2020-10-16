
// https://github.com/nepodev/radio-browser
const RadioBrowser = require('radio-browser')

const RadioService = function(){

    const getCountries = function(){
        return RadioBrowser.getCategory('countries', { hidebroken: true })
    }

    const getTags = function() {
        return RadioBrowser.getCategory('tags', { hidebroken: true });
    }

    const getResources = function(){
        
        let filter = {
            limit: 5,          // list max 5 items
            by: 'tag',         // search in tag
            searchterm: 'jazz' // term in tag
        }
        return RadioBrowser.getStations(filter)
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
    }

    return  {
        getCountries,
        getTags,
        getResources
    }
}

module.exports = RadioService