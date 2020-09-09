<template>
  <div class="sidebar-body">
    <ul class="main-menu">
      <NavItem
        v-for="(item, index) in navItems"
        :key="index"
        :item="item"
        :index="index"
      />
      <li>
        <button
          id="btn-mode"
          class="btn-mode"
          :class="{ on: isDarkMode }"
          @click="toggleDarkMode"
        >
          <i class="zid zid-mode"></i>واجهة ليلية
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';

import { useDarkMode } from '../../hooks';

const navItems = [
  {
    text: 'الرئيسية',
    href: 'index.html',
    icon: 'home',
  },
  {
    text: 'التقارير',
    href: 'reports.html',
    icon: 'pie-chart',
  },
  {
    text: 'الطلبات',
    href: '#',
    icon: 'basket',
    children: [
      {
        text: 'الطلبات',
        href: 'orders.html',
      },
      {
        text: 'إنشاء طلب',
        href: 'order.html',
      },
      {
        text: 'المسودات',
        href: 'drafts.html',
      },
      {
        text: 'رسائل حالات الطلبات',
        href: 'order-notifications.html',
      },
    ],
  },
  {
    text: 'المنتجات',
    href: '#',
    icon: 'apps',
    children: [
      {
        text: 'جميع المنتجات',
        href: 'products.html',
      },
      {
        text: 'تصنيفات المنتجات',
        href: 'categories.html',
      },
    ],
  },
  {
    text: 'التسويق',
    href: '#',
    icon: 'dart-board',
    children: [
      {
        text: 'قسائم التخفيض',
        href: 'coupons.html',
      },
      {
        text: 'الخصومات التلقائية',
        href: 'discounts.html',
      },
      {
        text: 'حملات الرسائل النصية',
        href: 'sms-pricing.html',
      },
    ],
  },
  {
    text: 'العملاء',
    href: 'customers.html',
    icon: 'user',
  },
  {
    text: 'منظومة زد',
    href: '#',
    icon: 'viral',
    children: [
      {
        text: 'الشحن والتوصيل',
        href: 'delivery-options.html',
      },
      {
        text: 'الدفع',
        href: 'paiment-options.html',
      },
      {
        text: 'إدارة الطلبات والعمليات',
        href: '#',
      },
      {
        text: 'التصوير',
        href: '#',
      },
      {
        text: 'التغليف',
        href: '#',
      },
      {
        text: 'مساحات العمل المشتركة',
        href: '#',
      },
      {
        text: 'خدمات أخرى',
        href: 'otherr-services.html',
      },
    ],
  },
  {
    text: 'فريق العمل',
    href: '#',
    icon: 'users',
  },
  {
    text: 'الإعدادات',
    href: 'settings.html',
    icon: 'cogwheel',
  },
  {
    text: 'خيارات الواجهة',
    href: '#',
    icon: 'options',
    children: [
      {
        text: 'تخصيص',
        href: 'catalog-theme.html',
      },
      {
        text: 'صفحات إضافية',
        href: 'extra-pages.html',
      },
    ],
  },
];
export default {
  name: 'Nav',
  components: {
    NavItem,
  },
  setup() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return { isDarkMode, toggleDarkMode };
  },
  data() {
    return {
      navItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-body {
  padding-bottom: 80px;
}

.sidebar-body ul.main-menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-body ul.main-menu > li > button {
  display: inline-block;
  width: 100%;
  color: #fff;
  background-color: #231629;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  padding: 18px 20px;
  border: 0;
  text-align: right;
  outline: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.sidebar-body ul.main-menu > li > button.btn-mode > i.zid-mode {
  position: relative;
  display: inline-block;
  width: 1.35rem;
  height: 0.9rem;
  border-radius: 1rem;
  border: 0.1rem solid #fff;
  line-height: 0;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 15px;
}

.sidebar-body ul.main-menu > li > button.btn-mode > i.zid-mode:before {
  content: '';
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 1rem;
  background-color: #8d5da7;
  top: 0.16rem;
  left: 0.6rem;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.sidebar-body ul.main-menu > li > button.btn-mode.on > i.zid-mode:before {
  left: 0.1rem;
}

.sidebar-body ul.main-menu > li > button:hover > i.zid-mode,
.sidebar-body ul.main-menu > li > button:focus > i.zid-mode {
  border-color: rgba(255, 255, 255, 0.7);
}

.dark-mode {
  .wrapper .sidebar-body ul.main-menu > li > a {
    color: #fff;
    background-color: #211b28;
  }

  .wrapper .sidebar-body ul.main-menu > li > a[data-toggle='collapse']:before {
    color: #8d5da7;
  }

  .wrapper.sidebar-body ul.main-menu > li > a:hover {
    background-color: #45a787;
  }

  .wrapper
    .sidebar-body
    ul.main-menu
    > li
    > a:hover[data-toggle='collapse']:before {
    color: #fff;
  }

  .wrapper.sidebar-body ul.main-menu > li > button {
    color: #fff;
    background-color: #211a27;
  }

  .wrapper.sidebar-body ul.main-menu > li > button > i.zid-mode {
    border: 0.1rem solid #fff;
  }

  .wrapper.sidebar-body ul.main-menu > li > button > i.zid-mode:before {
    background-color: #8d5da7;
  }
}
</style>
