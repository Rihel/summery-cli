const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const getFilePath = name =>{
	return resolve(__dirname,'./src/views/'+name);
}
const init = (name,title) =>{
	return {
		name,
		enter:getFilePath(`${name}/index.ts`),
		html:new htmlWebpackPlugin({
			title:title,
			filename:`${name}.html`,
			template:getFilePath(`${name}/html.pug`),
			chunks:[name,'commons'],
		})
	}
}
const pages = [
	init('index','首页'),
]

const getEnter=()=>{
	const result = {};
	pages.map(item=>({key:item.name,enter:item.enter})).forEach(item=>{
		result[item.key]=item.enter;
	})
	return result;
}

const getViews=()=>{
	return pages.map(item=>item.html);
}


module.exports={
	enters:getEnter(),
	views:getViews(),
};