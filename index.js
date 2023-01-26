
class User {

constructor (){

// this.name = n

}

//user wants to sign up and login

#checkUsername(username){

let value = username.includes("#") ? false : true;

return value;

}

#checkPassword(password){

    let value = password.length > 8 ? true : false;
    
    return value;
    
    }

async Signup(n,e,u,p,m,d){

let isValidated = this.#checkUsername(u)  && this.#checkPassword(p);

if(isValidated){

  this.name = n;
  this.email = e;
  this.username = u;
  this.password = p;
  this.mobile = m;
  this.description = d;

  let actual_data = JSON.stringify(this);

  try{
  
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{

    method: "POST",
    body: actual_data,
    headers: {

        "Content-Type": "application/json",
    },

});
    
    let data = await res.json()
  
    console.log(data)

  console.log("User registered Successfully!")
  


  }catch(error){

    console.log(error);
  }



}

 }


 async login(u,p){

  
  let actual_data = JSON.stringify(this);
  
    try{
    
      let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
  
      method: "POST",
      body: actual_data,
      headers: {
  
          "Content-Type": "application/json",
      },
  
  });
      
      let data = await res.json()
      let token = data.token
      console.log(data)
  
    console.log("User Login Successfully!")

    
 
    }catch(error){
  
      console.log(error);
    }
  

  }


}




let u1 = new User()




 function Register(event) {

  event.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
    const description = document.getElementById("description").value;

    u1.Signup(name,email,username,password,mobile,description)

}



function login(event) {

  event.preventDefault()


    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
 
    u1.login(username,password)

    window.location.href= "home.html"
 
}



  
   
  