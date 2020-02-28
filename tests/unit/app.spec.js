import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import app from '../../src/app.vue';
import appHeader from '../../src/components/app-header/appHeader.vue';

describe('In App Component', () => {
  let appWrapper;
  const router = new VueRouter({ path: '/', name: 'home' });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(appWrapper.html()).toContain('<div id="app" class="container">');
  });

  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes('id')).toBe('app');
  });

  it('it should have a div element with class="container"', () => {
    expect(appWrapper.attributes('class')).toBe('container');
  });

  describe('it should load appHeader component', () => {
    it('it should load the app-header', () => {
      expect(appHeader).toBeTruthy();
    });

    it('it should have a <app-header-stub></app-header-stub>', () => {
      expect(appWrapper.html()).toContain('<app-header-stub></app-header-stub>');
    });
  });
});
