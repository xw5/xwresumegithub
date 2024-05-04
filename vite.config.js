import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  assetsInclude: ['**/*.hdr'],
  // vite server 配置
  server: {
    host: true, // 启动ip访问地址
  }
})
