function constructPostBody(id, name, desc) {
    return {
        id,
        name,
        description: desc
    }
}
//can define more utils functions here

export default {
    constructPostBody,
    // can export more utils functions here
};