import { createApp } from 'vue';
import App from '@/App.vue';
import router from './routes';

// Import UI Components
import components from '@/components/UI';

// Import Store
import store from './store';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).mount('#app');
