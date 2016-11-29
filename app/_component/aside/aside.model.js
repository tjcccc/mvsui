"use strict";
var AsideMenu = (function () {
    function AsideMenu(Id, parentId, menuId, level, label, iconClass, link) {
        this.Id = Id;
        this.parentId = parentId;
        this.menuId = menuId;
        this.level = level;
        this.label = label;
        this.iconClass = iconClass;
        this.link = link;
    }
    return AsideMenu;
}());
exports.AsideMenu = AsideMenu;
//# sourceMappingURL=aside.model.js.map