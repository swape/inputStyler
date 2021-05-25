<template>
  <div class="combi-input">
    <input v-model="innerValue" type="text" class="small-input-flex" />
    <select v-model="innerSizing" class="small-input-flex">
      <option>px</option>
      <option>em</option>
      <option>rem</option>
      <option>rem</option>
      <option>%</option>
    </select>
    <select v-if="border" v-model="innerBorderStyle" class="small-input-flex">
      <option>solid</option>
      <option>dotted</option>
      <option>dashed</option>
      <option>double</option>
      <option>grove</option>
      <option>hidden</option>
      <option>inherit</option>
      <option>initial</option>
      <option>inset</option>
      <option>none</option>
      <option>outset</option>
      <option>revert</option>
      <option>ridge</option>
      <option>unset</option>
    </select>
    <input type="color" v-model="innerColor" class="small-input-flex" v-if="!hidecolor" />
  </div>
</template>
<script>
export default {
  name: 'CombiInput',
  props: ['value', 'sizing', 'color', 'hidecolor', 'border', 'borderstyle'],
  data() {
    return { innerValue: '', innerSizing: 'px', innerColor: '', innerBorderStyle: 'solid' }
  },
  watch: {
    value() {
      this.updateIncomingValuesValue()
    },
    sizing() {
      this.updateIncomingValuesValue()
    },
    color() {
      this.updateIncomingValuesValue()
    },
    borderstyle() {
      this.updateIncomingValuesValue()
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
    },
    innerBorderStyle() {
      this.onChange()
    }
  },
  mounted() {
    this.updateIncomingValuesValue()
  },
  methods: {
    updateIncomingValuesValue() {
      if (this.innerValue !== this.value) {
        this.innerValue = this.value || ''
      }
      if (this.innerSizing !== this.sizing) {
        this.innerSizing = this.sizing || 'px'
      }
      if (this.innerBorderStyle !== this.borderstyle) {
        this.innerBorderStyle = this.borderstyle || 'solid'
      }
      if (this.innerColor !== this.color) {
        this.innerColor = this.color || '#000000'
      }
    },
    onChange() {
      const retObj = {
        value: this.innerValue,
        sizing: this.innerSizing
      }
      if (!this.hidecolor) {
        retObj.color = this.innerColor
      }
      if (this.border) {
        retObj.borderStyle = this.innerBorderStyle
      }
      this.$emit('change', retObj)
    },
    removeUnwantedLetters(value) {
      return '' + value.replace(/(,|[^\d.-]+)+/g, '')
    }
  }
}
</script>
<style scoped>
.small-input-flex {
  flex: auto;
  max-width: 50px;
  height: 18px;
}
select.small-input-flex {
  height: 22px;
}
.combi-input {
  display: flex;
  justify-content: center;
  align-content: center;
}

.combi-input {
  display: flex;
}
.combi-input input,
.combi-input select {
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.9);
}
.combi-input input:focus,
.combi-input select:focus {
  background-color: rgba(255, 255, 255, 0.9);
  outline: transparent;
}
</style>
