import { Controller, Required, Get, Post } from "../lib/decorators";
import { createSuccessByData, createSuccessByMsg } from "../lib/serverResponse";
import { addUser } from "../services/userService";

@Controller('/api/user')
export default class UserControl{
  // 登录接口
  @Get('/login')
  @Required({
    query: ['username','password']
  })
  async login(ctx,next){
    ctx.body = createSuccessByMsg('登录成功')
  }


  // 注册接口
  @Post('/register')
  @Required({
    body: ['username','password']
  })
  async register(ctx, next) {
    const { username, password } = ctx.request.body
    await addUser(username, password)
    ctx.body = createSuccessByMsg('注册成功')
  }
}