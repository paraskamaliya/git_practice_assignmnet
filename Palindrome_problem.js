let str="aman";
reverse="";
    for (let i=1;i<N;i++){
        reverse=str[i]+reverse;
    }
    if (str==reverse){
        console.log("Yes");
    }
    else {
        console.log("No");
    }