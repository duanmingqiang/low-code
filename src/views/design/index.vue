<template>
  <div class="low-code-design-container">
    <div class="header">
      <design-header />
    </div>
    <div class="main-container">
      <div class="material-container">
        <material-panel />
      </div>
      <div class="design-container">
        <design-editor />
      </div>
      <div class="setting-container">
        <setting-panel />
      </div>
    </div>
  </div>
</template>

<script >
import DesignEditor from './components/DesignEditor.vue'
import DesignHeader from './components/DesignHeader.vue'
import MaterialPanel from './components/MaterialPanel.vue'
import SettingPanel from './components/SettingPanel.vue'
export default {
  name: 'Design',
  components: {DesignHeader, MaterialPanel, DesignEditor, SettingPanel},
  data() {
    return {}
  }
}

</script>

<style scoped lang="less">
.low-code-design-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  .header {
    height: 50px;
    width: 100%;
  }
  .main-container {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    .material-container {
      width: 260px;
      // background-color: blue;
    }
    .design-container {
      width: calc(100% - 520px);
      // background-color: red;
    }
    .setting-container {
      width: 260px;
      // background-color: yellow;
    }
  }
}
</style>