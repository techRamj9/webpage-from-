home js
   



  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js'

  
  

  
  import { getAuth,onAuthStatechange,signout } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js'
  import { getFirestore,getDoc, doc} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js'
 




     
     

      const firebaseConfig ={

      };

      // initialize Firebase
      const app = initialzeApp(firebaseConfig);

      const auth=getAuth();
      const db=getFirestore();

           onAuthStatechanged(auth, (user)={
         const loggedInUserId=localStorge.getItem('loggedInUserId');
          if(loggedInUserId){
            const docRef = doc(db, "users", loggedInUserId);
         getDoc(docRef)
            .then((docsnap)=>{
           if(docSnap.exists()){
            const userData=docSnap.data();
           document .getElementById('loggedUserFName').innerText=userData.firstName;
           document.getElementById('loggedUserLastName').innerText=userData.lastname;
           document.getElementById('loggedUserEmail').innerText=userData.email;

        }
          else{
            console.log("no documents found matching id")
            }
            
          })
          .catch((error)=>{
            console.log("Error getting document ");
          })
        }
        else{var console:console
            console.log("user id not Found in Local localStorge");
       
        }
        
        })
        const logoutButton=document .getElementById('logout');
        logoutButton.addEventListner('click',()=>{
            localStorge.removeItem('loggedInUserId');
         signOut(auth)
         .then(()=>{
            window.location.href='index.html';
         })
         .catch((error)=>{
            console.error('Error signing out:' , error);
         })
        })