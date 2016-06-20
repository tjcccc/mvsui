import { AsideMenu } from './aside.model';

export var ASIDEMENUS: AsideMenu[] = [
    {
        "menuId": "aside-dashboard",
        "levelId": 1,
        "parentId": "",
        "label": "Dashboard",
        "iconClass": "fa fa-th-large fa-fw",
        "link": "#"
    },
    {
        "menuId": "aside-form",
        "levelId": 1,
        "parentId": "",
        "label": "Form",
        "iconClass": "fa fa-edit fa-fw",
        "link": "#"
    },
    {
        "menuId": "aside-table",
        "levelId": 1,
        "parentId": "",
        "label": "Table",
        "iconClass": "fa fa-table fa-fw",
        "link": "#"
    },
    {
        "menuId": "aside-graph",
        "levelId": 1,
        "parentId": "",
        "label": "Graph",
        "iconClass": "fa fa-bar-chart-o fa-fw",
        "link": "#"
    },
    {
        "menuId": "aside-uielement",
        "levelId": 1,
        "parentId": "",
        "label": "UI Element",
        "iconClass": "fa fa-flask fa-fw",
        "link": "#"
    },
    {
        "menuId": "aside-level2a",
        "levelId": 2,
        "parentId": "aside-dashboard",
        "label": "My Dashboard",
        "iconClass": "",
        "link": "Dashboard"
    },
    {
        "menuId": "aside-level2b",
        "levelId": 2,
        "parentId": "aside-dashboard",
        "label": "Level 2",
        "iconClass": "",
        "link": "#"
    },
    {
        "menuId": "aside-level2c",
        "levelId": 2,
        "parentId": "aside-dashboard",
        "label": "Level 2",
        "iconClass": "",
        "link": "#"
    },
    {
        "menuId": "aside-form1",
        "levelId": 2,
        "parentId": "aside-form",
        "label": "Form 1",
        "iconClass": "",
        "link": "Form"
    },
    {
        "menuId": "aside-form2",
        "levelId": 2,
        "parentId": "aside-form",
        "label": "Form 2",
        "iconClass": "",
        "link": "#"
    },
    {
        "menuId": "aside-form3",
        "levelId": 2,
        "parentId": "aside-form",
        "label": "Form 3",
        "iconClass": "",
        "link": "#"
    },
    {
        "menuId": "aside-echarts",
        "levelId": 2,
        "parentId": "aside-graph",
        "label": "ECharts",
        "iconClass": "",
        "link": "#"
    },
    {
        "menuId": "aside-level3a",
        "levelId": 3,
        "parentId": "aside-level2b",
        "label": "Level 3",
        "iconClass": "",
        "link": "#"
    },
    {
        "menuId": "aside-level3b",
        "levelId": 3,
        "parentId": "aside-level2b",
        "label": "Level 3",
        "iconClass": "",
        "link": "#"
    },
];