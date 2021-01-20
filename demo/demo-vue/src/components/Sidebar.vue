<template>
  <aside class="fixed h-padding-m v-padding-s bg-gray-l3 border-r2 h-margin-m" style="margin-top: 80px;">
    <h6 class="v-padding-xs">SIDEBAR MENU</h6>
    <div v-if="menuItems" class="v-box font-l">
      <!-- {{ menuItems.count }} -->
      <div v-for="menuItem in menuItems" :key="menuItem.id" class="padding-xs">
        <a :href="menuItem.link">{{ menuItem.name }}</a>
        <div v-if="menuItem.children.length > 0">
          <div v-for="childMenuItem in menuItem.children" :key="childMenuItem.id" class="v-box v-padding-xs h-padding-s font-m">
            <a class="padding-xs" :href="childMenuItem.link">{{ childMenuItem.name }}</a>
            <div v-if="childMenuItem.children.length > 0">
              <div v-for="finalMenuItem in childMenuItem.children" :key="finalMenuItem.id" class="v-box v-padding-xs h-padding-s font-m">
                <a class="padding-xs" :href="finalMenuItem.link">{{ finalMenuItem.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar',
  props: {
    menuItems: {
      type: Array,
      required: false
    }
  },
  data() {
    return {}
  }
}
</script>
