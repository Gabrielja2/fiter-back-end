export class PrizeDrawModel {
    constructor(
        public readonly id: string,
        public prizeDrawSequence: number,
        public current: boolean,
        public numbers?: number[],
        public prize?: number,
    ) { }
}