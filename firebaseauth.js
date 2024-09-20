    firebase

 // intialize firebase
 const app= intializeApp(firebaseconfig);
    function showMessage(message, divid){
    var meassageDiv=document.getElementById(divid);
    messageDiv.styledisplay="block ";
    messageDiv.innerHTML=message;
    messageDiv.style.opcity=1;
    setTimeout(function(){
        messageDiv.style.opcity=0;
    },5000);
       
  } 

      
    
 const signup=document.getElementById('submitsignup');
 signup.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail'). value;
    const password=document.getElementById('rpassword'). value;
    const fistName=document.getElementById('rfName'). value;
    const lastName=document.getElementById('rIName'). value;
  
    const auth=geAuth();
    const db=getFirestore();
    createUserwithEmailAndpassword(auth, email, password )
    .then((usercredential)=>{
        const user=credential.user;
        const userdsta={
            email: email,
            firtName:firtName,
            lastName:lastName,
        };
        showMessage('Account create successfulc','sigupMessage');
        const doRef=doc(db,"users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
          win.location.href='index.html';
        })
        catch((error)=>{
            console.error("error writing document ", console.error);

        });
    })
    .catch((error)=>{
        const errorcoder=error.code;
        if(errorcode=='auth/email -already-in-use'){   
       showMessage('Email Address Already Exists !!!', 'signupMessage');
        }
        else{
            showMessage('unable to create User', 'signupMessage');
        }
    
 
 })
  });

  const signin=document.getElementById('submitsignin');
    signin.addEventListener('click',(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password =document.getElementById('password').value;
    const auth=getAuth();
    sigInwithEmailAndpassword(auth, email, password )
    .then((usercredential)=>{
        showMessage('login is successfully ','signInMessage');
        const user=usercredential.user;
        locationstorage.setItem('loggedInUserId',user.uid);
         win.location.href='homepage.html' ;
    })
         .catch((error)=>{
            const errorcode=error.code;
            if(errorcode==='auth/invalid-credential'){
                showMessage('Incorrect Email or password','signInMessage');
            }
            else{
          showMessage('Account does not Exist','signInMessage')


            }
    })
    })