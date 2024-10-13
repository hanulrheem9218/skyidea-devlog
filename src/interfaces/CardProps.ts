export interface CardProps {
    title?: string;
    description?:string;
    imgSrc?: string;
    date?:Date;
    tags?:string[];
    onClick?: () => void;
}