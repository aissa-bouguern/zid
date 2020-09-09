<template>
  <b-modal id="bank-modal">
    <template v-slot:modal-header="{ close }">
      <div class="modal-title-sm">أضف حساب بنكي</div>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
        <span aria-hidden="true">×</span>
      </button>
    </template>
    <form>
      <div class="form-row">
        <div class="col-md-6">
          <div class="form-group">
            <label for>اسم البنك</label>
            <div class="select-chosen-container select-chosen-container-sm">
              <select
                data-placeholder="Choose a Bank..."
                class="chosen-select"
                v-model="bankAccount.bankName"
              >
                <option>البنك الأول</option>
                <option>مصرف الراجحي</option>
                <option>البنك الأهلي التجاري</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="input1">رقم الحساب</label>
            <input
              type="text"
              class="form-control form-control-sm"
              id="input1"
              placeholder="123456789XXXXXX"
              v-model="bankAccount.number"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="input2">الأيبان</label>
            <input
              type="text"
              class="form-control form-control-sm"
              id="input2"
              placeholder="SA03 8000 0000 6080 XXXX XXXX"
              v-model="bankAccount.iban"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="input3">اسم المستفيد</label>
            <input
              type="text"
              class="form-control form-control-sm"
              id="input3"
              placeholder="Name of the account owner"
              v-model="bankAccount.owner"
            />
          </div>
        </div>
      </div>
    </form>
    <template v-slot:modal-footer>
      <button type="button" class="btn btn-accept btn-sm" @click="emitSaveAction">حفظ</button>
      <button type="button" class="btn btn-grey btn-sm" @click="dismissModal">إغلاق</button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    bankAccount: {
      type: Object,
    },
    isUpdate: {
      type: Boolean,
    },
  },
  methods: {
    emitSaveAction() {
      this.$emit("onBankModalSave", this.isUpdate);
    },
    dismissModal() {
      this.$bvModal.hide("bank-modal");
    },
  },
};
</script>

<style lang="scss">
select {
  width: 100%;
  border-radius: 5px;
  border-color: #e7e7e7;
  color: #85808f;
}

.dark-mode {
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .modal-backdrop.show {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .modal .modal-content {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #120f17;
    border: 1px solid #2c2735;
  }

  .modal .modal-header .modal-title {
    color: #fff;
  }

  .modal .modal-header .modal-title-sm {
    color: #fff;
  }

  .modal .modal-header .close {
    color: #a29ba5;
  }

  .modal .modal-body {
    color: #908a98;
  }

  .modal .modal-body .form-group label {
    color: #fff;
  }
  .form-control,
  select {
    border-color: #413847;
    color: #8d5da7;
    background-color: #302935;
  }

  .form-control:focus {
    color: #8c819e;
    background-color: #302935;
    border-color: #605665;
    box-shadow: 0 0 0 0.2rem rgba(152, 86, 187, 0.25);
  }

  .form-control.normal {
    background-color: #302935;
    border-color: #413847;
  }

  .form-control.with-shadow {
    -webkit-box-shadow: 0 3px 5px rgba(141, 93, 167, 0.06);
    box-shadow: 0 3px 5px rgba(141, 93, 167, 0.06);
  }

  .form-control.form-control-primary {
    background-color: #8d5da7;
    color: #fff;
  }

  .form-control:disabled,
  .form-control[disabled] {
    background-color: #454049;
    border-color: #4c4650;
  }

  .btn.btn-grey {
    background-color: #4d435c;
    color: #fff;
  }

  .btn.btn-grey:hover,
  .btn.btn-grey:focus {
    background-color: #463d53;
  }

  .btn.btn-grey:focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 206, 206, 0.5);
  }

  .btn.btn-white:focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 206, 206, 0.5);
  }
}
</style>
