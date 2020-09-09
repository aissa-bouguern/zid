<template>
  <b-alert :variant="variant" show>
    <slot></slot>
  </b-alert>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  border-radius: 1.3rem;
  border-color: transparent;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 16px;
}

.alert a {
  font-weight: 600;
}

.alert.alert-sm {
  font-size: 12px;
  padding: 0.55rem 1.05rem;
  margin-bottom: 0.5rem;
}

.alert-dismissible .close {
  padding: 8px 16px;
  line-height: 18px;
  outline: none;
}

.dark-mode {
  .alert.alert-danger {
    color: #dc3645;
    background-color: rgba(207, 85, 98, 0.21);
  }

  .alert.alert-danger .alert-link {
    color: #dc3645;
  }

  .alert.alert-success {
    color: #46b792;
    background-color: rgba(67, 173, 140, 0.21);
  }

  .alert.alert-success .alert-link {
    color: #46b792;
  }

  .alert.alert-warning {
    color: #c58409;
    background-color: rgba(218, 165, 86, 0.21);
  }

  .alert.alert-warning .alert-link {
    color: #c58409;
  }

  .alert.alert-info {
    color: #15b7b2;
    background-color: rgba(27, 172, 167, 0.21);
  }

  .alert.alert-info .alert-link {
    color: #15b7b2;
  }

  .alert.alert-primary {
    color: #8c5da7;
    background-color: rgba(117, 75, 136, 0.21);
  }

  .alert.alert-primary .alert-link {
    color: #8c5da7;
  }

  .alert.alert-secondary {
    color: #868686;
    background-color: rgba(179, 179, 179, 0.21);
  }

  .alert.alert-secondary .alert-link {
    color: #868686;
  }

  .alert.alert-light {
    color: #c3c3c3;
    background-color: rgba(254, 254, 254, 0.25);
  }

  .alert.alert-light .alert-link {
    color: #c3c3c3;
  }

  .alert-dismissible .close {
    text-shadow: none;
  }
}
</style>
