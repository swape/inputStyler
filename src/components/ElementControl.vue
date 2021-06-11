<template>
  <div class="element-control">
    <div>
      <b>Borders:</b> <label><input type="checkbox" v-model="combinedBorder" /> combined</label>
      <div class="side-by-side" v-if="combinedBorder">
        <span></span>
        <CombiInput
          :value="getValue('border')"
          :sizing="getSizing('border')"
          :hidecolor="false"
          :border="true"
          :color="getColor('border')"
          :borderstyle="getBorderStyle('border')"
          @change="obj => inputChange('border', obj)"
        />
      </div>
      <div v-if="!combinedBorder">
        <div class="side-by-side" v-for="f in borders" :key="f.id">
          <span>{{ f.label }}</span>
          <CombiInput
            :value="getValue(f.id)"
            :sizing="getSizing(f.id)"
            :hidecolor="false"
            :color="getColor(f.id)"
            :border="true"
            :borderstyle="getBorderStyle(f.id)"
            @change="obj => inputChange(f.id, obj)"
          />
        </div>
      </div>
    </div>

    <div>
      <b>Border radius:</b> <label><input type="checkbox" v-model="combinedBorderRadius" /> combined</label>
      <div class="side-by-side" v-if="combinedBorderRadius">
        <span></span>
        <CombiInput
          :value="getValue('border-radius')"
          :sizing="getSizing('border-radius')"
          :hidecolor="true"
          :border="false"
          @change="obj => inputChange('border-radius', obj)"
        />
      </div>
      <div v-if="!combinedBorderRadius">
        <div class="side-by-side" v-for="f in borderRadius" :key="f.id">
          <span>{{ f.label }}</span>
          <CombiInput
            :value="getValue(f.id)"
            :sizing="getSizing(f.id)"
            :hidecolor="true"
            :border="false"
            @change="obj => inputChange(f.id, obj)"
          />
        </div>
      </div>
    </div>
    <div>
      <b>Outline</b>
      <div>
        <span></span>
        <CombiInput
          :value="getValue('outline')"
          :sizing="getSizing('outline')"
          :hidecolor="false"
          :border="true"
          :color="getColor('outline')"
          :borderstyle="getBorderStyle('outline')"
          @change="obj => inputChange('outline', obj)"
        />
      </div>
    </div>

    <div>
      <b>Padding:</b> <label><input type="checkbox" v-model="combinedPadding" /> combined</label>
      <div class="side-by-side" v-if="combinedPadding">
        <span>Combined</span>
        <CombiInput
          :value="getValue('padding')"
          :sizing="getSizing('padding')"
          :hidecolor="true"
          @change="obj => inputChange('padding', obj)"
        />
      </div>
      <div v-if="!combinedPadding">
        <div class="side-by-side" v-for="f in paddings" :key="f.id">
          <span>{{ f.label }}</span>
          <CombiInput
            :value="getValue(f.id)"
            :sizing="getSizing(f.id)"
            :hidecolor="f.hidecolor"
            @change="obj => inputChange(f.id, obj)"
          />
        </div>
      </div>
    </div>

    <div>
      <b>Margin:</b> <label><input type="checkbox" v-model="combinedMargin" /> combined</label>
      <div class="side-by-side" v-if="combinedMargin">
        <span>Combined</span>
        <CombiInput
          :value="getValue('margin')"
          :sizing="getSizing('margin')"
          :hidecolor="true"
          @change="obj => inputChange('margin', obj)"
        />
      </div>
      <div v-if="!combinedMargin">
        <div class="side-by-side" v-for="f in margins" :key="f.id">
          <span>{{ f.label }}</span>
          <CombiInput
            :value="getValue(f.id)"
            :sizing="getSizing(f.id)"
            :hidecolor="f.hidecolor"
            @change="obj => inputChange(f.id, obj)"
          />
        </div>
      </div>
    </div>

    <div>
      <b>Size:</b>
      <div class="side-by-side" v-for="f in sizes" :key="f.id">
        <span>{{ f.label }}</span>
        <CombiInput
          :value="getValue(f.id)"
          :sizing="getSizing(f.id)"
          :hidecolor="f.hidecolor"
          @change="obj => inputChange(f.id, obj)"
        />
      </div>
    </div>

    <div>TODO: <b> Shadow / Focus / Hover</b></div>
  </div>
