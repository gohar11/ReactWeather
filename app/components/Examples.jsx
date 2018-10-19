var React = require('react');
var randomApi = require('randomApi');
var {Link} = require('react-router');

var Examples = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            posts: []
        }
    },
    getAllPosts: function (e) {
        var that = this;
        randomApi.getPosts().then(function (res) {
            if (res.status == 200) {
                that.setState({
                    posts: res.data
                });
            }
        }, function (res) {
            console.log(res);
        });

    },

    render: function () {

        const postItems = this.state.posts.map((post,) =>
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
            </tr>
        );
        return (
            <div>
                <h1 className="text-center">Examples Page!</h1>
                <p>Welcome to Examples Component</p>
                <ol>
                    <li>
                        <Link to="/?location=Lahore">Lahore</Link>
                    </li>
                    <li>
                        <Link to="/?location=Islamabad">Islamabad</Link>
                    </li>
                </ol>
                <a href="javascript:;" onClick={this.getAllPosts}>Get Posts!</a>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {postItems}
                    </tbody>
                </table>
            </div>
        );
    }
});


module.exports = Examples;