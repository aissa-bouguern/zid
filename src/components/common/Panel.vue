<template>
  <div class="other-box extended">
    <div class="other-box-head with-border">
      <div class="row">
        <div class="col-6 my-auto">
          <div class="content-title other-color">{{ title }}</div>
        </div>
        <div class="col-6">
          <div class="opp-dir">
            <slot name="action-header"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="other-box-content">
      <div class="row">
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.other-box {
  border-radius: 12px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 5px rgba(141, 93, 167, 0.06);
  box-shadow: 0 3px 5px rgba(141, 93, 167, 0.06);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 30px;
}

.other-box.full {
  max-width: 100%;
}

.other-box.extended {
  max-width: 1200px;
}

.other-box.other-box-sm {
  max-width: 600px;
}

.other-box.other-box-md {
  max-width: 700px;
}

.other-box.height-100 {
  height: calc(100% - 30px);
}

.other-box .other-box-head {
  padding: 20px;
  padding: 16px 20px;
}

.other-box .other-box-head .content-title {
  margin-bottom: 0;
}

.other-box .other-box-head .content-title small {
  color: #71797e;
  margin: 0 5px;
}

.other-box .other-box-head .all-oneline {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.other-box .other-box-head .all-oneline .tip {
  -moz-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.other-box .other-box-head.with-border {
  border-bottom: 1px solid #ededed;
}

.other-box .other-box-head .nav-tabs {
  -moz-justify-content: flex-end;
  -webkit-justify-content: flex-end;
  -ms-justify-content: flex-end;
  justify-content: flex-end;
}

.other-box .other-box-head .nav-tabs .nav-item .nav-link {
  color: #9d9d9d;
}

.other-box .other-box-head .nav-tabs .nav-item .nav-link.active {
  color: #44a787;
}

.other-box .other-box-head.with-tabs {
  padding-bottom: 0;
  padding-top: 15px;
}

.other-box .other-box-content {
  padding: 20px;
}

.other-box .other-box-content p,
.other-box .other-box-content .normal-text {
  font-size: 14px;
  color: #717980;
}

.other-box .tip {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: #746f7c;
}

@media (max-width: 575px) {
  .other-box .other-box-head .all-oneline {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .other-box .other-box-head .all-oneline .tip {
    margin-bottom: 20px;
  }
}

.dark-mode .other-box {
  background-color: #302539;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.dark-mode .other-box .other-box-head.with-border {
  border-bottom-color: #443550;
}

.dark-mode .other-box .other-box-head .content-title {
  color: #fff;
}

.dark-mode .other-box .other-box-head .content-title small {
  color: #686172;
}

.dark-mode .other-box .other-box-head .nav-tabs .nav-item .nav-link {
  color: #6e6577;
  background-color: #211c28;
  border-color: #211c28;
}

.dark-mode .other-box .other-box-head .nav-tabs .nav-item .nav-link.active {
  color: #44a787;
  background-color: #302539;
  border-color: #43364f;
  border-bottom-color: transparent;
}

.dark-mode .other-box .other-box-content p,
.other-box .other-box-content .normal-text {
  color: #766f7f;
}

.dark-mode .other-box .tip {
  color: #746f7c;
}

.dark-mode .other-box .form-control {
  background-color: #302539;
}

.dark-mode .other-box .form-control:hover,
.other-box .form-control:focus {
  background-color: #302539;
  border-color: #4d4154;
}
</style>
