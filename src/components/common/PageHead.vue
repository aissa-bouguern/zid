<template>
  <div class="container-fluid page-head">
    <div class="row">
      <div class="col-md-12">
        <div class="page-title" v-if="title">{{ title }}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHead',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.page-head {
  background-color: #f8f8f8;
  padding: 25px 30px;
  -webkit-box-shadow: 0 4px 6px rgba(141, 93, 167, 0.1);
  box-shadow: 0 4px 6px rgba(141, 93, 167, 0.1);
}

.page-head .sec-title {
  color: #4d435c;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 7px;
}

.page-head .sec-title i {
  font-size: 24px;
  color: #45a787;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 8px;
}

.page-head .sec-subtitle {
  color: #767479;
  font-size: 17px;
  margin-bottom: 10px;
}

.page-head .page-text {
  color: #a9a0b4;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.page-head .period-holder {
  text-align: left;
}

.page-head .period-holder .text {
  display: inline-block;
  font-size: 14px;
  color: #6e6e6e;
  margin-left: 8px;
}

.page-head .btn-holder {
  text-align: left;
}

.page-head .page-title {
  color: #8d5da7;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.page-head .page-subtitle {
  color: #767479;
  font-size: 15px;
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .page-head .period-holder {
    text-align: center;
  }
}
@media (max-width: 575px) {
  .page-head .btn-holder {
    text-align: right;
  }
}

.dark-mode {
  .page-head {
    background-color: #40344b;
    background-color: #29202f;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .page-head .sec-title {
    color: #fff;
  }

  .page-head .sec-title i {
    color: #fff;
  }

  .page-head .sec-subtitle {
    color: #e1d9ec;
  }

  .page-head .page-text {
    color: #e1d9ec;
  }

  .page-head .period-holder .text {
    color: #d4ccdf;
  }

  .page-head .page-title {
    color: #8d5da7;
  }

  .page-head .page-subtitle {
    color: #d4ccdf;
  }
}
</style>
