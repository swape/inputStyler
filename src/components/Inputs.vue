<template>
  <div class="container">
    <h2>Inputs</h2>
    <div>
      <div>text</div>
      <div><input type="text" /></div>
    </div>
    <div>
      <div>email</div>
      <div><input type="email" /></div>
    </div>
    <div>
      <div>number</div>
      <div><input type="number" /></div>
    </div>
    <div>
      <div>tel</div>
      <div><input type="tel" /></div>
    </div>
    <div>
      <div>button</div>
      <div><input type="button" value="I am input button" /></div>
    </div>
    <div>
      <div>color</div>
      <div><input type="color" /></div>
    </div>
    <div>
      <div>date</div>
      <div><input type="date" /></div>
    </div>
    <div>
      <div>datetime</div>
      <div><input type="datetime" /></div>
    </div>
    <div>
      <div>datetime-local</div>
      <div><input type="datetime-local" /></div>
    </div>
    <div>
      <div>month</div>
      <div><input type="month" /></div>
    </div>
    <div>
      <div>password</div>
      <div><input type="password" /></div>
    </div>
    <div>
      <div>time</div>
      <div><input type="time" /></div>
    </div>
    <div>
      <div>url</div>
      <div><input type="url" /></div>
    </div>
    <div>
      <div>week</div>
      <div><input type="week" /></div>
    </div>
    <div>
      <div>search</div>
      <div><input type="search" /></div>
    </div>

    <div>
      <div>range</div>
      <div><input type="range" /></div>
    </div>
    <div>
      <div>checkbox</div>
      <div><input type="checkbox" /></div>
    </div>
    <div>
      <div>radio</div>
      <div><input type="radio" /></div>
    </div>
    <div>
      <div>file</div>
      <div><input type="file" /></div>
    </div>
    <h2>Buttons</h2>
    <div>
      <div>button</div>
      <div><button type="button">button</button></div>
    </div>
    <div>
      <div>reset</div>
      <div><button type="reset">reset</button></div>
    </div>
    <div>
      <div>submit</div>
      <div><button type="submit">submit</button></div>
    </div>
    <h2>Other</h2>
    <div>
      <div>meter</div>
      <div>
        <meter
          id="fuel"
          min="0"
          max="100"
          low="33"
          high="66"
          optimum="80"
          value="50"
        >
        </meter>
      </div>
    </div>

    <div>
      <div>progress</div>
      <div>
        <progress id="file" max="100" value="70"> 70% </progress>
      </div>
    </div>

    <div>
      <div>textarea</div>
      <div>
        <textarea></textarea>
      </div>
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
          </optgroup>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Inputs'
};
</script>
<style scoped>
.container > div {
  display: grid;
  grid-template: auto/ 1fr 2fr;
  grid-gap: 5px;
  max-width: 500px;
  margin: 5px auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>
