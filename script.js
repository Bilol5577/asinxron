// function users(){
//     fetch('https://randomuser.me/api/')
//     .then (res=>res.json())
//     .then(data=>{
//         console.log(data.results[0])
//     })
// }
// users()

// async function usersAsinfron(){
//     try{
//         const res = await fetch('https://randomuser.me/ap/');
//         const data = await res.json()
//         const user = console.log(data.results[0])
//     }catch(error){
//         console.log('Kodda qandaydir hatolik bor')
//     }
// }

// usersAsinfron()

async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];


        const img = document.querySelector(".div img");
        const name = document.querySelector(".h1");
        const job = document.querySelector(".h3");
        const phone = document.querySelectorAll(".p1")[0];
        const address = document.querySelectorAll(".p1")[1];
        const age = document.querySelectorAll(".p1")[2];
        const email = document.querySelectorAll(".p1")[3];


        img.src = user.picture.large;
        name.textContent = `${user.name.first} ${user.name.last}`;
        job.textContent = "Frontend Developer"; 
        phone.textContent = `Phone: ${user.phone}`;
        address.textContent = `Manzil: ${user.location.city}, ${user.location.country}`;
        age.textContent = `Yosh: ${user.dob.age}`;
        email.textContent = `Email: ${user.email}`;
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}


document.querySelector(".btn").addEventListener("click", fetchUser);


fetchUser();

