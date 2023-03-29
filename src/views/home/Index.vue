<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { Table, Button } from '../../components'
import { formatNumber } from '../../utils'
import { dataModel } from './dataModel.js'

const store = useStore()
const getProducts = computed(() => store.getters.getProducts())

const editRow = ({ row }) => {
  router.push({ name: 'edit', params: { id: row.carId } })
}
</script>

<template>
  <div class="table-responsive">
    <Table :columns="dataModel" :row="getProducts">
      <template #cell(price)="{ row }">
        <div class="show">{{ formatNumber(row.price) }}</div>
      </template>
      <template #cell(color)="{ row }">
        <div class="color-cell" :style="`background:${row.color}`" />
      </template>
      <template #cell(edit)="row">
        <Button type="button" @click="editRow(row)">Edit</Button>
      </template>
    </Table>
  </div>
</template>
<style lang="scss">
.table-responsive {
  overflow: auto;
}
.color-cell {
  width: 74px;
  height: 17px;
  margin-bottom: 7px;
}
.price div:first-child {
  display: none;
}
</style>
