/**
 * Created by rbachleitner on 6/27/17.
 */

function onListClick(paper, store) {
  store.papersStore.clickedEntity = paper;
  store.papersStore.selectedArea = paper.area;
  store.bubblesStore.selectedArea = paper.area;
}

export {onListClick};