let N=5;
for (let i=1;i<=N;i++){
	if (N%i===0){
		count++;
	}
}
if (count>2){
	console.log("No");
}
else {
	console.log("Yes");
}