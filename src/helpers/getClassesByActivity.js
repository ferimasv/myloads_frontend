const classNames = require("./classNames");

function getClassesByActivity(isActive, active = [], inactive = []) {
    return (isActive ? classNames(...active) : classNames(...inactive))
}

module.exports = getClassesByActivity;