<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!--  User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Lodge Layout',
      icon: 'ri-layout-4-line',
      to: '/lodge-layout',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Bookings Calendar',
      icon: 'ri-calendar-event',
      to: '/bookings-calendar',
    }"
  />

  <!-- Administration -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Administration',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Manage Bookings',
      icon: 'ri-table-alt-line',
      to: '/manage-bookings',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Statistics',
      icon: 'ri-table-alt-line',
      to: '/booking-statistics',
    }"
  />
</template>
