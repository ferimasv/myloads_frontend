const companyStatus = ["Аккаунт с расширенными правами", "Сотрудник", "Руководитель подразделения",];

function getCompanyStatusPerson(number) {
    return companyStatus[number];
}

function isExtendedRightsAccount(status) {
    return status !== '0'
}

module.exports = { getCompanyStatusPerson, isExtendedRightsAccount };