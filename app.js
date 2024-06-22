const USERS = [
    {
        name: "John",
        age: 32,
        gender: "male",
        nick
    },
    {
        name: "Laylo",
        age: 19,
        gender: "female",
    },
    {
        name: "Selena",
        age: 29,
        gender: "female",
    }

]
    // for(let index = 0, len = USERS.length; index < len; index++) {
    //     if (USERS[index].age < 20) {
    //         console.log(USERS[index].name);
    //     }
        
    // }
     
    // for (let index = 0, len = USERS.length; index < len; index++) {
    //     if (USERS[index].gender === "female" ) {
    //         console.log(USERS[index].name);
    //     }
        
    // }
    // for (let index = 0, len = USERS.length; index < len; index++) {
    //     if (USERS[index].gender === "male" ) {
    //         if (USERS[index].isMarried === false) {
    //             console.log(USERS[index].name);
    //         }
    //     }
        
    // }


    //1."janob" va "xonim" so'zini mosini qo'shib chiqaring
    function mrMs() {
        
    }
    console.log(mrMs({name:Akmal, gender:male}));// janob Akmal
    console.log(mrMs({name:Laylo, gender:female}));// Xonim Laylo
    console.log(mrMs({name:Sarvar, gender:male}));// janob Sarvar
    
    //2. Agar ikkinchi argument false bo'lsa carta raqami yashirilsin aks holda aksi
    function card(params) {
        
    }
    console.log(card("8600 1234 5672 4524",true));//8600 1234 5672 4524
    console.log(card("8600 4321 7535 9324",false));//8600 **** **** **24
    console.log(card("8600 4524 1234 5624 ",false));//8600 **** **** **24

    //3.Perimetrni qaytaradigan function tuzing
    function perimertRect() {
        
    }

    console.log(perimertRect(6,2));


    //4."ha" ga true "yo'q" ga false qaytaring
    function yesNo() => {
        
    }
    console.log(yesNo("ha"));//true


    //5. agar + bo'lmasa telefon numberga + ni qo'wib qaytaring
    function telNumber() {
        
    }
    console.log("+998 99 902 00 65");
    console.log("998 99 902 00 65");//+

    //6.Decloration functionni arraw ustuniga o'giring va bir qatorda yozing
    function greeting() {
        return "Salom"
    }
    console.log(greeting());


    //7."dark" kirsa "light" qaytaring yoki aksi "light" kirsa "dark" qaytaring
    function brightness() {
        
    }
    console.log(brightness("dark"));//light
    console.log(brightness("light"));//dark