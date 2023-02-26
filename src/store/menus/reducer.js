import { ACT_SET_MAIN_MENUS } from "./actions";
import { Trans } from "@lingui/macro";
const initState = {
  mainMenus: [
    {
      id: "home",
      url: "/",
      title: <Trans>Trang chủ</Trans>,
    },
  ],
};

function menusReducer(state = initState, action) {
  switch (action.type) {
    case ACT_SET_MAIN_MENUS:
      return {
        ...state,
        mainMenus: action.payload.menus,
      };
    default:
      return state;
  }
}

export default menusReducer;
