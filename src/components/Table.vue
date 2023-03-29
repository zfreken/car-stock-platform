<script setup>
defineProps({
  columns: {
    type: Object
  },
  row: {
    type: Array
  }
})
</script>

<template>
  <table class="table">
    <thead class="table__thead">
      <tr>
        <th v-for="col in columns" :key="col">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <tr v-for="item in row" :key="item">
        <td :class="columnKey" v-for="(column, columnKey) in columns" :key="columnKey">
          <div>{{ item[columnKey] }}</div>
          <slot :name="`cell(${columnKey})`" :row="item"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
  &__thead {
    background: #f9fafb;
    th {
      padding: 0.75rem 1.5rem;
      color: #374151;
      font-weight: 600;
      text-align: left;
    }
  }
  &__tbody {
    tr {
      border-bottom: 1px solid #e5e7eb;
      &:nth-child(even) {
        background: #f9fafb;
      }
    }
    td {
      padding: 0.75rem 1.5rem;
      color: #6b7280;
      border: 0;
      font-size: 14px;
      &:first-child {
        font-weight: 600;
        border-right: 1px solid #e5e7eb;
      }
    }
  }
}
</style>
