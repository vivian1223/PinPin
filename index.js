
//bootstrap modal js setting
// const myModal = document.getElementById('myModal')
// const  myInput = document.getElementById('myInput')
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

//data
const tabdata={
  progress:{
    tabTitle:"專案進度",
    content:`<ul class="list-unstyled">
    <li><img  class="mb-4 w-100" src="https://hexschool.github.io/boootstrap5WebLayout/assets/p1.jpg" alt="產品圖片">
      <h2 class=" mb-2 ps-3 text-dark border border-primary border-5 border-top-0 border-bottom-0 border-end-0" >施了魔法的照片</h2>
      <p class="text-dark lh-lg">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。</p>
    </li>
    <li>
      <img  class="mb-4 w-100" src="https://hexschool.github.io/boootstrap5WebLayout/assets/p2.jpg" alt="產品圖片">
      <h2 class=" mb-2 ps-3 text-dark border border-primary border-5 border-top-0 border-bottom-0 border-end-0" >留下當下的美好</h2>
      <p class="text-dark lh-lg">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。</p>
    </li>
  </ul>`},

  faq:{
    tabTitle:"常見問答",
    content:`          <ul class="list-unstyled" id="questionMenu">
    <li class="accordion  mb-4" id="mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <div class="w-m h-s bg-primary rounded d-flex justify-content-center align-items-center">
              <span class="fw-bold">Q1</span>
            </div>
            <p class="ms-3">影片拍完之後可以編輯嗎？</p>
      </div>
      </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#questionMenu">
        <div class="accordion-body">
          當然可以呀！
        </div>
      </div>
    </li>

    <li class="accordion  mb-4" id="mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <div class="w-m h-s bg-primary rounded d-flex justify-content-center align-items-center">
              <span class="fw-bold">Q2</span>
            </div>
            <p class="ms-3">有提供保固或維修服務嗎？</p>
      </div>
      </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#questionMenu">
        <div class="accordion-body">
          當然有呀！
        </div>
      </div>
    </li>

    <li class="accordion  mb-4" id="mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
            <div class="w-m h-s bg-primary rounded d-flex justify-content-center align-items-center">
              <span class="fw-bold">Q3</span>
            </div>
            <p class="ms-3">印出來的拍立得照片需要充電嗎？</p>
      </div>
      </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#questionMenu">
        <div class="accordion-body">
          不需要唷
        </div>
      </div>
    </li>

    <li class="accordion  mb-4" id="mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseTwo">
            <div class="w-m h-s bg-primary rounded d-flex justify-content-center align-items-center">
              <span class="fw-bold">Q4</span>
            </div>
            <p class="ms-3">運送方式及付款方式有哪些呢？</p>
      </div>
      </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#questionMenu">
        <div class="accordion-body">
          我們支援行動支付、信用卡支付、宅配及超商取貨。
        </div>
      </div>
    </li>


    <li class="accordion  mb-4" id="mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseTwo">
            <div class="w-m h-s bg-primary rounded d-flex justify-content-center align-items-center">
              <span class="fw-bold">Q5</span>
            </div>
            <p class="ms-3">運送方式及付款方式有哪些呢？</p>
      </div>
      </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#questionMenu">
        <div class="accordion-body">
          我們支援行動支付、信用卡支付、宅配及超商取貨。
        </div>
      </div>
    </li>

    <li class="accordion  mb-4" id="mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseTwo">
            <div class="w-m h-s bg-primary rounded d-flex justify-content-center align-items-center">
              <span class="fw-bold">Q6</span>
            </div>
            <p class="ms-3">運送方式及付款方式有哪些呢？</p>
      </div>
      </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#questionMenu">
        <div class="accordion-body">
          我們支援行動支付、信用卡支付、宅配及超商取貨。
        </div>
      </div>
    </li>

  </ul>`},

news:{
tabTitle:"目前進度",
content:`<ul>
<li class="border border-secondary rounded-3 d-flex mb-3">
  <img class="rounded-start"src="https://hexschool.github.io/boootstrap5WebLayout/assets/news01.jpg" alt="news picture">
<div class="mt-3 ms-3">
  <h3 class="h6 ls-s">高雄體驗會｜免費參加送帆布袋</h3>
  <p class="text-info fs-sh">2021-6-20</p>
  <p class=" d-none d-sm-block text-info fs-sh mt-3 mb-3">大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！</p>
  <a class="text-warning fw-bold" href="#">MORE</a>
</div>
</li>

<li class="border border-secondary rounded-3 d-flex mb-3">
  <img class="rounded-start"src="https://hexschool.github.io/boootstrap5WebLayout/assets/news02.jpg" alt="news picture">
<div class="mt-3 ms-3">
  <h3 class="h6 ls-s">高雄體驗會｜免費參加送帆布袋</h3>
  <p class="text-info fs-sh">2021-6-20</p>
  <p class="  d-none d-sm-block  text-info fs-sh mt-3 mb-3">大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！</p>
  <a class="text-warning fw-bold" href="#">MORE</a>
</div>
</li>

<li  class="border border-secondary rounded-3 d-flex mb-3">
   <img class="rounded-start"src="https://hexschool.github.io/boootstrap5WebLayout/assets/news03.jpg" alt="news picture">
<div class="mt-3 ms-3">
  <h3 class="h6 ls-s">高雄體驗會｜免費參加送帆布袋</h3>
  <p class="text-info fs-sh">2021-6-20</p>
  <p class=" d-none d-sm-block  text-info fs-sh mt-3 mb-3">大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！</p>
  <a class="text-warning fw-bold" href="#">MORE</a>
</div>
</li>
</ul>`},

comment:{
  tabTitle:"留言",
  content:`
  <p class="ms-2 mt-3 mb-5 p-3 border border-primary border-5 border-top-0 border-bottom-0 border-end-0 bg-white ">
                只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<a href="#"class="text-warning">聯絡提案人</a>！
            </p>
            

            <ul class="list-unstyled">
              <li class="border border-secondary rounded-3 p-3 mb-3">
                <div class="d-flex align-items-center">
                <img class="rounded-circle" src="https://hexschool.github.io/boootstrap5WebLayout/assets/user_img01.jpg" alt="user image">
                <div class="d-flex flex-column ms-3">
                  <a href="#" class="fs-m">廖小杰</a>
                  <p class="text-info fs-sh mb-0">2020年5月22日 11:32</p>
                </div>
              </div>
              <p>晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！</p>
              <div class="bg-light p-3 rounded-3">
                <p class="text-warning fs-sh d-block">提案者回覆</p>
                <p >你要嘛起床的時候開燈，要嘛給我們更多錢開發阿</p>
              </div>
              </li>

              <li  class="border border-secondary rounded-3 p-3 mb-3">
                <div class="d-flex align-items-center">
                <img class="rounded-circle" src="https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg" alt="user image">
                <div class="d-flex flex-column ms-3">
                  <a href="#" class="fs-m">卡阿伯</a>
                  <text class="text-info fs-sh">2020年5月22日 11:32</text>
                </div>
              </div>
              <p>希望有更多花色可以選擇！我女兒最近喜歡綠色</p>
              </li>

              <li  class="border border-secondary rounded-3 p-3 mb-3">
                <div class="d-flex align-items-center">
                <img class="rounded-circle" src="https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg" alt="user image">
                <div class="d-flex flex-column ms-3">
                  <a href="#" class="fs-m">賈師</a>
                  <text class="text-info fs-sh">2020年5月22日 11:32</text>
                </div>
              </div>
              <p>可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣</p>
              </li>

              <li  class="border border-secondary rounded-3 p-3 mb-3">
                <div class="d-flex align-items-center">
                <img class="rounded-circle" src="https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg" alt="user image">
                <div class="d-flex flex-column ms-3">
                  <a href="#" class="fs-m">俊俊</a>
                  <text class="text-info fs-sh">2020年5月22日 11:32</text>
                </div>
              </div>
              <p>test123 看一下我是不是真的可以留言</p>
              </li>
            </ul>
`}
}

