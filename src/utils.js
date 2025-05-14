export const getImageUrl = (path) => {
    return new URL(`/assestss/${path}`,import.meta.url).href;
};