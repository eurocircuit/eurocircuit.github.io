/* const scriptURL = 'https://script.google.com/macros/s/AKfycbz0mqRFeKl4_DIF9imdc6bjwo9XA3bRNhIdcwJgB2e-F4VpGS6M7grd/exec'
            const form = document.forms['AgentForm']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks so much for giving us feedback!"))
                .catch(error => console.error('Error!', error.message))
            }) */
/*             const button = document.getElementById('submit');

            button.addEventListener('click', async _ => {
              try {     
                const response = await fetch('yourUrl', {
                  method: 'post',
                  body: {
                    // Your body
                  }
                });
                console.log('Completed!', response);
              } catch(err) {
                console.error(`Error: ${err}`);
              }
            }); */
            /* const scriptURL = 'https://script.google.com/macros/s/AKfycbzS5D3dc70rIDHecrRLt7cu_lO584xJm8v5jQyp65M9GHYLtkMb2wCU/exec'
            const form = document.forms['AgentForm2']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
                location.reload();
            }) */
            const slidePage = document.querySelector(".slide-page");
            const nextBtnFirst = document.querySelector(".firstNext");
            const prevBtnSec = document.querySelector(".prev-1");
            const nextBtnSec = document.querySelector(".next-1");
            const prevBtnThird = document.querySelector(".prev-2");
            const nextBtnThird = document.querySelector(".next-2");
            const prevBtnFourth = document.querySelector(".prev-3");
            /* const nextBtnFourth = document.querySelector(".next-3");
            const prevBtnFifth = document.querySelector(".prev-4");
            const nextBtnFifth = document.querySelector(".next-4");
            const prevBtnSixth = document.querySelector(".prev-5"); */
            const submitBtn = document.querySelector(".submit");
            const progressText = document.querySelectorAll(".step .text p");
            /* const progressText2 = document.querySelectorAll(".step p"); */
            const progressNum = document.querySelectorAll(".step .bullet span");
            const progressCheck = document.querySelectorAll(".step .fa");
            const bullet = document.querySelectorAll(".step .bullet");
            let current = 1;
            
            nextBtnFirst.addEventListener("click", function(event){
              event.preventDefault();
              slidePage.style.marginLeft = "-25%";
              bullet[current - 1].classList.add("active");
              
              progressText[current - 1].classList.add("active");
              progressText[current].classList.add("active");
              /* progressNum[current - 1].classList.add("active");
              progressNum[current].classList.add("active"); */
              progressCheck[current - 1].classList.add("active");
              current += 1;
            });
            nextBtnSec.addEventListener("click", function(event){
              event.preventDefault();
              slidePage.style.marginLeft = "-50%";
              bullet[current - 1].classList.add("active");
              
              progressText[current - 1].classList.add("active");
              progressText[current].classList.add("active");
              /* progressNum[current - 1].classList.add("active");
              progressNum[current].classList.add("active"); */
              progressCheck[current - 1].classList.add("active");
              current += 1;
            });
            nextBtnThird.addEventListener("click", function(event){
              event.preventDefault();
              slidePage.style.marginLeft = "-75%";
              bullet[current - 1].classList.add("active");
              
              progressText[current - 1].classList.add("active");
              progressText[current].classList.add("active");
              /* progressNum[current - 1].classList.add("active");
              progressNum[current].classList.add("active"); */
              progressCheck[current - 1].classList.add("active");
              current += 1;
            });
            /* nextBtnFourth.addEventListener("click", function(event){
                event.preventDefault();
                slidePage.style.marginLeft = "-100%";
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText2[current - 1].classList.add("active");
                current += 1;
              });
            nextBtnFifth.addEventListener("click", function(event){
                event.preventDefault();
                slidePage.style.marginLeft = "-125%";
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText2[current - 1].classList.add("active");
                current += 1;
              }); */
            submitBtn.addEventListener("click", function(){
              bullet[current - 1].classList.add("active");
              progressCheck[current - 1].classList.add("active");
              progressText[current - 1].classList.add("active");
              current += 1;
              location.reload();
              /* setTimeout(function(){
                alert("Thanks so much for giving us feedback!");
                location.reload();
              },800); */
            });
            
            prevBtnSec.addEventListener("click", function(event){
              event.preventDefault();
              slidePage.style.marginLeft = "0%";
              bullet[current - 2].classList.remove("active");
              
              progressText[current - 1].classList.remove("active");
              /* progressNum[current - 1].classList.remove("active"); */
              progressCheck[current - 2].classList.remove("active");
              current -= 1;
            });
            prevBtnThird.addEventListener("click", function(event){
              event.preventDefault();
              slidePage.style.marginLeft = "-25%";
              bullet[current - 2].classList.remove("active");
              
              progressText[current - 1].classList.remove("active");
              /* progressNum[current - 1].classList.remove("active"); */
              progressCheck[current - 2].classList.remove("active");
              current -= 1;
            });
            prevBtnFourth.addEventListener("click", function(event){
              event.preventDefault();
              slidePage.style.marginLeft = "-50%";
              bullet[current - 2].classList.remove("active");
              
              progressText[current - 1].classList.remove("active");
              /* progressNum[current - 1].classList.remove("active"); */
              progressCheck[current - 2].classList.remove("active");
              current -= 1;
            });
            /* prevBtnFifth.addEventListener("click", function(event){
                event.preventDefault();
                slidePage.style.marginLeft = "-75%";
                bullet[current - 2].classList.remove("active");
                progressCheck[current - 2].classList.remove("active");
                progressText2[current - 2].classList.remove("active");
                current -= 1;
              });
            prevBtnSixth.addEventListener("click", function(event){
                event.preventDefault();
                slidePage.style.marginLeft = "-100%";
                bullet[current - 2].classList.remove("active");
                progressCheck[current - 2].classList.remove("active");
                progressText2[current - 2].classList.remove("active");
                current -= 1;
              }); */
            
            /*   function displayQuestion(answer) {
                
                document.getElementById(answer + 'Question').style.display = "block";
              
                if (answer == "no") { // hide the div that is not selected
              
                  document.querySelector(".next-2").style.display = "none";
                  document.querySelector(".next-3").style.display = "none";
                  document.querySelector(".prev-4").style.display = "none";
                  document.querySelector(".next-4").style.display = "none";
                  document.querySelector(".prev-5").style.display = "none";
                } else if (answer == "yes") {
              
                  document.querySelector(".next-2").style.display = "block";
                  document.querySelector(".next-3").style.display = "block";
                  document.querySelector(".prev-4").style.display = "block";
                  document.querySelector(".next-4").style.display = "block";
                  document.querySelector(".prev-5").style.display = "block";
              
                }
              
              }
               */