'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // fill me in :)
        let result = [];
        for (const [key, value] of Object.entries(db.itemsOfUserByUsername)) {
            if (value.indexOf(item) > -1) {
                result.push(key);
            }
        }
        const users = [];
        for (const [key, user] of Object.entries(db.usersById)) {
            if (result.indexOf(user.username) > -1) {
                users.push(user);
            }
        }
        const output = users.reduce((acc, cur) => {
            if (acc[cur.age] === undefined) {
                acc[cur.age] = 1;
            } else {
                acc[cur.age] += 1;
            }
            return acc;
        }, {});
        return output;
        
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
