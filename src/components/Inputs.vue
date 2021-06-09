<template>
  <div class="container">
    <div class="floating">
      <div>Close button</div>
      <h3>{{ selectedElement }}</h3>

      <div v-if="selectedElement">
        <div>
          <ElementControl
            :etype="selectedElement"
            @change="changeValues"
            :values="fetchElementValues(selectedElement)"
          />
        </div>

        <br />
        <textarea v-model="customCSS"></textarea>
      </div>

      <div>
        Save, load and export button
      </div>
    </div>
    <form>
      <h2>Inputs</h2>
      <div>
        <div>text</div>
        <div><input type="text" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('text')">&gt;</i></div>
      </div>
      <div>
        <div>email</div>
        <div><input type="email" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('email')">&gt;</i></div>
      </div>
      <div>
        <div>number</div>
        <div><input type="number" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('number')">&gt;</i></div>
      </div>
      <div>
        <div>tel</div>
        <div><input type="tel" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('tel')">&gt;</i></div>
      </div>
      <div>
        <div>button</div>
        <div><input type="button" value="I am input button" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('button')">&gt;</i></div>
      </div>
      <div>
        <div>color</div>
        <div><input type="color" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('color')">&gt;</i></div>
      </div>
      <div>
        <div>date</div>
        <div><input type="date" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('date')">&gt;</i></div>
      </div>
      <div>
        <div>datetime</div>
        <div><input type="datetime" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('datetime')">&gt;</i></div>
      </div>
      <div>
        <div>datetime-local</div>
        <div><input type="datetime-local" /></div>
        <div class="right-aligned">
          <i class="selectButton" @click="select('datetime-local')">&gt;</i>
        </div>
      </div>
      <div>
        <div>month</div>
        <div><input type="month" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('month')">&gt;</i></div>
      </div>
      <div>
        <div>password</div>
        <div><input type="password" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('password')">&gt;</i></div>
      </div>
      <div>
        <div>time</div>
        <div><input type="time" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('time')">&gt;</i></div>
      </div>
      <div>
        <div>url</div>
        <div><input type="url" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('url')">&gt;</i></div>
      </div>
      <div>
        <div>week</div>
        <div><input type="week" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('week')">&gt;</i></div>
      </div>
      <div>
        <div>search</div>
        <div><input type="search" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('search')">&gt;</i></div>
      </div>

      <div>
        <div>range</div>
        <div><input type="range" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('range')">&gt;</i></div>
      </div>
      <div>
        <div>checkbox</div>
        <div><input type="checkbox" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('checkbox')">&gt;</i></div>
      </div>
      <div>
        <div>radio</div>
        <div><input type="radio" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('radio')">&gt;</i></div>
      </div>
      <div>
        <div>file</div>
        <div><input type="file" /></div>
        <div class="right-aligned"><i class="selectButton" @click="select('file')">&gt;</i></div>
      </div>
      <!-- <h2>Buttons</h2>
      <div>
        <div>button</div>
        <div><button type="button">button</button></div>
        <div>
          <i class="selectButton" @click="select('button-button')">&gt;</i>
        </div>
      </div>
      <div>
        <div>reset</div>
        <div><button type="reset">reset</button></div>
        <div>
          <i class="selectButton" @click="select('button-reset')">&gt;</i>
        </div>
      </div>
      <div>
        <div>submit</div>
        <div><button type="submit">submit</button></div>
        <div>
          <i class="selectButton" @click="select('button-submit')">&gt;</i>
        </div>
      </div>
      <h2>Other</h2>
      <div>
        <div>meter</div>
        <div>
          <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50"> </meter>
        </div>
        <div class="right-aligned"><i class="selectButton" @click="select('meter')">&gt;</i></div>
      </div>

      <div>
        <div>progress</div>
        <div>
          <progress id="file" max="100" value="70"> 70% </progress>
        </div>
        <div class="right-aligned"><i class="selectButton" @click="select('progress')">&gt;</i></div>
      </div>

      <div>
        <div>textarea</div>
        <div>
          <textarea></textarea>
        </div>
        <div class="right-aligned"><i class="selectButton" @click="select('textarea')">&gt;</i></div>
      </div>

      <div>
        <div>select</div>
        <div>
          <select>
            <option>One</option>
            <option>Two</option>

            <optgroup label="letters">
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>And a long long text to see how it is going to look</option>
            </optgroup>
          </select>
        </div>
        <div class="right-aligned"><i class="selectButton" @click="select('select')">&gt;</i></div>
      </div>
      -->
    </form>
  </div>
</template>
<script>
import ElementControl from '@/components/ElementControl'

export default {
  name: 'Inputs',
  components: { ElementControl },
  data() {
    return {
      selectedElement: null,
      customCSS: 'form  input {padding: 20px}',
      elements: {}
    }
  },
  watch: {
    customCSS(val) {
      const styleElm = document.getElementById('mystyle')
      if (styleElm) {
        styleElm.textContent = val
      }
    }
  },
  methods: {
    select(value) {
      this.selectedElement = null
      setTimeout(() => {
        this.selectedElement = value
      }, 50)
    },
    changeValues(value) {
      if (!this.elements[this.selectedElement]) {
        this.elements[this.selectedElement] = {}
      }
      this.elements[this.selectedElement] = value
      this.makeCss()
    },
    fetchElementValues(type) {
      return this.elements[type] || {}
    },
    makeCss() {
      const output = []
      const classes = Object.entries(this.elements)
      classes.forEach(el => {
        output.push(`form input[type=${el[0]}]{`)
        const attributes = Object.entries(el[1])
        attributes.forEach(at => {
          if (at[1] && at[1].value !== '') {
            output.push(`${at[0]}: ${at[1].value}${at[1].sizing}`)
            if (`${at[0]}`.includes('border') && !`${at[0]}`.includes('radius')) {
              output.push(`${at[1].borderStyle} ${at[1].color}`)
            }
            output.push(';')
          }
        })
        output.push('}')
      })
      this.customCSS = output.join(' ')
      const mycss = document.getElementById('mycss')
      mycss.innerText = this.customCSS
    }
  }
}
</script>
<style scoped>
.container > form > div {
  display: grid;
  grid-template: auto/ 1fr 2fr 1fr;
  grid-gap: 5px;
  max-width: 500px;
  margin: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
.right-aligned {
  display: flex;
  justify-content: flex-end;
}
.selectButton {
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
  background-color: lavender;
}
.floating {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
  overflow-y: auto;
  width: 220px;
}
form * {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;

  appearance: none;
}
</style>
