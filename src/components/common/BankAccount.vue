<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col-6 my-auto">
          <h6>{{ account.bankName }}</h6>
        </div>
        <div class="col-6">
          <div class="options opp-dir">
            <a href="#" class="btn btn-icon-sm" @click.prevent="showEditModal"
              ><i class="fas fa-pencil-alt"></i
            ></a>
            <a href="#" class="btn btn-icon-sm"
              ><i class="far fa-trash-alt"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="img-with-details">
            <div class="comp-logo-holder">
              <img class="img" :src="account.bankLogo" alt="" />
            </div>
            <div class="details">
              <strong>المالك:</strong>&nbsp;{{ account.owner }}<br />
              <strong>رقم الحساب:</strong>&nbsp;{{ account.number }}<br />
              <strong>الأيبان:</strong>&nbsp;{{ account.iban }}<br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultBankAccount = {
  bankName: '',
  owner: '',
  number: '',
  iban: '',
  bankLogo: '',
};
export default {
  name: 'BankAccount',
  props: {
    account: {
      type: Object,
      default: function() {
        return defaultBankAccount;
      },
    },
    editModal: {
      type: Object,
    },
  },
  methods: {
    showEditModal() {
      this.$emit('onTriggerBankAccountModal', this.account);
    },
  },
};
</script>

<style lang="scss" scoped>
.dark-mode {
  .bank-list > .row {
    border-color: #43364f;
  }
  .comp-logo-holder {
    background-color: #fff;
  }
}
</style>
