<template>
  <div class="search-holder">
    <form>
      <input type="text" placeholder="إبحث هنا..." /><button type="submit">
        <i class="zid zid-find"></i>
      </button>
    </form>
    <logout-link>تسجيل خروج</logout-link>
    <slot name="logout"></slot>
  </div>
</template>

<script>
import LogoutLink from './LogoutLink.vue';
export default {
  name: 'SearchForm',
  components: {
    LogoutLink,
  },
};
</script>

<style lang="scss" scoped>
.search-holder {
  text-align: left;
  width: 100%;
}

.search-holder form {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 321px;
}

.search-holder form ::-webkit-input-placeholder {
  color: #87789e !important;
}

.search-holder form :-moz-placeholder {
  color: #87789e !important;
}

.search-holder form ::-moz-placeholder {
  color: #87789e !important;
}

.search-holder form :-ms-input-placeholder {
  color: #87789e !important;
}

.search-holder form input[type='text'] {
  background-color: #f0f1f2;
  border: 0;
  border-radius: 50px;
  font-size: 13px;
  color: #697a8f;
  outline: none;
  padding: 7px 18px;
  padding-left: 40px;
  width: 100%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.search-holder form input[type='text']:hover,
.search-holder form input[type='text']:focus {
  background-color: #e3e4e6;
}

.search-holder form button {
  position: absolute;
  border: 0;
  background: none;
  left: 15px;
  top: 50%;
  margin-top: -8px;
  padding: 0;
  line-height: 0;
  color: #8393a0;
}

.search-holder form button i {
  font-size: 16px;
}

@media (max-width: 1200px) {
  .search-holder form {
    max-width: 255px;
  }
}
@media (max-width: 768px) {
  .search-holder form {
    max-width: 200px;
  }

  .search-holder form ::-webkit-input-placeholder {
    color: #fff !important;
  }

  .search-holder form :-moz-placeholder {
    color: #fff !important;
  }

  .search-holder form ::-moz-placeholder {
    color: #fff !important;
  }

  .search-holder form :-ms-input-placeholder {
    color: #fff !important;
  }

  .search-holder form input[type='text'] {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.8);
  }

  .search-holder form input[type='text']:hover,
  .search-holder form input[type='text']:focus {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .search-holder form button {
    color: rgba(255, 255, 255, 0.8);
  }
}

.dark-mode {
  .search-holder form ::-webkit-input-placeholder {
    color: #d4cce0;
  }

  .search-holder form :-moz-placeholder {
    color: #d4cce0;
  }

  .search-holder form ::-moz-placeholder {
    color: #d4cce0;
  }

  .search-holder form :-ms-input-placeholder {
    color: #d4cce0;
  }

  .search-holder form input[type='text'] {
    background-color: #4d435c;
    color: #d4cce0;
  }

  .search-holder form input[type='text']:hover,
  .search-holder form input[type='text']:focus {
    background-color: #5a5068;
  }

  .search-holder form button {
    color: #d4cce0;
  }

  @media (max-width: 768px) {
    .search-holder form ::-webkit-input-placeholder {
      color: #fff;
    }

    .search-holder form :-moz-placeholder {
      color: #fff;
    }

    .search-holder form ::-moz-placeholder {
      color: #fff;
    }

    .search-holder form :-ms-input-placeholder {
      color: #fff;
    }

    .search-holder form input[type='text'] {
      background-color: rgba(255, 255, 255, 0.12);
      color: rgba(255, 255, 255, 0.8);
    }

    .search-holder form input[type='text']:hover,
    .search-holder form input[type='text']:focus {
      background-color: rgba(255, 255, 255, 0.15);
    }

    .search-holder form button {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
