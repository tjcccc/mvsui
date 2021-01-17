<template>
  <aside class="fixed h-padding-m v-padding-s bg-gray-l3 border-r2 h-margin-m" style="margin-top: 80px;">
    <h6 class="v-padding-xs">SIDEBAR MENU</h6>
    <div class="v-box font-l">
      <!-- {{ listItems.count }} -->
      <div v-for="listItem in listItems" :key="listItem.id" class="padding-xs">
        <a :href="listItem.link">{{ listItem.name }}</a>
        <div v-if="listItem.children.length > 0">
          <div v-for="childListItem in listItem.children" :key="childListItem.id" class="v-box v-padding-xs h-padding-s font-m">
            <a class="padding-xs" :href="childListItem.link">{{ childListItem.name }}</a>
            <div v-if="childListItem.children.length > 0">
              <div v-for="finalListItem in childListItem.children" :key="finalListItem.id" class="v-box v-padding-xs h-padding-s font-m">
                <a class="padding-xs" :href="finalListItem.link">{{ finalListItem.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import data from '../data/siderbar.json';

export default {
  name: 'Sidebar',
  props: {
  },
  data() {
    return {
      listItems: data
    }
  }
}
</script>
