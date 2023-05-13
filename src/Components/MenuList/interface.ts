export interface MenuItemComponentInterface {
    classNameItem?: string;
    classNameItemText?: string;
    label: string;
    onClick: (go: string) => void;
}