</template>
<script>
import CombiInput from '@/components/CombiInput'
export default {
  name: 'ElementControl',
  components: { CombiInput },
  props: ['etype', 'values'],
  data() {
    return {
      combinedMargin: false,
      combinedPadding: false,
      combinedBorder: false,
      combinedBorderRadius: false,
      innerValues: {},
      sizes: [
        { id: 'width', hidecolor: true, label: 'Width' },
        { id: 'min-width', hidecolor: true, label: 'Min Width' },
        { id: 'max-width', hidecolor: true, label: 'Max Width' },
        { id: 'height', hidecolor: true, label: 'Height' },
        { id: 'min-height', hidecolor: true, label: 'Min Height' },
        { id: 'max-height', hidecolor: true, label: 'Max Height' }
      ],
      margins: [
        { id: 'margin-top', hidecolor: true, label: 'T' },
        { id: 'margin-right', hidecolor: true, label: 'R' },
        { id: 'margin-bottom', hidecolor: true, label: 'B' },
        { id: 'margin-left', hidecolor: true, label: 'L' }
      ],
      paddings: [
        { id: 'padding-top', hidecolor: true, label: 'T' },
        { id: 'padding-right', hidecolor: true, label: 'R' },
        { id: 'padding-bottom', hidecolor: true, label: 'B' },
        { id: 'padding-left', hidecolor: true, label: 'L' }
      ],
      borders: [
        { id: 'border-top', label: 'T' },
        { id: 'border-right', label: 'R' },
        { id: 'border-bottom', label: 'B' },
        { id: 'border-left', label: 'L' }
      ],
      borderRadius: [
        { id: 'border-top-left-radius', label: 'TL' },
        { id: 'border-top-right-radius', label: 'TR' },
        { id: 'border-bottom-right-radius', label: 'BR' },
        { id: 'border-bottom-left-radius', label: 'BL' }
      ]
    }
  },
  watch: {
    etype() {
      this.populateInputs()
    },
    combinedBorder() {
      if (this.combinedBorder) {
        this.removeOtherBorders()
      } else {
        this.removeBorder()
      }
    },
    combinedBorderRadius() {
      if (this.combinedBorderRadius) {
        this.removeOtherBorderRadius()
      } else {
        this.removeBorderRadius()
      }
    },
    combinedMargin() {
      if (this.combinedMargin) {
        this.removeOtherMargin()
      } else {
        this.removeMargin()
      }
    },
    combinedPadding() {
      if (this.combinedPadding) {
        this.removeOtherPadding()
      } else {
        this.removePadding()
      }
    }
  },
  mounted() {
    this.populateInputs()
  },
  methods: {
    removeOtherPadding() {
      const paddingTopCopy = JSON.parse(JSON.stringify(this.innerValues['padding-top']))
      this.innerValues['padding-top'] = null
      this.innerValues['padding-right'] = null
      this.innerValues['padding-bottom'] = null
      this.innerValues['padding-left'] = null
      if (!this.innerValues.padding) {
        this.innerValues.padding = paddingTopCopy
      }
    },
    removePadding() {
      if (this.innerValues.padding && this.innerValues.padding.value) {
        const paddingCopy = JSON.parse(JSON.stringify(this.innerValues.padding))
        this.innerValues['padding-top'] = paddingCopy
        this.innerValues['padding-right'] = paddingCopy
        this.innerValues['padding-bottom'] = paddingCopy
        this.innerValues['padding-left'] = paddingCopy
        this.innerValues.padding = null
      }
    },
    removeOtherMargin() {
      const marginTopCopy = JSON.parse(JSON.stringify(this.innerValues['margin-top']))
      this.innerValues['margin-top'] = null
      this.innerValues['margin-right'] = null
      this.innerValues['margin-bottom'] = null
      this.innerValues['margin-left'] = null
      if (!this.innerValues.margin) {
        this.innerValues.margin = marginTopCopy
      }
    },
    removeMargin() {
      if (this.innerValues.margin && this.innerValues.margin.value) {
        const marginCopy = JSON.parse(JSON.stringify(this.innerValues.margin))
        this.innerValues['margin-top'] = marginCopy
        this.innerValues['margin-right'] = marginCopy
        this.innerValues['margin-bottom'] = marginCopy
        this.innerValues['margin-left'] = marginCopy
        this.innerValues.margin = null
      }
    },
    removeBorder() {
      if (this.innerValues.border && this.innerValues.border.value) {
        const borderCopy = JSON.parse(JSON.stringify(this.innerValues.border))
        this.innerValues['border-top'] = borderCopy
        this.innerValues['border-right'] = borderCopy
        this.innerValues['border-bottom'] = borderCopy
        this.innerValues['border-left'] = borderCopy
        this.innerValues.border = null
      }
    },
    removeOtherBorders() {
      const borderTopCopy = JSON.parse(JSON.stringify(this.innerValues['border-top']))
      this.innerValues['border-top'] = null
      this.innerValues['border-right'] = null
      this.innerValues['border-bottom'] = null
      this.innerValues['border-left'] = null
      if (!this.innerValues.border) {
        this.innerValues.border = borderTopCopy
      }
    },
    removeBorderRadius() {
      if (this.innerValues['border-radius'] && this.innerValues['border-radius'].value) {
        const borderRadiusCopy = JSON.parse(JSON.stringify(this.innerValues['border-radius']))
        this.innerValues['border-top-left-radius'] = borderRadiusCopy
        this.innerValues['border-top-right-radius'] = borderRadiusCopy
        this.innerValues['border-bottom-right-radius'] = borderRadiusCopy
        this.innerValues['border-bottom-left-radius'] = borderRadiusCopy
        this.innerValues['border-radius'] = null
      }
    },
    removeOtherBorderRadius() {
      const borderRadiusTopCopy = JSON.parse(JSON.stringify(this.innerValues['border-top-left-radius']))
      this.innerValues['border-top-left-radius'] = null
      this.innerValues['border-top-right-radius'] = null
      this.innerValues['border-bottom-right-radius'] = null
      this.innerValues['border-bottom-left-radius'] = null
      if (!this.innerValues['border-radius']) {
        this.innerValues['border-radius'] = borderRadiusTopCopy
      }
    },
    populateInputs() {
      this.innerValues = this.values
      if (this.innerValues.border) {
        this.combinedBorder = true
      }
      if (this.innerValues.margin) {
        this.combinedMargin = true
      }
      if (this.innerValues.padding) {
        this.combinedPadding = true
      }
      if (this.innerValues['border-radius']) {
        this.combinedBorderRadius = true
      }
    },
    onChange() {
      this.$emit('change', this.innerValues)
    },
    getValue(prop) {
      if (this.innerValues && this.innerValues[prop]) {
        return this.innerValues[prop].value || ''
      }
      return ''
    },
    getSizing(prop) {
      if (this.innerValues && this.innerValues[prop]) {
        return this.innerValues[prop].sizing || 'px'
      }
      return 'px'
    },
    getColor(prop) {
      if (this.innerValues[prop]) {
        return this.innerValues[prop].color || '#000000'
      }
      return '#000000'
    },
    getBorderStyle(prop) {
      if (this.innerValues[prop]) {
        return this.innerValues[prop].borderStyle || 'solid'
      }
      return 'solid'
    },
    inputChange(prop, obj) {
      this.innerValues[prop] = obj
      this.onChange()
    }
  }
}
</script>
<style scoped>
.element-control > div {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #666;
}
.side-by-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'JetBrains Mono', Monaco, Menlo, 'Courier New', monospace;
  font-size: 13px;
}
.side-by-side > span {
  text-align: left;
  width: 100%;
  padding-right: 6px;
}
</style>
