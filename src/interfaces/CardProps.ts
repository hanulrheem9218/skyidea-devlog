export interface CardProps {
    index?: number;
    title?: string;
    description?:string;
    imgSrc?: string;
    date?:Date;
    tags?:string[];
    onClick?: () => void;
}