const axios = require('axios');
const rpcUrl = 'https://epg-api.video.globo.com/programmes/1337?date='
const moment = require('moment');
const parseDate = (date, timers) => {
    pDate = date.substring(0, 5);
    let hour = date.substring(0, 2);
    let min = date.substring(3, 5);
    let bDate = new Date(timers.date);
    let res = new Date(bDate.getFullYear(), bDate.getMonth(), bDate.getDay(), hour, min);
    res.setHours(res.getHours()-3)
    return moment(res).format('YYYY-MM-DD HH:mm')
};

parseQsDate = (timers) =>{
    let hour  = Number(timers.time.substring(0,2));
    let min = Number(timers.time.substring(3,5));
    let bDate = new Date(timers.date);
    let fData = new Date(bDate.getFullYear(), bDate.getMonth(), bDate.getDay(), hour, min);
    let res = moment(fData).format('YYYY-MM-DD HH:mm')
    let rep = moment(res).set('hour', 11)
    return 'x';

};
module.exports = {
    async getRpcprogramming(req, res) {
        let programingParse = [];
        let timers = {
            date: req.date,
            time: req.time
        };

        console.log(rpcUrl + timers.date)
        let caller = await axios.get(rpcUrl + timers.date);
        let resp = caller.data.programme.entries;
            //TAKE UTILIZABLE INFO
        for (let prog of resp) {
            let programing = {
                title: prog.title,
                description: prog.description,
                start: moment.unix(prog.start_time),
                end: moment.unix(prog.end_time),
                mainImg: prog.custom_info.Graficos.ImagemURL,
                logoImg: prog.custom_info.Graficos.LogoURL
            };
            programingParse.push(programing);
        }

        return programingParse;

    },

    async getProgNow(req,res) {
        let timers = {
            date: req.date,
            time: req.time
        };

        let date = parseQsDate(timers);
        console.log(date);
        return {ok:'ok'}
    }
};