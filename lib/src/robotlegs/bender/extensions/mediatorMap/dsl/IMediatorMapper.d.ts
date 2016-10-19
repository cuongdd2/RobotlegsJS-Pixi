import { IMediatorConfigurator } from "./IMediatorConfigurator";
/**
 * Maps a matcher to a concrete Mediator class
 */
export interface IMediatorMapper {
    /**
     * Maps a matcher to a concrete Mediator class
     * @param mediatorClass The concrete mediator class
     * @return Mapping configurator
     */
    toMediator(mediatorClass: any): IMediatorConfigurator;
}