const jsLinkList = document.querySelector('.js-link-list');

//追蹤專案愛心hover變色效果
const fasHover = document.querySelector('.fas-hover');
const btnHover = document.querySelector('.btn-hover');

btnHover.addEventListener('mouseover',(e)=>{
  fasHover.style.color = '#ff8c76';
  btnHover.addEventListener('mouseleave',(e) =>{
    fasHover.style.color = '#858377';
  })
})

//切換產品頁面內容
const tabContent = document.querySelector('.tab-content')

jsLinkList.addEventListener('click',(e) =>{
  e.preventDefault();
let tabTarget = e.target.dataset.tabname;
console.log(tabTarget);
let str="";
if(tabTarget == tabdata.progress.tabTitle){
  str = tabdata.progress.content
}else if(tabTarget == tabdata.faq.tabTitle){
  str = tabdata.faq.content
}else if (tabTarget == tabdata.news.tabTitle){
  str = tabdata.news.content
}else if(tabTarget == tabdata.comment.tabTitle){
  str = tabdata.comment.content
}else{
  return
} 
tabContent.innerHTML = str;
})

//募資進度
let fundProgress = 41;
const progressBar = document.querySelector('.fund-progress-bar');
function getFundProgress(){
  progressBar.style.width = `${fundProgress}%`;
  progressBar.textContent = `${fundProgress}%`;

}
getFundProgress()

//validate
const fundForm = document.querySelector('.fund-form');
const btnFundForm = document.querySelector('.btn-fund-form');
// const constraints = {
 
//   '姓名': {
//     presence:  {message: "不能為空！"}
//   },
//   '電話': {
//     presence:  {message: "不能為空！",
//     length: {
//       minimum: 9,
//       tooShort: "格式不正確！"
//   }
//   }},
//   '信箱': {
//     presence:  {message: "不能為空！"},
//     email: {message: "格式不正確！"}
//   }
// }

const inputPlan = document.querySelector('.inputPlan');
const buyerName =document.querySelector('.buyerName ');
const contactTel = document.querySelector('.contactTel');
const contactMail = document.querySelector('.contactMail');
const payMethod = document.querySelector('.payMethod')

btnFundForm.addEventListener('click',(e) =>{
  e.preventDefault();
//驗證  
  // let valiFormData = validate(fundForm,constraints);
  // let renderValiFormList = Object.keys(valiFormData);
  //不知道如何使用validate.js驗證select區塊 所以就寫了最簡單的驗證
  //每一次送出都要先清空再重新驗證
  let classList = [inputPlan, buyerName,contactTel,contactMail,payMethod];
  classList.forEach((item)=>{
    item.nextElementSibling.textContent = "";
  })

  if(inputPlan.value == "請選擇"){
    inputPlan.nextElementSibling.textContent = '請選擇方案！'
  }
  if(buyerName.value == ""){
    buyerName.nextElementSibling.textContent = '姓名不能為空！'
  }
  
  if(contactTel.value == ""){
    contactTel.nextElementSibling.textContent = '電話不能為空！'
  } 
  if(contactMail.value == ""){
    contactMail.nextElementSibling.textContent = '信箱不能為空！'
  }
  if(payMethod.value == "請選擇"){
    payMethod.nextElementSibling.textContent = '請選擇付款方式！'
  }
})
