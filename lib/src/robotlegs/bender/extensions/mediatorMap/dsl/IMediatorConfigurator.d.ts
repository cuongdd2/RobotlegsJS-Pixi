import { IGuard, IHook } from "robotlegs";
/**
 * Configures a mediator mapping
 */
export interface IMediatorConfigurator {
    /**
     * Guards to check before allowing a mediator to be created
     * @param guards Guards
     * @return Self
     */
    withGuards(...guards: IGuard[]): IMediatorConfigurator;
    /**
     * Hooks to run before a mediator is created
     * @param hooks Hooks
     * @return Self
     */
    withHooks(...hooks: IHook[]): IMediatorConfigurator;
    /**
     * Should the mediator be removed when the mediated item looses scope?
     *
     * <p>Usually this would be when the mediated item is a Display Object
     * and it leaves the stage.</p>
     *
     * @param value Boolean
     * @return Self
     */
    autoRemove(value: boolean): IMediatorConfigurator;
}
