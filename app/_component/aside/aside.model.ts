export class AsideMenu {
    constructor(
        public menuId: string,
        public levelId: number,
        public parentId: string,
        public label: string,
        public iconClass: string,
        public link: string
    ) {}
}