<template>
<section>
  <h1 class="mt-20 mb-6 text-center font-['poppins'] text-4xl">Get in touch</h1>
    <form id="my-form" action="https://formspree.io/f/mjvlpbnj" method="POST" 
     class="
     flex-wrap
     p-8 
     m-auto 
     max-w-max 
     h-72 
    text-black "
    >
     <label class="font-['poppins']">Email:</label>
     <input class="w-full p-2 mb-4 border-2 rounded-full" type="email" name="email" placeholder="example@gmail.com"/>
     <label class="font-['poppins'] ">Message:</label>
     <textarea 
     class="w-full border-2 p-2" 
     type="text" 
     name="message" 
     placeholder="Hi! i'm interested">
     </textarea>
     <input type="submit" name="submit" id="my-form-button" value="Submit"  
     class="
     font-['poppins'] 
     text-center 
     float-right 
     bg-[#e9eef6] 
     p-2 
     rounded-br-lg 
     border-2
     border-zinc-900">
     <p class="text-black" id="my-form-status"></p>
  </form>
</section>
</template>

<script>
 let form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("my-form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    form.addEventListener("submit", handleSubmit)
    }
</script>

<style scoped>
  input:focus{
    outline: none;
  }
</style>