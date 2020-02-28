import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import appHeader from '../../../../src/components/app-header/appHeader.vue';
import { routes } from '../../../../src/router/index';

describe('In app-header Component', () => {
  let appHeaderWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    appHeaderWrapper = shallowMount(appHeader, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appHeaderWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-navbar-stub tag="nav" type="dark" variant="info" toggleable="lg">';
    expect(appHeaderWrapper.html()).toContain(expected);
  });

  it('it should have a <b-navbar-brand> element', () => {
    expect(appHeaderWrapper.contains('b-navbar-brand-stub')).toBe(true);
  });

  it('it should have a <b-navbar-toggle> element', () => {
    expect(appHeaderWrapper.contains('b-navbar-toggle-stub')).toBe(true);
  });

  it('it should have a <b-nav-item> element', () => {
    expect(appHeaderWrapper.contains('b-nav-item-stub')).toBe(true);
  });

  it('it should have two <b-nav-item> element', () => {
    expect(appHeaderWrapper.findAll('b-nav-item-stub').length).toBe(2);
  });

  it('renders a router-link tag with to home url', () => {
    expect(appHeaderWrapper.vm.$route.path).toBe(routes[0].path);
  });

  it('renders a router-link tag with to about url', () => {
    expect(appHeaderWrapper.find('[href="#/about"]')).toBeTruthy();
  });
});
