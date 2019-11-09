exports.createPostvalidator = (request, response, next) => {

    console.log(`request.body.title : ${request.body.title}`);

    request.check('title', "Write a title").notEmpty();
    request.check('title', "Title must be between 5 and 150 characters").isLength({
        min:5,
        max:150
    });
    request.check('body', "Write a body").notEmpty();
    request.check('body', "Body must be between 5 and 200 characters").isLength({
        min:5,
        max:200
    });
    
    const errors = request.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return response.status(400).json({error: firstError});
    }

    next();
};