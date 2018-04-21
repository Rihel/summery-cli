export const ResponseStatus = {
  SUCCESS: 0,
  ERROR: 1,
  NEED_LOGIN: 10,
  MISS_ARG: 20
}

export const ResponseErrorText = {
  ERROR: '请求错误',
  NEED_LOGIN: '需要登录',
  MISS_ARG: '缺少参数'
}

export class ServerResponse {
  constructor({msg, status, data}) {
    this.status = status;
    this.msg = msg;
    this.data = data;
    for (const key in this) {

      const value = this[key];

      if (value == undefined) {
        delete this[key];
      }
    }
  }
}

export const createSuccess = (option) => {
  return new ServerResponse(option);
}

export const createSuccessByMsg = (msg) => {
  return createSuccess({status: ResponseStatus.SUCCESS, msg})
}

export const createSuccessByStatus = (status) => {
  return createSuccess({status})
}

export const createSuccessByData = (data) => {
  return createSuccess({status: ResponseStatus.SUCCESS, data})
}

export const createError = () => {
  return new ServerResponse({status: ResponseStatus.ERROR, msg: ResponseErrorText.ERROR});
}

export const createErrorByMessage = (msg) => {
  return new ServerResponse({status: ResponseStatus.ERROR, msg});
}

export const createErrorByStatusMessage = (status, msg) => {
  return new ServerResponse({status, msg});
}

export const createLoginError = () => {
  return createErrorByStatusMessage(ResponseStatus.NEED_LOGIN, ResponseErrorText.NEED_LOGIN);
}