function Factorialize(n){
    var z=1;
    for(i=1;i<=n;i++){
        z*=i;
        return(z)
    }
}console.log(Factorialize(10))