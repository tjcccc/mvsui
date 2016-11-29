"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var asideMenus = [
            {
                "id": 0,
                "parentId": null,
                "menuId": "aside-dashboard",
                "level": 1,
                "label": "Dashboard",
                "iconClass": "fa fa-th-large fa-fw",
                "link": ""
            },
            {
                "id": 1,
                "parentId": null,
                "menuId": "aside-form",
                "level": 1,
                "label": "Form",
                "iconClass": "fa fa-edit fa-fw",
                "link": ""
            },
            {
                "id": 2,
                "parentId": null,
                "menuId": "aside-table",
                "level": 1,
                "label": "Table",
                "iconClass": "fa fa-table fa-fw",
                "link": ""
            },
            {
                "id": 3,
                "parentId": null,
                "menuId": "aside-graph",
                "level": 1,
                "label": "Graph",
                "iconClass": "fa fa-bar-chart-o fa-fw",
                "link": ""
            },
            {
                "id": 4,
                "parentId": null,
                "menuId": "aside-uielement",
                "level": 1,
                "label": "UI Element",
                "iconClass": "fa fa-flask fa-fw",
                "link": ""
            },
            {
                "id": 5,
                "parentId": 0,
                "menuId": "aside-level2a",
                "level": 2,
                "label": "My Dashboard",
                "iconClass": "",
                "link": "/dashboard"
            },
            {
                "id": 6,
                "parentId": 0,
                "menuId": "aside-level2b",
                "level": 2,
                "label": "Level 2",
                "iconClass": "",
                "link": ""
            },
            {
                "id": 7,
                "parentId": 0,
                "menuId": "aside-level2c",
                "level": 2,
                "label": "Level 2",
                "iconClass": "",
                "link": ""
            },
            {
                "id": 8,
                "parentId": 1,
                "menuId": "aside-form1",
                "level": 2,
                "label": "Form 1",
                "iconClass": "",
                "link": "/form"
            },
            {
                "id": 9,
                "parentId": 1,
                "menuId": "aside-form2",
                "level": 2,
                "label": "Form 2",
                "iconClass": "",
                "link": ""
            },
            {
                "id": 10,
                "parentId": 1,
                "menuId": "aside-form3",
                "level": 2,
                "label": "Form 3",
                "iconClass": "",
                "link": ""
            },
            {
                "id": 11,
                "parentId": 2,
                "menuId": "aside-echarts",
                "level": 2,
                "label": "ECharts",
                "iconClass": "",
                "link": ""
            },
            {
                "id": 12,
                "parentId": 5,
                "menuId": "aside-level3a",
                "level": 3,
                "label": "Level 3",
                "iconClass": "",
                "link": ""
            },
            {
                "id": 13,
                "parentId": 5,
                "menuId": "aside-level3b",
                "level": 3,
                "label": "Level 3",
                "iconClass": "",
                "link": ""
            }
        ];
        return { asideMenus: asideMenus };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map