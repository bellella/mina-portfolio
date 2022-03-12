<template>
  <div id="contact">
    <div class="section_container">
      <div class="section_top">
        <h3 class="title">about</h3>
        <h4 class="sub_title">heheheheh</h4>
      </div>
      <div class="contact_form">
        <Form @submit="handleSubmit" 
        class="inquiry_form" v-slot="{ errors }">
          <div class="form_item">
            <Field type="text" name="name" rules="required" autocomplete="off"
            class="form_control" placeholder="Full Name" />
            <p class="error_msg">{{errors.name}}</p>
          </div>
          <div class="form_item">
            <Field type="text" name="email" autocomplete="off"
            class="form_control" placeholder="Email" />
            <p class="error_msg">{{errors.email}}</p>
          </div>
          <div class="form_item">
            <Field
              as="textarea"
               rules="required" autocomplete="off"
              name="message"
              class="form_control"
              placeholder="Enter your message"
            ></Field>
            <p class="error_msg">{{errors.message}}</p>
          </div>
          <div class="form_item btn_form_item">
            <button class="main_btn" type="submit">SEND</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form } from 'vee-validate';
export default {
   components: {
    Field,
    Form
  },
  data() {

  },
  methods: {
    handleSubmit({name, email, message}) {
      const myEmail = 'bellella@gmail.com';
      const subject = `From amazing ${name}😎`;
      const newLine = '%0D%0A';
      const line = '🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼';
        const emailBody = `${line}${newLine}${message}${newLine}${line}`;
        document.location = `mailto:${myEmail}?subject=${subject}&body=${emailBody}`;
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  .contact_form {
    width: 50%;
    margin: 0 auto;
        @media (max-width: 970px) {
      width: 100%;
    }
    .form_item {
              margin-bottom: 20px;
      .form_control {
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        width: 100%;
        height: 50px;
        background: transparent;
        font-family: "Poppins";
        font-size: 20px;
        font-weight: 300;
        color: var(--text-sub-color);
box-shadow: var(--nm-out);
        &::placeholder {
          font-family: "Poppins";
          font-weight: 300;
          color: var(--text-sub-color);
          opacity: .5;
        }
        &:focus {
          outline: none;
          //border: 1px solid var(--text-sub-color);
          box-shadow: var(--nm-in);
        }
      }
              textarea.form_control {
          height: 400px;
          resize: none;
        }
        .error_msg {
          padding-top: 10px;
          color: var(--danger-color);
        }
    }
    .btn_form_item {
      display: flex;
      justify-content: end;
      .main_btn {

      }
    }
  }
}


</style>