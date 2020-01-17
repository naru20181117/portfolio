<template>
  <div class="Contact">
    <section class="contact_setion">
      <div class="container">
        <form name="contact_form" class="form-box">
          <h2 class="contact_h2">Contact</h2>
          <p class="contact_description">
            ※ TwitterのDMも解放しており、そちらからのお問い合わせも受け付けております。
            <br />フッターのTwitterアイコンから直接飛べるためそちらからご利用ください。
          </p>
          <div class="form-item-box">
            <label class="control-label">
              Name
              <span class="label-reuquired">必須</span>
            </label>
            <div class="contact_form_input">
              <input
                v-model="contactForm.name"
                type="text"
                class="form-control"
                name="your-name"
                placeholder="Name"
                required
                id="name"
              />
            </div>
          </div>
          <div class="form-item-box">
            <label class="control-label">
              Email
              <span class="label-required">必須</span>
            </label>
            <div class="contact_form_input">
              <input
                v-model="contactForm.email"
                type="email"
                class="form-control"
                name="your-email"
                placeholder="example@email.com"
                required
                id="email"
              />
            </div>
          </div>
          <div class="form-item-box">
            <label class="control-label">
              Message
              <span class="label-required">必須</span>
            </label>
            <div class="contact_from_input">
              <textarea
                v-model="contactForm.contents"
                class="form-control"
                name="your-message"
                placeholder="Message"
                rows="8"
                required
                id="message"
              ></textarea>
            </div>
          </div>
          <div class="form-item-box">
            <div class="form-button-box">
              <button class="form-button" v-on:click="sendMaiil()">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
// import { function } from('@/plugins/foirebase')

export default {
  data: () => ({
    contactForm: {
      name: "",
      contents: "",
      email: "",
      loading: false
    }
  }),
  methods: {
    sendMail: function() {
      if (document.getElementById("name").value === "") {
        alert("名前を入れてください");
        return false;
      }
      if (document.getElementById("email").value === "") {
        alert("メールアドレスを入力して下さい");
        return false;
      }
      if (document.getElementById("message").value === "") {
        alert("メッセージを入力してください");
        return false;
      }
      //     const sendMail = functions.httpsCallable("sendMail");
      //     sendMail(this.contactForm)
      //       .then(() => {
      //         this.formReset();
      //         window.location.href = "/contact/completed";
      //       })
      //       .catch(err => {
      //         console.log(error);
      //       });
    }
  }
};
</script>

<style lang="scss">
#contact {
  margin-top: 100px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
article {
  padding: 40px 0;
}
.control-label {
  font-size: 1.4rem;
  font-weight: 700;
}
.form-control {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 4px 8px;
}
.form-item-box {
  margin-top: 20px;
  text-align: left;
}
.form-box {
  padding: 20px 10px 10px 20px;
}
.form-button {
  cursor: pointer;
  display: block;
  max-width: 400px;
  width: 80%;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 0 #ddd;
}
.label-required {
  font-size: 1.2rem;
  color: #f44366;
  padding-left: 1em;
}
.contact_h2 {
  margin-bottom: 10px;
  text-align: left;
}
.contact_description {
  margin-bottom: 60px;
  text-align: left;
}
</style>
