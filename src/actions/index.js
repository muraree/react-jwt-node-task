export const listUser = payload => ({ type:"LIST_USERS", payload });

export const currentUser = payload => ({ type:"CURRENT_USER", payload });

export const createNewUser = payload => ({ type:"CREATE_USER", payload });

export const deleteUser = payload => ({ type:"DELETE_USER", payload });

export const filterUser = payload => ({ type:"FILTER_USERS", payload});