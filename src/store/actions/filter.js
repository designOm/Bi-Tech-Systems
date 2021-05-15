export const handleFilter = (modal,min,max) =>dispatch=> {
    return dispatch(setFilter(modal,min,max))
  }


export function setFilter(modal,min,max) {
    //console.log("yashset",modal,min,max)
  return {
    type: modal,
    min,
    max,
  };
}