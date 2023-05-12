function register() {
    var uname = reg_uname.value;
    var u_email = reg_email.value;
    var pass = reg_pass.value;
    var balance = 0; 
    let userDetails = {
        uname, 
        u_email, 
        pass, 
        balance
    };
    if(uname=="" || u_email=="" || pass==""){
        alert("Please fill all fields");
    }
    else if(u_email in localStorage){
        alert('Account already registered')
    }
    else{
        localStorage.setItem(u_email,JSON.stringify(userDetails));
        // console.log(userDetails);
        alert('Register successfully');
        window.location.href="index.html";
    }

}
function login() {
    let u_email = login_email.value;
    pass = login_pass.value;

    if(u_email ==="" || pass ===""){
        alert("Please enter your mail id and Password")
    }
    else {
        userDetails = JSON.parse(localStorage.getItem(u_email));
        if(userDetails){
            console.log(userDetails);

            if(userDetails.pass === pass ){
                alert('login successful');
                localStorage.setItem('u_name',userDetails.uname);
                localStorage.setItem('balance',userDetails.balance);
                 // localStorage.setItem('u_email',userDetails.u_email);
                // localStorage.setItem('u_pass',userDetails.pass);
                window.location.href = 'home.html';
            }
            else{
                alert('Incorrect Password');
            }

        }else
        {
            alert(`${u_email} Account not registered`);
        }
    }
}
username=localStorage.getItem('u_name');
user.innerHTML=`Welcome ${username}`;


let balance = 0;

let budget = 0;

let expTitle= '';

let expAmount = 0;

let totalExpense = 0;

let temp ='';

let table = '';

counter=0;

 function budgetAdd(){

  budget = budget1.value;
  budget = Math.floor(budget).toFixed(2);
  balance=budget
  alert("You successfully set your salary")

  if(budget <= 0 ){
          alert("value cannot be empty or negative")
  }
  else{
      document.getElementById("budget_amount").innerHTML=`${budget}`;
      document.getElementById("balance_amount").innerHTML=`${budget}`
  }

}
function addExpense(){


  expTitle = expense_title.value;
  expAmount = expense_amount.value;

      if(budget < 0){
          alert("add the budget amount");
      }

      else{

          if(expAmount <= 0){
              alert("Value cannot be empty or negative");

          }
          else{
              expAmount = Math.floor(expAmount);
              balance -= expAmount;
              balance = Math.floor(balance).toFixed(2)
              totalExpense += expAmount;
              temp = table
              table =`
              <tr>

              <td class="ps-5 pe-5  " style="font-size: 15px;border: 2px solid ;font-weight: 700;">${expTitle}</td>
              <td class="ps-5 pe-5 " style="font-size: 15px; border: 2px solid ;font-weight: 700;"> ${expAmount}</td>
              <td class="ps-5 pe-5 " name=${expAmount} onclick="del(this)" style="font-size: 25px; border: 2px solid ;" > <i class="fa-solid fa-trash"></i></td>
              </div>
              </tr>`;
              table += temp
              console.log(temp);
              document.getElementById('table_exp').innerHTML = table;

              document.getElementById("expense_amount_1").innerHTML = `${totalExpense}`;
              document.getElementById("balance_amount").innerHTML = `${balance}`  
          }
      }
}

function del(r){

   i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table_exp").deleteRow(i);
  let delData = r.getAttribute("name");
  totalExpense -= delData;
  balance = budget;
  balance -= totalExpense;
  document.getElementById("balance_amount").innerHTML = `${balance}`;
  document.getElementById("expense_amount_1").innerHTML = `${totalExpense}`;
}

function logout() {
    localStorage.removeItem(login_email.value)
    window.location = '.\index.html';
}



// https://github.com/Kuriakose-G/Budget-Calculator/commit/ac48d19181ae1cff0aed335d2d1114dfae45f855