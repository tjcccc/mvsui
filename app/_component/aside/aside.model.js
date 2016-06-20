"use strict";
var AsideMenu = (function () {
    function AsideMenu(menuId, levelId, parentId, label, iconClass, link) {
        this.menuId = menuId;
        this.levelId = levelId;
        this.parentId = parentId;
        this.label = label;
        this.iconClass = iconClass;
        this.link = link;
    }
    return AsideMenu;
}());
exports.AsideMenu = AsideMenu;
//# sourceMappingURL=aside.model.js.map