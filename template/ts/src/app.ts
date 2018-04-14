import {Summery} from 'summery';



const app = new Summery();

app.start(3000,()=>{
  console.log('server is running in 3000 port');
})