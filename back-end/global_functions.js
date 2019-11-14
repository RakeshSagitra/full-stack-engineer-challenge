// const ValidationError = require('objection').ValidationError
// The error returned by this function is handled in the error handler middleware in app.js.
global.createStatusCodeError = function (statusCode, message) {
  return Object.assign(new Error(), {
    statusCode,
    message
  })
}

global.createStatusCodeError = function (statusCode, message, body) {
  return Object.assign(new Error(), {
    success: false,
    statusCode,
    message,
    body: body
  })
}

global.badRequestError = function (msg) {
  return global.createStatusCodeError(400, msg)
}

global.unverifiedError = function (message) {
  return global.createStatusCodeError(412, message)
}

global.blockedError = function (message) {
  return global.createStatusCodeError(409, message)
}

global.unverifiedError = function (message, body) {
  return global.createStatusCodeError(412, message, body)
}

global.forbiddenError = function (msg) {
  return global.createStatusCodeError(403, msg)
}

global.unauthorizedError = function (msg) {
  return global.createStatusCodeError(401, msg)
}

global.notFoundError = function (msg) {
  return global.createStatusCodeError(404, msg)
}

global.errorResponse = function (res, data, message, code) {
  res.statusCode = code
  return res.json({
    success: false,
    code,
    data,
    message
  })
}

// Response handlers
global.successResponse = function (res, statusCode, data, message) {
  return res.status(statusCode || 200).json({
    statusCode,
    success: true,
    data,
    message
  })
}

global.okResponse = function (res, data, message) {
  res.statusCode = 200
  if (!message) {
    message = ''
  }
  return global.successResponse(res, 200, data, message)
}

global.createdResponse = function (res, data, message) {
  return global.successResponse(res, 201, data, message)
}

global.noContentResponse = function (res, message) {
  return global.successResponse(res, 204, {}, message)
}

// Utility functions
global.slugify = function (Text) {
  Text = Text || ''
  return Text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

global.basePath = function () {
  return 'http://localhost:3000/'
}
