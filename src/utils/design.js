// 生成组件唯一ID 利用时间戳+随机字母生成，永远不会重复
export function createId () {
	let abc=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let [max,min]=[Math.floor(Math.random()*(10-7+1)+1),Math.floor(Math.random()*(17-10+1)+17)];
	abc=abc.sort(()=>0.4-Math.random()).slice(max,min).slice(0,8).join("");
	var a=new Date().getTime()+abc;
	return a
}