const Response = {
    Success: {
        code: 200,
        message: 'success'
    },
    CreatedSuccess: {
        code: 201,
        message: 'created success'
    },
    BadRequest: {
        code: 400,
        message: 'Bad Request'
    },
    Unauthorized: {
        code: 401,
        message: 'Unauthorized'
    }
}

module.exports = { Response }