module.exports = function(model, obj, keys) {
        var modelDetails = model.schema.tree;
        var errs = [];
        for (i = 0, len = keys.length; i < len; ++i) {
            if (Object.keys(obj).indexOf(keys[i]) > -1) {
                switch(modelDetails[keys[i]]) {
                    case 'String':
                        if(typeof Object[keys[i]] !== 'String') errs.push(keys[i]);
                        break;
                    case 'Date':
                        if(!(new Date(date) !== "Invalid Date" && !isNaN(new Date(date)))) errs.push(key[i]);
                }
            } else {
                errs.push(keys[i]);
            }
        }
        if (errs.length == 0) {
            return true;
        } else {
            return errs;
        }
    }

