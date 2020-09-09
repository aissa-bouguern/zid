<template>
  <div class="time-holder">
    <div class="time">
      <i class="zid zid-clock"></i>
      الساعة {{ time }} بتوقيت الرياض
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentTime',
  data() {
    return {
      time: null,
    };
  },
  created() {
    this.setTime();
  },
  methods: {
    setTime() {
      let options = {
          timeZone: 'Asia/Riyadh',
          hour: 'numeric',
          minute: 'numeric',
        },
        formatter = new Intl.DateTimeFormat('ar-SA', options);
      this.time = formatter.format(new Date());
    },
  },
};
</script>

<style lang="scss" scoped>
.time-holder {
  text-align: right;
  width: 100%;
}

.time-holder .time {
  display: inline-block;
  color: #45a787;
  font-size: 13px;
  font-weight: 600;
}

.time-holder .time i {
  color: #45a787;
  font-size: 17px;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 10px;
}

@media (max-width: 768px) {
  .time-holder .time {
    display: none;
  }
}

.dark-mode {
  .time-holder .time,
  .time-holder .time i {
    color: #fff;
  }
}
</style>
