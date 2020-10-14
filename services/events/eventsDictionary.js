
    const resource = JSON.stringify({
        type: {
            radio: ''
        },
        location: {
            country: '',
            state: '',
            province: '',
            city: ''
        },
        language: '',
        media: {
            codec: '',
            format: ''
        },
        tags: ''
    });
    
    const mainEvents = {    
        input: JSON.parse(resource),
        diplay: JSON.parse(resource),
        playback: {
            play: '',
            pause: '',
            stop: '',
            volumeUp: '',
            volumeDown: ''
        },
        playlist: {
            next: '',
            prev: ''
        }
    }


const dictionary = function(){

    
    const assignName = function(obj, prev = '') {
        const keys = Object.keys(obj);
        for(const k of keys) {
            const prefix = prev.length ? `${prev}_${k}` : k;
            if (
                typeof obj[k] === 'object' &&
                obj[k] !== null &&
                Object.keys(obj[k]).length > 0
            ){
                        assignName(obj[k], prefix)
            } else {      	
                obj[k] = `${prefix}`.toUpperCase();        
            }  
        }
    }

    const getNames = function(){
        assignName(mainEvents);
        Object.freeze(mainEvents);
        return  mainEvents;
    }

    return {
        getNames
    }
}

module.exports = dictionary;