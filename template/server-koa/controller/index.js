import { Get,Controller, Required } from "../lib/decorators";



@Controller('/')
class Index{

  @Get('/')
  async index(ctx,next){
    ctx.body={
      a:2
    }
  }
}