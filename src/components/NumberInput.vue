<template>
  <div class="number-input">
    <input v-model="innerValue" type="text" class="small-input" />
    <select v-model="innerSizing" class="small-input">
      <option>px</option>
      <option>em</option>
      <option>rem</option>
      <option>rem</option>
    </select>
    <input type="color" v-model="innerColor" class="small-input" />
  </div>
</template>
<script>
export default {
  name: 'NumberInput',
  props: ['value', 'sizing'],
  data() {
    return { innerValue: 0, innerSizing: 'px', innerColor: '' }
  },
  watch: {
    value() {
      if (this.innerValue !== this.value) {
        this.innerValue = this.value || '0'
      }
    },
    sizing() {
      if (this.innerSizing !== this.sizing) {
        this.innerSizing = this.sizing || 'px'
      }
    },
    innerValue() {
      const cleaned = this.removeUnwantedLetters(this.innerValue)

      if (cleaned !== this.innerValue) {
        this.innerValue = this.removeUnwantedLetters(this.innerValue)
      }

      this.onChange()
    },
    innerColor() {
      this.onChange()
    },
    innerSizing() {
      this.onChange()
    }
  },
  methods: {
    onChange() {
      this.$emit('change', {
        value: this.innerValue,
        sizing: this.innerSizing,
        color: this.innerColor
      })
    },
    removeUnwantedLetters(value) {
      return '' + value.replace(/(,|[^\d.-]+)+/g, '')
    }
  }
}
</script>
<style scoped>
.small-input {
  width: 45px;
  height: 19px;
  border: 0;
  margin: 1px;
  text-align: center;
}
.number-input {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
