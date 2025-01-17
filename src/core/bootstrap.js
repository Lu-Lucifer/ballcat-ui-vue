import Vue from 'vue'
import store from '@/store/'
import {
  SETTINGS_LS,
  ACCESS_TOKEN,
  USER_INFO,
  ROLES,
  PERMISSIONS,
  APP_LANGUAGE
} from '@/store/storage-types'

import { appDefaultSetting } from '@/config/defaultSettings'
import { APP_MUTATIONS } from '@/store/mutation-types'
import { switchLanguage } from '@/locales'
import { defaultLanguage } from '@/config/projectConfig'

export default function Initializer () {
  console.log(`API_URL: ${process.env.VUE_APP_API_BASE_URL}`)

  // Settings
  store.commit(APP_MUTATIONS.TOGGLE_NAV_THEME, Vue.ls.get(SETTINGS_LS.NAV_THEME, appDefaultSetting.navTheme))
  store.commit(APP_MUTATIONS.TOGGLE_PRIMARY_COLOR, Vue.ls.get(SETTINGS_LS.PRIMARY_COLOR, appDefaultSetting.primaryColor))
  store.commit(APP_MUTATIONS.TOGGLE_LAYOUT, Vue.ls.get(SETTINGS_LS.LAYOUT, appDefaultSetting.layout))
  store.commit(APP_MUTATIONS.TOGGLE_CONTENT_WIDTH, Vue.ls.get(SETTINGS_LS.CONTENT_WIDTH_TYPE, appDefaultSetting.contentWidth))
  store.commit(APP_MUTATIONS.TOGGLE_FIXED_HEADER, Vue.ls.get(SETTINGS_LS.FIXED_HEADER, appDefaultSetting.fixedHeader))
  store.commit(APP_MUTATIONS.TOGGLE_FIXED_SIDERBAR, Vue.ls.get(SETTINGS_LS.FIXED_SIDE_MENU, appDefaultSetting.fixSiderbar))
  store.commit(APP_MUTATIONS.TOGGLE_COLOR_WEAK, Vue.ls.get(SETTINGS_LS.COLOR_WEAK, appDefaultSetting.colorWeak))

  store.commit(APP_MUTATIONS.TOGGLE_MULTI_TAB, Vue.ls.get(SETTINGS_LS.MULTI_TAB, appDefaultSetting.multiTab))

  // 用户权限
  store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
  store.commit('SET_INFO', Vue.ls.get(USER_INFO))
  store.commit('SET_ROLES', Vue.ls.get(ROLES))
  store.commit('SET_PERMISSIONS', Vue.ls.get(PERMISSIONS))

  // 国际化处理
  switchLanguage(Vue.ls.get(APP_LANGUAGE, defaultLanguage))
}
