const userID = "ufO0_wig4VkETaUTU"
const serviceID = "service_xb1o8hg"
const templateID = "template_s2qra5u"

const ul_1 = document.querySelector(".option1")
const ul_2 = document.querySelector(".option2")
const ul_3 = document.querySelector(".option3")
const ul_4 = document.querySelector(".option4")
const ul_5 = document.querySelector(".option5")
const ul_6 = document.querySelector(".option6")


const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const q6 = document.querySelector(".q6");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

var email_text = "";

//første spørgsmål
ul_1.addEventListener("click", function(event) {
    q1.style.display="none";
    q2.style.display="block";
    email_text += q1.firstElementChild.innerHTML + " ::: " + event.target.innerText + " ---------- ";
});

// email_text += q1.firstElementChild.innerHTML + "\n" + event.target.innerText + "\n\n"
// spørgsmål 1
// svar 1
//
//

//andet spørgsmål
ul_2.addEventListener("click", function(event) {
    q2.style.display="none";
    q3.style.display="block";
    email_text += q2.firstElementChild.innerHTML + " ::: " + event.target.innerText + " ---------- ";
});

//tredje spørgsmål
ul_3.addEventListener("click", function(event) {
    q3.style.display="none";
    q4.style.display="block";
    email_text += q3.firstElementChild.innerHTML + " ::: " + event.target.innerText + " ---------- ";
});

//fjerde spørgsmål
ul_4.addEventListener("click", function(event) {
    q4.style.display="none";
    q5.style.display="block";
    email_text += q4.firstElementChild.innerHTML + " ::: " + event.target.innerText + " ---------- ";
});


//femte spørgsmål
ul_5.addEventListener("click", function(event) {
    q5.style.display="none";
    survey.style.display = "none";
    end.style.display = "block";
    email_text += q5.firstElementChild.innerHTML + " ::: " + event.target.innerText + " ---------- ";
    sendEmail(email_text);
});

function sendEmail(message){
    const emailData = {
      name: "victoria", 
      email: "victoria.ronne@gmail.com",
      message: message  
    }
    emailjs.send(serviceID, templateID, emailData, userID);  
};