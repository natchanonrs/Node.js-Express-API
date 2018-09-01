var users = [
    {
        "id": 1,
        "name": "Monkey D. Luffy",
        "address": "Thousand sunny",
        "phone": "-",
        "email": "-",
        "job": "Pirate",
        "salary": "nothing"
    },
    {
        "id": 2,
        "name": "Anakin Skywalker",
        "address": "Tatooine",
        "phone": "-",
        "email": "-",
        "job": "Chosen one",
        "salary": "nothing"
    }
];

exports.findAll = function() {
    return users;
};