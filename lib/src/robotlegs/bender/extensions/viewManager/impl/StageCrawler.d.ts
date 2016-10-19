import { ContainerBinding } from "./ContainerBinding";
/**
 * @private
 */
export declare class StageCrawler {
    private _binding;
    /**
     * @private
     */
    constructor(containerBinding: ContainerBinding);
    /**
     * @private
     */
    scan(view: any): void;
    private scanContainer(container);
    private processView(view);
}
