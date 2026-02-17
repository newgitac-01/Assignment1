let names = ["Alice","Bob","Carol","David","Eva"];
let salary = [75000,68000,82000,90000,60000];
let exp = [5.1,3.2,7.1,10.2,2.4];
let rating = [4.2,3.8,4.5,2.5,3.5];

let result = new Map<string, number>();

for(let i=0;i<names.length;i++){

let p=0,b=0,r=0;

if(rating[i] >= 4){ p=15; b=1500; }
else if(rating[i] >=3){ p=10; b=1200; }
else{ p=3; b=300; }

if(exp[i] >=5){ r=5000; }

let hike = salary[i]*p/100 + b + r;
let hikePercent = hike/salary[i]*100;

result.set(names[i], hikePercent);
}

result.forEach((v,k)=>console.log(k+" : "+v.toFixed(2)+"%"));
