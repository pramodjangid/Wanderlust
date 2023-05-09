const name_ = document.getElementById('customer')
const amout = document.getElementById('amount')
const payment = document.getElementById('pay-button')

let username_ = localStorage.getItem('user_name')
let amount_ = localStorage.getItem('price')
name_.textContent = username_
amout.textContent =amount_+' Rs' 



payment.addEventListener('click',function(e){
    e.preventDefault();
    showPaymentSuccess()
})

function showPaymentSuccess(amount) {
    document.getElementById('success-amount').textContent = amount;
    document.getElementById('payment-success').style.display = 'block';
  }
  
  function closePaymentSuccess() {
    document.getElementById('payment-success').style.display = 'none';
  }
  