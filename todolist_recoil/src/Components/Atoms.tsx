import { atom, selector } from 'recoil';

export interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [], // atom함수의 반환값
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if(category === "TO_DO") return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if(category === "DOING") return toDos.filter((toDo) => toDo.category === "DOING");
    // if(category === "DONE") return toDos.filter((toDo) => toDo.category === "DONE");
    return toDos.filter((toDo) => (
      toDo.category === category
    ));
  },
});