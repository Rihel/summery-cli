import { Controller , Get } from 'summery';
import { Context } from 'koa';
@Controller('/')
class Index{

  @Get('/')
  public async index(ctx:Context,next:()=>Promise<any>){
      await ctx.render('index',{
        title:'首页'
      })
  }
}