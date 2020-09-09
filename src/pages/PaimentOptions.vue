<template>
  <layout>
    <page-head title="طرق الدفع" slot="page-head">
      <Breadcrumb :items="breadcrumbItems" />
    </page-head>
    <div class="row">
      <div class="col">
        <alert variant="primary">
          عند تفعيلك لبوابات الدفع الموضحة ادناه، ستتمكن من ربط متجرك الإلكتروني
          بإحدى تلك البوابات المختلفة. كل بوابة من البوابات لديها إشتراطات معينة
          لتفعيل حسابك لديهم. خيارات الدفع تتيح لك استقبال المدفوعات الإلكترونية
          عبر البطاقات الإئتمانية وبعضهم يدعم خيار: مدى، للدفع الإلكتروني سنقوم
          بربطك الكترونيًا معهم ولكنك بحاجة أيضًا الى تفعيل اشتراكك لديهم وتعبئة
          النماذج اللازمة.
        </alert>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <panel title="بوابات الدفع">
          <div class="row">
            <div class="col-md-6">
              <paiment-gateway
                featured
                title="بوابة تاب"
                subtitle="يمكنك تفعيل بوابة تاب للدفع"
                icon="zid zid-tap-logo"
              >
                <zid-button
                  href="payment-options-tap.html"
                  variant="primary"
                  class="btn-sm"
                >اضغط لمزيد من التفاصيل</zid-button>
              </paiment-gateway>
            </div>
            <div class="col-md-6">
              <paiment-gateway
                title="بوابات دفع أخرى"
                subtitle="من هنا يمكنك تفعيل بوابات أخرى"
                icon="fas fa-money-check-alt"
              >
                <zid-button
                  href="payment-options-tap.html"
                  variant="primary"
                  class="btn-sm"
                >اضغط لمزيد من التفاصيل</zid-button>
              </paiment-gateway>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="info-with-img">
                <div class="comp-logo-holder">
                  <img
                    class="img"
                    :src="require('@/assets/images/apple-pay-logo.svg')"
                    alt="Apple Pay"
                  />
                </div>
                <span class="text">يمكنك الان تفعيل Apple Pay في متجرك</span>

                <zid-button
                  href="payment-options-apple-pay.html"
                  variant="success"
                  class="btn-sm"
                  slot="action-header"
                  data-toggle="modal"
                  data-target="#bankModal"
                >اضغط لمعرفة المزيد</zid-button>
              </div>
            </div>
          </div>
        </panel>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <panel title="التحويل البنكي">
          <zid-button
            variant="success"
            class="btn-sm"
            slot="action-header"
            @click="() => showBankAccountModal()"
          >إضافة حساب جديد</zid-button>
          <div class="bank-list">
            <BankAccount
              v-for="(account, index) in bankAccounts"
              :key="index"
              :account="account"
              @onTriggerBankAccountModal="showBankAccountModal"
            />
          </div>
        </panel>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="learn-more-btn-holder">
          <a href="#" class="btn btn-outline-primary btn-sm">
            لمعرفة المزيد عن الدفع
            <i class="fas fa-question"></i>
          </a>
        </div>
      </div>
    </div>
    <BankModal
      :bankAccount="modalBankAccount"
      :isUpdate="isUpdateModal"
      v-if="modalBankAccount"
      slot="modals"
      @onBankModalSave="onBankModalSave"
    />
  </layout>
</template>

<script>
import Layout from "../Layout.vue";
import Alert from "../components/common/Alert.vue";

import PageHead from "../components/common/PageHead.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Panel from "../components/common/Panel.vue";
import PaimentGateway from "../components/common/PaimentGateway.vue";
import ZidButton from "../components/common/ZidButton.vue";
import BankAccount from "../components/common/BankAccount.vue";

import BankModal from "../components/common/BankModal.vue";

import isEmpty from "lodash/isEmpty";

// Fake data
const breadcrumbItems = [
  {
    text: "الإعدادات",
    href: "#",
  },
  {
    text: "طرق الدفع",
    active: true,
  },
];

const bankAccounts = [
  {
    bankName: "مصرف الراجحي",
    owner: "محمد سامي",
    number: "123456789012345",
    iban: "SA1234567890123456789011",
    bankLogo: require("@/assets/images/al-rajhi.png"),
  },
  {
    bankName: "البنك الأهلي التجاري",
    owner: "متجرر اللبس الجميل للتجارة",
    number: "123457889",
    iban: "SA98002876190018718901",
    bankLogo: require("@/assets/images/bank_ahli.png"),
  },
  {
    bankName: "البنك الأول",
    owner: "Test@test",
    number: "3456789765437",
    iban: "Sa5467890-98765435567890",
    bankLogo: require("@/assets/images/bank_holandi.png"),
  },
];

export default {
  name: "PaimentOptions",
  components: {
    Layout,
    Alert,
    PageHead,
    Breadcrumb,
    Panel,
    PaimentGateway,
    ZidButton,
    BankAccount,
    BankModal,
  },
  data() {
    return {
      breadcrumbItems,
      bankAccounts,
      modalBankAccount: null,
      isUpdateModal: false,
    };
  },
  methods: {
    showBankAccountModal(account = {}) {
      this.isUpdateModal = !isEmpty(account);
      this.modalBankAccount = account;
      setTimeout(() => this.$bvModal.show("bank-modal"), 0);
    },
    onBankModalSave(isUpdate) {
      console.log(isUpdate);
      // if isUpdate do PUT request, otherwise do POST request to add new bank account
    },
  },
};
</script>

<style lang="scss">
.modal-md {
  max-width: 650px;
}

.modal-side-text-align .modal-body {
  text-align: right;
}

.form-group {
  text-align: right;
}

.form-control {
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  color: #8d5da7;
  font-size: 15px;
  text-align: right;
  height: calc(1.5em + 0.75rem + 10px);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #c98fe9;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(152, 86, 187, 0.25);
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
}
.btn.btn-accept {
  background-color: #3ec498;
  color: #fff;
}
.btn.btn-grey {
  background-color: #cecece;
  color: #fff;
}
.dark-mode {
  .btn[class*="btn-outline-"]:not(:hover) {
    background-color: transparent;
  }
  .comp-logo-holder {
    background-color: #fff;
  }
}
</style>
