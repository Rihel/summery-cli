import { Controller , Get } from 'summery';
import { Context } from 'koa';
@Controller('/')
class Index{

  @Get('/')
  async index(ctx,next){
      await ctx.render('index',{
        title:'首页'
      })
  }
}