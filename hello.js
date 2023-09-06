/* 1. let user = [
{name:”Bob”,
Age:34},
{name:”Denny”,
Age:32},
{name:”Maks”,
Age21},
}]
Осы массивтен name == "Bob" тең болатын обьектіні ал және оны бір айнымалы мәнде сақтаңыз.
 */



/* 2.екі бүтін сан  берілген. 
Содан кейін  осы екі санның арасында жатқан элементтердің қосындысын табатын  функция жазыңыз. Мысалы 2-ден 9-ға дейінгі барлық бүтін сандардың қосындысы 44-ке тең.
 */






/* 3. Массив берілген a = [33,44,55,0,11,7,8,9]. Табу керек 0 дейінгі сандардың қосындысын , 0 ден кейінгі сандардың көбейтіндісін.
 */

let c = [33,44,55,0,11,7,8,9]
let qos = 0;
let kob = 1;
let a;
for (var i = 0; i < c.length; i++) {
    a = c[i]
    if (a === 0) {break;}
    qos+=a;
}
for (var j = i+1; j < c.length; j++) {
    a = c[j]
    if (a === 0) {break;}
    kob*=a;
}
console.log(qos);
console.log(kob);

/* var dictionary = {
  "apple": "алма",
  "banana": "банан",
  "cherry": "вишня",
};
 объект берілген .
Сіздерге объект ключі мен мәнін Цикл арқылы шығару керек. 
Мысалы: apple - алма
 */

let Var = {
  "apple": "алма",
  "banana": "банан",
  "cherry": "вишня",
};

for (let i in Var ) { 
    console.log(i + " " + Var [i] )
}

/* Массив берілген ,  a = [1,2,3,4,5,6,7,8,9];
Функция жазу керек, шарты : жұп сан болса Жұп сан деп console.log() арқылы шығару керек, егер тақ сан болса console.log() та тақ сан деп шығарыңыздар.
 */

a = [1,2,3,4,5,6,7,8,9];

let js = () => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2==0) {
            console.log(a[i] + " " + "жұп");
        }
        else {
            console.log(a[i] + " " + "тақ");
        }
    }
}
js()

let city = {
     name:"Almaty",
     Street:{
         luganskogo:102,
         home:{
             drop:1,
         }
     }
 };
 console.log(city.Street.home.drop);


/* 1.Массив элементтерін кері ретпен шығаратын функция жазыңыз */

let gg = [10,20,30,40,50]; 
 
function kk (){
    for(let i = gg.length - 1;i >= 0 ; i--){ 
        console.log (gg[i]) 
    } 
} 
kk()


/* 2.Екі массивті бір массивке біріктіретін код жазыңыз. */

let hello = ['apple','banana','orange','watermelon']
let hi = ['alma','banan','juice','hauyn']
hello.push(hi);
console.log(hello)








