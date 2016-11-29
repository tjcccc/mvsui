export class AsideMenu {
    constructor(
        public Id: number,
        public parentId: number,
        public menuId: string,
        public level: number,
        public label: string,
        public iconClass: string,
        public link: string
    ) {}
}
