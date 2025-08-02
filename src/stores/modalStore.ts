import {create} from "zustand";
//defining the type for the modal store

type ModalStoreState ={
    isOpen : boolean;
}

type ModalStoreActions = {
    openModal: () => void;
    closeModal: () => void;
}

//building the modal store using the create funtion from zustand
 const useModalStore = create<ModalStoreState&ModalStoreActions>(
    (set)=>({
        isOpen : false,
        openModal: () => set({isOpen:true}),
        closeModal:() => set({isOpen:false}),
    })
)

export {useModalStore};