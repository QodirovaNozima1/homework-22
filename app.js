alert(`Assalomu alekum!!!`)


const mrMs = [
    {
        name: "Akmal",
        age: 32,
        gender: "male",
    },
    {
        name: "Madina",
        age: 19,
        gender: "female",
    },
    {
        name: "Sarvar",
        age: 12,
        gender: "male",
    },
    {
        name: "Muslima",
        age: 21,
        gender: "female",
    },
    {
        name: "Habi",
        age: 18,
        gender: "male",
    }

]


    //1."janob" va "xonim" so'zini mosini qo'shib chiqaring
        // for (let value of mrMs) {
        //     if (value.gender === "male") {
        //         console.log(`Janob ${value.name}`);
        //     }else{
        //         console.log(`Xonim ${value.name}`);
        //     }
        // }
    
    //2. Agar ikkinchi argument false bo'lsa carta raqami yashirilsin aks holda aksi
    function card(son, boolean) {
        if (boolean === false ) {
            son = son.slice(0, 4) + " **** **** **" + son.slice (-2)
        }
        console.log(son);
        return`+++`
        
    }
    console.log(card("8600 1234 5672 4524",true));//8600 1234 5672 4524
    console.log(card("8600 4321 7535 9324",false));//8600 **** **** **24
    console.log(card("8600 4524 1234 5624 ",true));//8600 4524 1234 5624 

    //3.Perimetrni qaytaradigan function tuzing
    function perimertRect(a, b) {
        return 2 * (a + b)
    }

    // console.log(perimertRect(12,2));


    //4."ha" ga true "yo'q" ga false qaytaring
    const yesNo = [
        {
            name:"yoq",
            no: false
        },
        {
            name:"ha",
            no: true
        },
    ]

    // for (let value of yesNo) {
    //     if (value.no === true) {
    //         console.log(value.name);
    //     }else{
    //         console.log(value.name);
    //     }
    // }


    5. //agar + bo'lmasa telefon numberga + ni qo'wib qaytaring
        const telNum = [
            {
                tel:"+998 99 902 00 65",
                symbol:true
            },
            {
                tel:"998 99 902 00 65",
                symbol: false
            },
        ]
        // for (let value of telNum){
        //     if (value.symbol === true) {
        //                 console.log(value.tel);
        //             }else{
        //                 console.log(`+${value.tel}`);
        //             }
        // }
        
    
    

    //6.Decloration functionni arraw ustuniga o'giring va bir qatorda yozing
    {
                const greeting = () =>  "Hello world";
            
            // console.log(greeting())
            }
            


    //7."dark" kirsa "light" qaytaring yoki aksi "light" kirsa "dark" qaytaring
    function brightness(color) {
        if (color === `dark`) {
            console.log(`light`);
        }else{
            console.log(`dark`);
        }
        return `/`
    }
    // console.log(brightness("dark"));//light
    // console.log(brightness("light"));//dark