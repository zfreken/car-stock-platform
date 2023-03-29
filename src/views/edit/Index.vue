<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { toast } from 'vue3-toastify'
import { useRoute, RouterLink } from 'vue-router'
import { Button, CurrencyInput } from '../../components'

const id = useRoute().params.id
const store = useStore()

const getProduct = computed(() => store.getters.getProductById(id))
const { id: cId, carId, inStock, hp, price, color } = getProduct.value

const getColorOption = computed(() => store.getters.getProductsColor()).value

const form = reactive({
  id: cId,
  carId,
  inStock,
  hp,
  price: parseFloat(price),
  color
})

const onSave = () => {
  store.dispatch('setProduct', form)
  toast.success('Successfully updated.')
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="edit">
    <div class="title">
      <h1>Edit page {{ id }}</h1>
      <RouterLink class="title__link" to="/">Back</RouterLink>
    </div>
    <form class="form" @submit.prevent="onSubmit">
      <div class="form__group">
        <label class="form__label">ID</label>
        <input class="form__input" type="text" id="id" v-model="form.id" disabled />
      </div>
      <div class="form__group">
        <label class="form__label">Car</label>
        <input class="form__input" type="text" id="car" v-model="form.carId" disabled />
      </div>
      <div class="form__group">
        <input class="form__check" type="checkbox" id="inStock" v-model="form.inStock" />
        <label class="form__check-label" for="inStock">INSTOCK</label>
      </div>
      <div class="form__group">
        <label class="form__label">Horse Power</label>
        <input type="range" id="hp" v-model="form.hp" class="slider" min="100" max="550" />
        <span class="form__range-label">{{ form.hp }}</span>
      </div>
      <div class="form__group">
        <label class="form__label">Price</label>
        <CurrencyInput v-model="form.price" :options="{ currency: 'EUR' }" classes="form__input" />
      </div>
      <div class="form__group">
        <label class="form__radio-group" v-for="color in getColorOption" :key="color" :for="color">
          <input class="form__check" type="radio" :id="color" :value="color" v-model="form.color" />
          <span class="form__check-label">{{ color }}</span>
        </label>
      </div>
      <div class="form__action">
        <Button type="button" classes="btn__gray mr-4" @click="router.back()">Cancel</Button>
        <Button type="submit" @click="onSave()">Save</Button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &__link {
    text-decoration: unset;
    background: #9c9c9c;
    color: #fff;
    padding: 5px 20px;
    border-radius: 4px;
  }
}
.form {
  &__label {
    display: block;
    font-size: 14px;
    margin-bottom: 2px;
  }
  &__group {
    margin-bottom: 16px;
  }
  &__input {
    position: relative;
    padding: 12px 16px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    width: 100%;
  }
  &__check {
    margin-right: 7px;
  }
  &__check-label {
    font-size: 14px;
  }
  &__radio-group {
    margin-right: 15px;
    display: inline-flex;
    align-items: center;
  }
  &__action {
    display: flex;
    justify-content: end;
  }
  &__range-label {
    position: relative;
    top: -4px;
    margin-left: 10px;
  }
}
</style>
