import { MenusService } from "../../services/menus";

export const ACT_SET_MAIN_MENUS = "ACT_SET_MAIN_MENUS";

export const actSetMainMenus = ({ menus }) => {
  return {
    type: ACT_SET_MAIN_MENUS,
    payload: { menus },
  };
};

function handleMapMenuItem(menuItem) {
  const data = {
    id: menuItem.ID,
    title: menuItem.title,
    url: menuItem.url,
    // child_items: menuItem.child_items
  };

  if (menuItem.child_items) {
    const menusItems = menuItem.child_items.map((menuItemItem) => {
      return handleMapMenuItem(menuItemItem);
    });

    data.child_items = menusItems;
  }

  return data;
}

export const actFetchMainMenusAsync = () => {
  return async (dispatch, getState) => {
    try {
      const lang = getState().App.lang;
      const response = await MenusService.getMenusBySlug(`main-menu-` + lang);
      const menusItems = response.data.items.map((menuItem) => {
        return handleMapMenuItem(menuItem);
      });

      dispatch(
        actSetMainMenus({
          menus: menusItems,
        })
      );
    } catch (e) {}
  };
};
