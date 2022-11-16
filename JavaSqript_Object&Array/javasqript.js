const obj1 = [];
obj1[0] = {
    nama: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [
        
        "Yellow", "Pink", "White", "Purple"
    ],
    faforitRestoran: [

        "Bento",
        "Sushi",
        "Pancake",
        "Eggy",
        "Tempura",
        "Bento",
        "Eggy",
        "Padang",
        "Tteok",
        "Sushi",
        "Sushi"
        
  ] , 
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        },
        {
            
            name: "SMA 03",
            city: "Tangerang",
            
        }
    ]
     
};

const obj2 = [];
obj2[0] = {
    nama: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [
        
        "Blue", "Black", "Grey"
],
    faforitRestoran: [
        
        "Tempura",
        "Bento",
        "Sushi",
        "Pancake",
        "Padang",
        "Katsu",
        "Geprek",
        "Pancake",
        "Eggy"
        
  ] , 
    isHavePet: "No",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010,
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013,
        },
        {
            
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016,
            
        },
        {
            name: "Universitas Maju",
            city: "Tangerang",
            graduate: 2020,
        },
       
    ]
     
};
    
console.log("Nama : " + obj2[0].nama);
console.log("SMA: " + obj2[0].education[2].name);
console.log("Kota: " + obj2[0].education[2].city);
console.log("Makanan Faforit: " + obj2[0].faforitRestoran[5]);