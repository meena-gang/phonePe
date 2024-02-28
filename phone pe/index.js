let form = document.querySelector('form');
form.addEventListener('submit',pay);
function pay(e){
    e.preventDefault();
    let number = document.getElementById('mobile');
    let amount = document.getElementById('amount');
    let display = document.querySelector('div');
    let body = document.querySelector('body');
    display.innerHTML = `<div>
                            <img src="./pending.png" alt="processingLogo">
                            <h1>Connecting Securely...</h1>
                        </div>`
    body.style.backgroundColor = '#6739b7';
    return new Promise((resolve,reject) => {
        if(number.value.length == 10){
            setTimeout(() => {
                resolve(display.innerHTML = `<div> 
                                                <a href="" style="color: white; font-weight: bolder; font-size: x-large;">Pay More?</a>
                                            </div>
                                            <div>
                                                <img src="./sucess.png" alt="sucessLogo">
                                                <h1>Payment of ${amount.value} to </br> ${number.value} successful.</h1>
                                             </div>` );
                body.style.backgroundColor = 'rgb(62 150 62)';
            },3000)
        } else{
            setTimeout(() => {
                reject(display.innerHTML = `<div> 
                                                <a href="" style="color: white; font-weight: bolder; font-size: x-large;">Pay Again?</a>
                                            </div>
                                            <div>
                                                <img src="./failed.png" alt="failedLogo">
                                                <h1>Payment of ${amount.value} to </br> ${number.value} has failed.</h1>
                                            </div>` );
                body.style.backgroundColor = '#ee3131';
            },3000)
        }    
    })
}