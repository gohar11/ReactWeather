var axios = require('axios');

const GET_USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const GET_All_POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

module.exports = {
    getUsers: function () {
        return axios.get(GET_USERS_API_URL).then(function (res) {
            if(res.data){
                return res.data;
            } else {
                return 'error';
            } },
            function (res) {
                return 'error';
            }
        );
    },
    
    getPosts: function () {
        return axios.get(GET_All_POSTS_API_URL).then(function (res) {
            return res;
        }, function (res) {
            return 'error';
        });
    }
    
}