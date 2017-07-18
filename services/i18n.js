let jsonfile = require('jsonfile');
const path = require("path");

function embedCommonObject(req, obj){
    var laungage = req.headers['accept-language'];
    if(laungage.startsWith('zh')){
        obj["common"] = jsonfile.readFileSync(__dirname+path.sep+"i18n"+path.sep+"common"+path.sep+"i18n.json");
        return obj;
    } else {
        obj["common"] = jsonfile.readFileSync(__dirname+path.sep+"i18n"+path.sep+"common"+path.sep+"i18n_en.json");
        return obj;
    };
}

function prepareForIndex(req){
    var laungage = req.headers['accept-language'];
    if(laungage.startsWith('zh')){
        return embedCommonObject(req, jsonfile.readFileSync(__dirname+path.sep+"i18n"+path.sep+"index"+path.sep+"i18n.json"));
    } else {
        return embedCommonObject(req, jsonfile.readFileSync(__dirname+path.sep+"i18n"+path.sep+"index"+path.sep+"i18n_en.json"));
    };
}

module.exports.prepareForIndex = prepareForIndex;