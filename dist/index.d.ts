import { IControl, Map as MapboxMap } from 'mapbox-gl';
export type MapboxStyleDefinition = {
    title: string;
    uri: string;
};
export type MapboxStyleSwitcherOptions = {
    defaultStyle?: string;
    eventListeners?: MapboxStyleSwitcherEvents;
};
type MapboxStyleSwitcherEvents = {
    onOpen?: (event: MouseEvent) => boolean;
    onSelect?: (event: MouseEvent) => boolean;
    onChange?: (event: MouseEvent, style: MapboxStyleDefinition) => boolean;
};
export declare class MapboxStyleSwitcherControl implements IControl {
    private static readonly DEFAULT_STYLE;
    private static readonly DEFAULT_STYLES;
    private controlContainer;
    private events?;
    private map?;
    private mapStyleContainer;
    private styleButton;
    private styles;
    private defaultStyle;
    constructor(styles?: MapboxStyleDefinition[], options?: MapboxStyleSwitcherOptions | string);
    getDefaultPosition(): string;
    onAdd(map: MapboxMap): HTMLElement;
    onRemove(): void;
    private closeModal;
    private openModal;
    private onDocumentClick;
}
export {};
