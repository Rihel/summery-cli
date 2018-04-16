import {Summery} from 'summery';



const app = new Summery({
  controller:'controller',
  static:{
    config:{
      dirname:'static'
    }
  },
  views:{
    dirname:'views',
    config:{
      extension:'pug'
    }
  },
  session:{
		keys:['summery'],
		config:{
			maxAge:60000,
			key:"summery"
		}
	},
});

app.start(3000,()=>{
  console.log('server is running in 3000 port');
})