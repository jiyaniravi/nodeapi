/* exports.getPosts =  (request, response)=>{
    response.send('Hello World !!!!!');
}; */

const Post = require('../models/post');

exports.getPosts =  (request, response)=>{
    response.json({
        responseCode : 200,
        responseMessage : "This is success message !",
        responseObject : [
            {key1:'value1'},
            {key2:'value2'}
        ]
    });
};


exports.createPost = (request, response) => {
    const post = new Post(request.body);
    /* post.save((errorObj, result)=>{
        if(errorObj){
            return response.status(400).json({
                error:errorObj
            });
        }
        response.status(200).json({
            post:result
        });
    }); */

    post.save().then(result => {
        response.status(200).json({post: result});
    })
};