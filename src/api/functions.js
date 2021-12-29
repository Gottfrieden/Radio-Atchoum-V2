import { base } from './base';

export const readList = (listName, setList, setIsLoading) => base(listName).select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    setIsLoading(true);
    setList(records);
    setIsLoading(false);
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});