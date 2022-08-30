export type TService = {
    id: number,
    image: string,
    title: string,
    description: string,
};
export type TProject = {
    id: number,
    name: string,
    description: string,
    image: string,
    listTitle: string,
    listItems: {name:string}[],
}