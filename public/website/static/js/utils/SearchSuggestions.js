import {
    chinaCategories
} from "./ChinaCategories";
import {
    aliExpressCategories
} from "./AliExpressCategories";
import {
    pakistanCategories
} from "./PakistanCategories";
import {
    amazonCategories
} from "./AmazonCategories";

export function suggestions() {
    let suggestion = [];

    chinaCategories.forEach((el) => {
        suggestion.push(el.name.toLocaleLowerCase());
        el.sub.forEach((el2) => {
            suggestion.push(el2.name.toLocaleLowerCase());
        });
    });
    pakistanCategories.forEach((el) => {
        suggestion.push(el.name.toLocaleLowerCase());
        el.sub.forEach((el2) => {
            suggestion.push(el2.name.toLocaleLowerCase());
        });
    });
    aliExpressCategories.forEach((el) => {
        suggestion.push(el.name.toLocaleLowerCase());
        el.sub.forEach((el2) => {
            suggestion.push(el2.name.toLocaleLowerCase());
        });
    });
    amazonCategories.forEach((el) => {
        suggestion.push(el.name.toLocaleLowerCase());
        el.sub.forEach((el2) => {
            suggestion.push(el2.name.toLocaleLowerCase());
        });
    });

    return suggestion;
}