
export const handleModal = (modal,data) =>dispatch=> {
    return dispatch(setPopup(modal,data))
  }


export function setPopup(modal,status) {
  return {
    type: modal,
    status,
  };
}  
