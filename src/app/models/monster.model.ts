export class Monster {

    constructor(
        public picture?: string[],
        public name?: string,
        public level?: number,
        public monsterrace?: string,
        public abilities?: string[],
        public str?: number,
        public int?: number,
        public dex?: number,
        public _id?: string
    ) { }
}
